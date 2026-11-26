// Small isometric drawing kit for the Remotion illustrations: camera with a
// top-down → 3D tilt, shaded boxes, sun shadows, palms, pool water, glow.

import { interpolate } from "remotion";

export const COS30 = Math.cos(Math.PI / 6);
export const SIN30 = 0.5;
export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };

export const lerp = (a, b, t) => a + (b - a) * t;
export const easeInOut = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : (1 - Math.cos(Math.PI * t)) / 2);
export const easeOut = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : 1 - Math.pow(1 - t, 3));
export const progress = (frame, start, end, ease = easeInOut) => ease(interpolate(frame, [start, end], [0, 1], clamp));

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
export function mix(a, b, t) {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  const c = A.map((v, i) => Math.round(lerp(v, B[i], Math.min(1, Math.max(0, t)))));
  return `#${c.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}
export const shade = (hex, f) => (f >= 0 ? mix(hex, "#ffffff", f) : mix(hex, "#0a1426", -f));

/** World → screen. tilt 0 = top-down blueprint, 1 = full isometric. */
export function makeCamera({ tilt = 1, k = 20, cx = 600, cy = 430, zoom = 1, panX = 0, panY = 0 }) {
  const ky = lerp(COS30, SIN30, tilt);
  return (x, y, z = 0) => [
    cx + (x - y) * COS30 * k * zoom + panX,
    cy + ((x + y) * ky - z * tilt) * k * zoom + panY,
  ];
}

export const pts = (list) => list.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(" ");

function hull(points) {
  const p = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [];
  for (const q of p) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], q) <= 0) lower.pop();
    lower.push(q);
  }
  const upper = [];
  for (let i = p.length - 1; i >= 0; i -= 1) {
    const q = p[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], q) <= 0) upper.pop();
    upper.push(q);
  }
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

/** Sun direction from a 0..1 day position: shadow offset per metre of height. */
export function sunAt(day) {
  const az = lerp(-0.9, 0.9, day);
  const elev = 0.35 + Math.sin(Math.PI * day) * 0.9;
  const len = 1 / Math.tan(elev);
  return { dx: Math.sin(az) * len * 0.9, dy: Math.cos(az) * len * 0.55 + 0.25 };
}

export function Shadow({ cam, x, y, w, d, h, z0 = 0, sun, opacity = 0.22, color = "#1d2a44" }) {
  if (h <= 0.01 && z0 <= 0.01) return null;
  const corners = [];
  for (const [px, py] of [[x, y], [x + w, y], [x + w, y + d], [x, y + d]]) {
    for (const z of [z0, z0 + h]) corners.push([px + sun.dx * z, py + sun.dy * z]);
  }
  if (z0 <= 0.01) for (const [px, py] of [[x, y], [x + w, y], [x + w, y + d], [x, y + d]]) corners.push([px, py]);
  const poly = hull(corners).map(([a, b]) => cam(a, b, 0));
  return <polygon points={pts(poly)} fill={color} opacity={opacity} />;
}

export function Box({ cam, x, y, w, d, h, z0 = 0, color, opacity = 1, stroke, strokeWidth = 1.2, light = 0 }) {
  const P = cam;
  const H = Math.max(0, h);
  const top = [P(x, y, z0 + H), P(x + w, y, z0 + H), P(x + w, y + d, z0 + H), P(x, y + d, z0 + H)];
  const right = [P(x + w, y, z0), P(x + w, y + d, z0), P(x + w, y + d, z0 + H), P(x + w, y, z0 + H)];
  const left = [P(x, y + d, z0), P(x + w, y + d, z0), P(x + w, y + d, z0 + H), P(x, y + d, z0 + H)];
  const s = stroke ? { stroke, strokeWidth, strokeLinejoin: "round" } : {};
  return (
    <g opacity={opacity}>
      {H > 0.01 ? (
        <>
          <polygon points={pts(right)} fill={shade(color, -0.1 + light * 0.05)} {...s} />
          <polygon points={pts(left)} fill={shade(color, -0.24 + light * 0.05)} {...s} />
        </>
      ) : null}
      <polygon points={pts(top)} fill={shade(color, 0.08 + light * 0.05)} {...s} />
    </g>
  );
}

/** Rectangle on a box face. face: "right" (x = x+w) or "left" (y = y+d). u along face, v up. */
export function FaceRect({ cam, box, face, u0, u1, v0, v1, fill, opacity = 1, stroke, strokeWidth = 1 }) {
  const { x, y, w, d, z0 = 0 } = box;
  const at = (u, v) => (face === "right" ? cam(x + w + 0.01, y + u, z0 + v) : cam(x + u, y + d + 0.01, z0 + v));
  const poly = [at(u0, v0), at(u1, v0), at(u1, v1), at(u0, v1)];
  return <polygon points={pts(poly)} fill={fill} opacity={opacity} stroke={stroke} strokeWidth={strokeWidth} />;
}

export function GroundRect({ cam, x, y, w, d, fill, opacity = 1, stroke, strokeWidth, z = 0, ...rest }) {
  const poly = [cam(x, y, z), cam(x + w, y, z), cam(x + w, y + d, z), cam(x, y + d, z)];
  return <polygon points={pts(poly)} fill={fill} opacity={opacity} stroke={stroke} strokeWidth={strokeWidth} {...rest} />;
}

/** Plan outline drawn progressively (0..1). */
export function PlanLine({ cam, path, draw, color, width = 2.4, z = 0.02 }) {
  const d = path.map(([px, py], i) => `${i ? "L" : "M"} ${cam(px, py, z).map((n) => n.toFixed(1)).join(" ")}`).join(" ") + " Z";
  return (
    <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" strokeLinecap="round"
      pathLength="1" strokeDasharray="1" strokeDashoffset={1 - draw} />
  );
}

export function Pool({ cam, id, x, y, w, d, frame, fill = 1, night = 0 }) {
  const coping = [cam(x - 0.5, y - 0.5), cam(x + w + 0.5, y - 0.5), cam(x + w + 0.5, y + d + 0.5), cam(x - 0.5, y + d + 0.5)];
  const water = [cam(x, y), cam(x + w, y), cam(x + w, y + d), cam(x, y + d)];
  const inner = [cam(x, y, -0.01), cam(x + w, y, -0.01), cam(x + w, y + d * fill, -0.01), cam(x, y + d * fill, -0.01)];
  const xs = water.map((p) => p[0]);
  const ys = water.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const shift = (frame * 0.9) % 40;
  return (
    <g>
      <defs>
        <linearGradient id={`${id}-water`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={mix("#2f9fe0", "#1b6fa8", night)} />
          <stop offset="1" stopColor={mix("#8fe0ff", "#3fb6e8", night)} />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <polygon points={pts(inner)} />
        </clipPath>
      </defs>
      <polygon points={pts(coping)} fill="#f2ece0" />
      <polygon points={pts(water)} fill="#c9d6dc" />
      <polygon points={pts(inner)} fill={`url(#${id}-water)`} />
      <g clipPath={`url(#${id}-clip)`} opacity={0.5 + night * 0.25}>
        {Array.from({ length: Math.ceil((maxY - minY) / 9) + 6 }, (_, i) => {
          const yy = minY - 20 + i * 9 + ((shift * 0.5) % 9);
          const wob = Math.sin(frame / 9 + i) * 6;
          return (
            <path key={i}
              d={`M ${minX - 40} ${yy} q 12 ${-4 + wob * 0.2} 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0 t 24 0`}
              transform={`translate(${shift} 0)`} stroke="#e8fbff" strokeWidth="1.4" fill="none" opacity={0.35 + (i % 3) * 0.15} />
          );
        })}
        <ellipse cx={lerp(minX, maxX, 0.62)} cy={lerp(minY, maxY, 0.4)} rx={(maxX - minX) * 0.22} ry={(maxY - minY) * 0.1}
          fill="#ffffff" opacity={0.25 * (1 - night)} />
        {night > 0 ? <ellipse cx={(minX + maxX) / 2} cy={(minY + maxY) / 2} rx={(maxX - minX) * 0.35} ry={(maxY - minY) * 0.3} fill="#7fe3ff" opacity={night * 0.35} /> : null}
      </g>
    </g>
  );
}

export function Palm({ cam, x, y, height = 7, grow = 1, frame, seed = 0, tilt = 1, night = 0 }) {
  if (grow <= 0.01) return null;
  const [bx, by] = cam(x, y, 0);
  const [tx0, ty0] = cam(x, y, height * grow);
  const sway = Math.sin(frame / 22 + seed) * 1.6 * tilt;
  const tx = tx0 + sway * 3;
  const ty = ty0;
  const frond = mix("#4f9d5a", "#1f3b2c", night * 0.8);
  const frondDark = mix("#2f7442", "#142a1f", night * 0.8);
  const trunk = mix("#a07a52", "#3d3027", night * 0.7);
  const L = 46 * grow;
  return (
    <g>
      <ellipse cx={bx + 18} cy={by + 4} rx={30 * grow} ry={10 * grow} fill="#1d2a44" opacity={0.14 * (1 - night)} />
      {tilt > 0.05 ? (
        <path d={`M ${bx} ${by} Q ${bx + sway * 4 + 6} ${(by + ty) / 2} ${tx} ${ty}`} stroke={trunk} strokeWidth={5 * grow + 1}
          fill="none" strokeLinecap="round" />
      ) : null}
      <g transform={`translate(${tx} ${ty}) scale(1 ${lerp(1, 0.6, tilt)})`}>
        {Array.from({ length: 9 }, (_, i) => {
          const a = i * 40 + seed * 17 + Math.sin(frame / 18 + i + seed) * 4;
          return (
            <g key={i} transform={`rotate(${a})`}>
              <path d={`M 0 0 Q ${L * 0.45} ${-L * 0.28} ${L} ${L * 0.12} Q ${L * 0.5} ${-L * 0.02} 0 0 Z`} fill={i % 2 ? frond : frondDark} />
              <path d={`M 0 0 Q ${L * 0.45} ${-L * 0.18} ${L * 0.96} ${L * 0.1}`} stroke={frondDark} strokeWidth="0.8" fill="none" opacity="0.6" />
            </g>
          );
        })}
        <circle r={3.4 * grow} fill="#7a5a32" />
      </g>
    </g>
  );
}

export function Glow({ x, y, r, color = "#ffcf7a", opacity = 1, id }) {
  return (
    <g opacity={opacity}>
      <defs>
        <radialGradient id={id}>
          <stop offset="0" stopColor={color} stopOpacity="0.9" />
          <stop offset="0.35" stopColor={color} stopOpacity="0.35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={x} cy={y} r={r} fill={`url(#${id})`} />
    </g>
  );
}

/** Sky colour from a 0..1 "dusk" value. */
export function skyColors(dusk) {
  const top = dusk < 0.5 ? mix("#cfe6fb", "#f0a674", dusk * 2) : mix("#f0a674", "#0e1a36", (dusk - 0.5) * 2);
  const bottom = dusk < 0.5 ? mix("#f7f2e8", "#ffd9a8", dusk * 2) : mix("#ffd9a8", "#2a3557", (dusk - 0.5) * 2);
  return [top, bottom];
}
