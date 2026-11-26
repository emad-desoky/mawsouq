// Remotion compositions for the rest-house pages: 3D (isometric) scenes with a
// moving sun, real shadows, water, palms and a day-to-evening light change.
// Illustration only: no text inside the animations.

import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import {
  Box,
  FaceRect,
  Glow,
  GroundRect,
  Palm,
  PlanLine,
  Pool,
  Shadow,
  clamp,
  easeOut,
  lerp,
  makeCamera,
  mix,
  progress,
  skyColors,
  sunAt,
} from "./isoEngine";

export const MOTION_W = 1200;
export const MOTION_H = 800;
export const MOTION_FPS = 30;
export const MOTION_FRAMES = 300;

const WALL = "#f2e8d6";
const CAP = "#d9c9a8";
const STONE = "#efe7d8";
const SAND = "#e7d3a8";
const GRASS = "#7cb36b";
const WOOD = "#9b6f45";
const GLASS = "#9fc7e2";
const WARM = "#ffc970";
const LINE = "#1f4f86";

function useLoopOpacity() {
  const frame = useCurrentFrame();
  return interpolate(frame, [0, 10, MOTION_FRAMES - 16, MOTION_FRAMES - 1], [0, 1, 1, 0], clamp);
}

function Sky({ id, dusk, stars = false, frame }) {
  const [top, bottom] = skyColors(dusk);
  const night = Math.max(0, (dusk - 0.55) / 0.45);
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="1" stopColor={bottom} />
        </linearGradient>
      </defs>
      <rect width={MOTION_W} height={MOTION_H} fill={`url(#${id}-sky)`} />
      {stars
        ? Array.from({ length: 40 }, (_, i) => (
            <circle key={i} cx={(i * 137) % MOTION_W} cy={(i * 71) % 300} r={i % 5 === 0 ? 1.8 : 1.1} fill="#fff"
              opacity={night * (0.45 + 0.4 * Math.sin(frame / 10 + i))} />
          ))
        : null}
    </>
  );
}

function SunDisc({ day, dusk, id }) {
  const x = lerp(160, 1040, day);
  const y = 150 - Math.sin(Math.PI * day) * 90 + dusk * 120;
  const color = mix("#ffd45a", "#ff8a4c", dusk);
  return (
    <g opacity={1 - Math.max(0, (dusk - 0.6) / 0.3)}>
      <Glow id={`${id}-sun`} x={x} y={y} r={150} color={color} opacity={0.7} />
      <circle cx={x} cy={y} r="34" fill={color} />
    </g>
  );
}

/* ----------------------------------------------------------------------- */
/* Shared rest-house scene                                                  */
/* ----------------------------------------------------------------------- */

function windowFill(dusk) {
  return dusk > 0.35 ? mix(GLASS, WARM, (dusk - 0.35) / 0.5) : GLASS;
}

function ResthouseScene({ cam, frame, rise, details, pool, pergola, palms, sun, dusk, idp, tilt = 1, colorIn = 1 }) {
  const night = Math.max(0, (dusk - 0.5) / 0.5);
  const ground = mix(SAND, "#5a5468", night * 0.75);
  const lawn = mix(GRASS, "#2d4a3a", night * 0.8);
  const wall = mix(WALL, "#c8bfae", night * 0.6);
  const shadowOpacity = 0.2 * (1 - Math.min(1, dusk * 1.6)) * tilt;

  const A = { x: -12, y: -9, w: 10, d: 8, h: 4.4 * rise, z0: 0 };
  const B = { x: -12, y: -1, w: 6, d: 7, h: 3.7 * rise, z0: 0 };
  const walls = [
    { x: -15, y: -11, w: 30, d: 0.45, h: 2.1 * rise },
    { x: -15, y: -11, w: 0.45, d: 22, h: 2.1 * rise },
    { x: -15, y: 10.6, w: 12, d: 0.4, h: 0.7 * rise },
    { x: 1, y: 10.6, w: 14, d: 0.4, h: 0.7 * rise },
    { x: 14.6, y: -11, w: 0.4, d: 22, h: 0.7 * rise },
  ];
  const posts = [[-3.4, 2.6], [1.6, 2.6], [-3.4, 7.6], [1.6, 7.6]];
  const postH = 2.9 * pergola;
  const slats = Array.from({ length: 9 }, (_, i) => ({ x: -3.6 + i * 0.66, y: 2.4, w: 0.22, d: 5.6, h: 0.22, z0: 2.9 }));
  const slatIn = (i) => Math.min(1, Math.max(0, pergola * 1.6 - 0.6 - i * 0.05));
  const winOpacity = details * colorIn;
  const win = windowFill(dusk);

  return (
    <g>
      <GroundRect cam={cam} x={-15} y={-11} w={30} d={22} fill={ground} />
      <GroundRect cam={cam} x={3} y={6} w={10.5} d={4} fill={lawn} opacity={palms} />
      <GroundRect cam={cam} x={-14.4} y={7} w={9} d={3.4} fill={lawn} opacity={palms} />
      <GroundRect cam={cam} x={-1} y={-2} w={14} d={9} fill={mix(STONE, "#8b8597", night * 0.6)} opacity={pool} />

      {/* Shadows */}
      {[A, B, ...walls].map((b, i) => <Shadow key={`s${i}`} cam={cam} {...b} sun={sun} opacity={shadowOpacity} />)}
      {posts.map(([px, py], i) => <Shadow key={`ps${i}`} cam={cam} x={px} y={py} w={0.3} d={0.3} h={postH} sun={sun} opacity={shadowOpacity} />)}
      {slats.map((s, i) => (slatIn(i) > 0 ? <Shadow key={`ss${i}`} cam={cam} {...s} sun={sun} opacity={shadowOpacity * slatIn(i)} /> : null))}

      <Pool cam={cam} id={`${idp}-pool`} x={1} y={-0.5} w={10} d={5} frame={frame} fill={pool} night={night} />

      {/* Back walls first, then buildings, then the front */}
      <Box cam={cam} {...walls[0]} color={wall} />
      <Box cam={cam} {...walls[1]} color={wall} />
      <Box cam={cam} {...A} color={wall} />
      <Box cam={cam} x={A.x - 0.2} y={A.y - 0.2} w={A.w + 0.4} d={A.d + 0.4} z0={A.h} h={0.35 * rise} color={CAP} />
      {winOpacity > 0 ? (
        <>
          <FaceRect cam={cam} box={A} face="right" u0={0.9} u1={3.6} v0={0.6 * rise} v1={3.4 * rise} fill={win} opacity={winOpacity} stroke="#5b7487" />
          <FaceRect cam={cam} box={A} face="right" u0={4.4} u1={7.2} v0={0.6 * rise} v1={3.4 * rise} fill={win} opacity={winOpacity} stroke="#5b7487" />
          <FaceRect cam={cam} box={A} face="left" u0={6.4} u1={9.3} v0={0.2 * rise} v1={3.4 * rise} fill={win} opacity={winOpacity} stroke="#5b7487" />
        </>
      ) : null}
      <Box cam={cam} {...B} color={wall} />
      <Box cam={cam} x={B.x - 0.2} y={B.y} w={B.w + 0.4} d={B.d + 0.2} z0={B.h} h={0.32 * rise} color={CAP} />
      {winOpacity > 0 ? (
        <>
          <FaceRect cam={cam} box={B} face="right" u0={1} u1={3} v0={0.7 * rise} v1={2.9 * rise} fill={win} opacity={winOpacity} stroke="#5b7487" />
          <FaceRect cam={cam} box={B} face="right" u0={4} u1={6} v0={0.7 * rise} v1={2.9 * rise} fill={win} opacity={winOpacity} stroke="#5b7487" />
          <FaceRect cam={cam} box={B} face="left" u0={1.2} u1={4.8} v0={0.1 * rise} v1={2.9 * rise} fill={win} opacity={winOpacity} stroke="#5b7487" />
          <FaceRect cam={cam} box={B} face="left" u0={2.6} u1={3.4} v0={0.1 * rise} v1={2.9 * rise} fill={mix("#7a5636", "#4a3424", night)} opacity={winOpacity} />
        </>
      ) : null}

      {/* Pergola and seating */}
      {posts.map(([px, py], i) => <Box key={`p${i}`} cam={cam} x={px} y={py} w={0.3} d={0.3} h={postH} color={WOOD} />)}
      {pergola > 0.3 ? (
        <>
          <Box cam={cam} x={-3.2} y={3.3} w={4.6} d={1.2} h={0.5} color={mix("#e9e2d4", "#8d8799", night * 0.6)} opacity={Math.min(1, pergola * 2 - 0.6)} />
          <Box cam={cam} x={-3.2} y={5.7} w={4.6} d={1.2} h={0.5} color={mix("#e9e2d4", "#8d8799", night * 0.6)} opacity={Math.min(1, pergola * 2 - 0.6)} />
          <Box cam={cam} x={-1.6} y={4.7} w={1.6} d={0.8} h={0.35} color={WOOD} opacity={Math.min(1, pergola * 2 - 0.6)} />
        </>
      ) : null}
      <Box cam={cam} x={-3.6} y={2.4} w={5.6} d={0.22} z0={2.9} h={0.24 * pergola} color={WOOD} opacity={pergola} />
      <Box cam={cam} x={-3.6} y={7.8} w={5.6} d={0.22} z0={2.9} h={0.24 * pergola} color={WOOD} opacity={pergola} />
      {slats.map((s, i) => <Box key={`sl${i}`} cam={cam} {...s} color={shadeWood(i)} opacity={slatIn(i)} />)}

      {/* Loungers by the pool */}
      {[3, 5.4, 7.8].map((lx, i) => (
        <Box key={`l${i}`} cam={cam} x={lx} y={5.2} w={1.3} d={2.2} h={0.35} color="#ffffff" opacity={pool * colorIn} />
      ))}

      <Box cam={cam} {...walls[2]} color={wall} />
      <Box cam={cam} {...walls[3]} color={wall} />
      <Box cam={cam} {...walls[4]} color={wall} />

      {[[13, -9, 0], [-1.5, -10, 1], [13, 8.6, 2], [5.2, 8.8, 3], [-13.5, 9, 4]].map(([px, py, s]) => (
        <Palm key={s} cam={cam} x={px} y={py} height={6.5 + (s % 2)} grow={Math.min(1, Math.max(0, palms * 1.5 - s * 0.12))}
          frame={frame} seed={s} tilt={tilt} night={night} />
      ))}

      {/* Evening lights */}
      {night > 0
        ? [[-4, 2], [2.5, 2], [-4, 8.5], [2.5, 8.5], [12, -1], [12, 5]].map(([lx, ly], i) => {
            const [sx, sy] = cam(lx, ly, 0.6);
            return <Glow key={i} id={`${idp}-l${i}`} x={sx} y={sy} r={30} color={WARM} opacity={night} />;
          })
        : null}
    </g>
  );
}

function shadeWood(i) {
  return i % 2 ? WOOD : mix(WOOD, "#ffffff", 0.08);
}

/* ----------------------------------------------------------------------- */
/* 1. Hero: plan draws itself, the rest house rises, sun sets               */
/* ----------------------------------------------------------------------- */

export function ResthousePlanHero() {
  const frame = useCurrentFrame();
  const opacity = useLoopOpacity();
  const plan = progress(frame, 12, 70);
  const rise = progress(frame, 62, 118, easeOut);
  const details = progress(frame, 104, 132);
  const pool = progress(frame, 112, 150);
  const pergola = progress(frame, 128, 175);
  const palms = progress(frame, 140, 190, easeOut);
  const day = interpolate(frame, [0, 200], [0.12, 0.82], clamp);
  const dusk = progress(frame, 195, 255);
  const zoom = interpolate(frame, [0, MOTION_FRAMES], [0.93, 1.06]);
  const cam = makeCamera({ k: 19.5, cx: 600, cy: 470, zoom, panY: interpolate(frame, [0, MOTION_FRAMES], [6, -10]) });
  const sun = sunAt(day);
  const lineFade = 1 - progress(frame, 58, 92);

  return (
    <AbsoluteFill style={{ opacity }}>
      <svg viewBox={`0 0 ${MOTION_W} ${MOTION_H}`} width="100%" height="100%">
        <Sky id="hero" dusk={dusk} stars frame={frame} />
        <SunDisc id="hero" day={day} dusk={dusk} />
        <ResthouseScene cam={cam} frame={frame} rise={rise} details={details} pool={pool} pergola={pergola} palms={palms}
          sun={sun} dusk={dusk} idp="hero" />
        <g opacity={lineFade}>
          {[
            [[-12, -9], [-2, -9], [-2, -1], [-6, -1], [-6, 6], [-12, 6]],
            [[1, -0.5], [11, -0.5], [11, 4.5], [1, 4.5]],
            [[-3.6, 2.4], [2, 2.4], [2, 8], [-3.6, 8]],
            [[-15, -11], [15, -11], [15, 11], [-15, 11]],
          ].map((path, i) => (
            <PlanLine key={i} cam={cam} path={path} draw={Math.min(1, Math.max(0, plan * 1.4 - i * 0.12))} color={LINE} width={i === 3 ? 2 : 2.6} />
          ))}
        </g>
      </svg>
    </AbsoluteFill>
  );
}

/* ----------------------------------------------------------------------- */
/* 2. Climate: shade moving with the sun, a dust gust, then a winter night  */
/* ----------------------------------------------------------------------- */

export function ResthouseClimate() {
  const frame = useCurrentFrame();
  const opacity = useLoopOpacity();
  const day = interpolate(frame, [0, 170], [0.05, 0.95], clamp);
  const dusk = progress(frame, 160, 215);
  const night = Math.max(0, (dusk - 0.5) / 0.5);
  const sun = sunAt(day);
  const zoom = interpolate(frame, [0, MOTION_FRAMES], [1.55, 1.68]);
  const cam = makeCamera({ k: 19.5, cx: 640, cy: 330, zoom });
  const gust = interpolate(frame, [40, 70, 115, 140], [0, 1, 1, 0], clamp);
  const fireOn = progress(frame, 190, 225);
  const [fx, fy] = cam(-0.9, 5.1, 0.45);
  const flick = 1 + Math.sin(frame / 2.3) * 0.1 + Math.sin(frame / 3.7) * 0.06;

  return (
    <AbsoluteFill style={{ opacity }}>
      <svg viewBox={`0 0 ${MOTION_W} ${MOTION_H}`} width="100%" height="100%">
        <Sky id="clim" dusk={dusk} stars frame={frame} />
        <SunDisc id="clim" day={day} dusk={dusk} />
        <circle cx="1000" cy="120" r="28" fill="#f4f1e4" opacity={night} />
        <circle cx="1013" cy="111" r="25" fill={skyColors(dusk)[0]} opacity={night} />
        <ResthouseScene cam={cam} frame={frame} rise={1} details={1} pool={1} pergola={1} palms={1} sun={sun} dusk={dusk} idp="clim" />

        {/* Fire pit */}
        <g opacity={fireOn}>
          <Glow id="clim-fire" x={fx} y={fy - 10} r={140} color="#ff9a4a" opacity={0.9} />
          <g transform={`translate(${fx} ${fy}) scale(${flick} ${flick * 1.05})`}>
            <path d="M -16 0 C -22 -26 -6 -34 -4 -56 C 6 -40 20 -30 16 0 Z" fill="#ff7a2e" />
            <path d="M -8 0 C -12 -16 -2 -22 0 -36 C 6 -24 12 -16 8 0 Z" fill="#ffd25a" />
          </g>
          {Array.from({ length: 6 }, (_, i) => {
            const t = ((frame * 0.8 + i * 18) % 100) / 100;
            return <circle key={i} cx={fx + Math.sin(t * 6 + i) * 10} cy={fy - 50 - t * 140} r={6 + t * 16} fill="#cfd3dc" opacity={(1 - t) * 0.18} />;
          })}
        </g>

        {/* Dust gust */}
        <g opacity={gust * 0.85}>
          {Array.from({ length: 46 }, (_, i) => {
            const speed = 9 + (i % 5) * 3;
            const x = ((i * 173 + frame * speed) % (MOTION_W + 300)) - 150;
            const y = 300 + ((i * 89) % 420) + Math.sin(frame / 8 + i) * 10;
            const len = 18 + (i % 4) * 10;
            return <line key={i} x1={x} y1={y} x2={x - len} y2={y + 3} stroke="#cdb183" strokeWidth={1.4 + (i % 3)} strokeLinecap="round" opacity={0.35 + (i % 3) * 0.15} />;
          })}
          <rect width={MOTION_W} height={MOTION_H} fill="#d9c29a" opacity={gust * 0.18} />
        </g>
      </svg>
    </AbsoluteFill>
  );
}

/* ----------------------------------------------------------------------- */
/* 3. Land size: three plots, each filling with what it can hold            */
/* ----------------------------------------------------------------------- */

function Plot({ cam, ox, oy, size, frame, start, variant, sun, dusk, idp }) {
  const half = size / 2;
  const P = (x, y, z = 0) => cam(x + ox, y + oy, z);
  const draw = progress(frame, start, start + 30);
  const rise = progress(frame, start + 22, start + 62, easeOut);
  const extras = progress(frame, start + 50, start + 90, easeOut);
  const night = Math.max(0, (dusk - 0.5) / 0.5);
  const ground = mix(SAND, "#5a5468", night * 0.75);
  const wall = mix(WALL, "#c8bfae", night * 0.6);
  const win = windowFill(dusk);
  const so = 0.2 * (1 - Math.min(1, dusk * 1.6));
  const s = size / 18;

  const buildings =
    variant === 0
      ? [{ x: -4, y: -4, w: 5, d: 4, h: 3.2 }]
      : variant === 1
        ? [{ x: -6, y: -6, w: 7, d: 5, h: 3.6 }, { x: -6, y: -1, w: 4, d: 4, h: 3.2 }]
        : [{ x: -8, y: -8, w: 8, d: 6, h: 4 }, { x: -8, y: -2, w: 5, d: 6, h: 3.6 }, { x: 3, y: -8, w: 5, d: 4, h: 3.2 }];
  const pool =
    variant === 0 ? { x: 1.4, y: -3.6, w: 2.8, d: 3.6 } : variant === 1 ? { x: 2, y: -5, w: 4, d: 5 } : { x: 1.5, y: -2, w: 6.5, d: 5 };
  const palmsAt =
    variant === 0 ? [[3.4, 3.4]] : variant === 1 ? [[5.6, 5.6], [-5.6, 5.6]] : [[7.6, 7.6], [-7.4, 7.6], [7.6, -7.4], [0, 7.8]];

  return (
    <g>
      <GroundRect cam={P} x={-half} y={-half} w={size} d={size} fill={ground} opacity={Math.min(1, draw * 2)} />
      {variant === 2 ? <GroundRect cam={P} x={-2} y={4} w={9} d={3.5} fill={mix(GRASS, "#2d4a3a", night * 0.8)} opacity={extras} /> : null}
      <PlanLine cam={P} path={[[-half, -half], [half, -half], [half, half], [-half, half]]} draw={draw} color={LINE} width={2} />
      {buildings.map((b, i) => <Shadow key={`s${i}`} cam={P} {...b} h={b.h * rise} sun={sun} opacity={so} />)}
      {extras > 0 ? <Pool cam={P} id={`${idp}-pool${variant}`} {...pool} frame={frame} fill={extras} night={night} /> : null}
      {buildings.map((b, i) => {
        const bb = { ...b, h: b.h * rise, z0: 0 };
        return (
          <g key={i}>
            <Box cam={P} {...bb} color={wall} />
            <Box cam={P} x={b.x - 0.15} y={b.y - 0.15} w={b.w + 0.3} d={b.d + 0.3} z0={bb.h} h={0.3 * rise} color={CAP} />
            <FaceRect cam={P} box={bb} face="right" u0={b.d * 0.2} u1={b.d * 0.8} v0={0.7 * rise} v1={(b.h - 0.8) * rise} fill={win} opacity={extras} stroke="#5b7487" />
            <FaceRect cam={P} box={bb} face="left" u0={b.w * 0.2} u1={b.w * 0.75} v0={0.7 * rise} v1={(b.h - 0.8) * rise} fill={win} opacity={extras} stroke="#5b7487" />
          </g>
        );
      })}
      {palmsAt.map(([px, py], i) => (
        <Palm key={i} cam={P} x={px} y={py} height={4.6 + s} grow={Math.max(0, Math.min(1, extras * 1.4 - i * 0.12)) * 0.8} frame={frame} seed={i + variant * 3} night={night} />
      ))}
    </g>
  );
}

export function ResthouseBySize() {
  const frame = useCurrentFrame();
  const opacity = useLoopOpacity();
  const day = interpolate(frame, [0, 240], [0.18, 0.8], clamp);
  const dusk = progress(frame, 225, 270) * 0.75;
  const sun = sunAt(day);
  const cam = makeCamera({ k: 13.6, cx: 565, cy: 520, zoom: interpolate(frame, [0, MOTION_FRAMES], [0.97, 1.04]) });

  return (
    <AbsoluteFill style={{ opacity }}>
      <svg viewBox={`0 0 ${MOTION_W} ${MOTION_H}`} width="100%" height="100%">
        <Sky id="size" dusk={dusk} frame={frame} />
        <SunDisc id="size" day={day} dusk={dusk} />
        <Plot cam={cam} ox={-14} oy={14} size={10} variant={0} frame={frame} start={8} sun={sun} dusk={dusk} idp="size" />
        <Plot cam={cam} ox={0} oy={0} size={14} variant={1} frame={frame} start={52} sun={sun} dusk={dusk} idp="size" />
        <Plot cam={cam} ox={17} oy={-17} size={18} variant={2} frame={frame} start={96} sun={sun} dusk={dusk} idp="size" />
      </svg>
    </AbsoluteFill>
  );
}

/* ----------------------------------------------------------------------- */
/* 4. Process: blueprint → camera tilts into 3D → the design takes shape    */
/* ----------------------------------------------------------------------- */

export function ResthouseProcess() {
  const frame = useCurrentFrame();
  const opacity = useLoopOpacity();
  const plan = progress(frame, 14, 80);
  const tilt = progress(frame, 85, 140);
  const rise = progress(frame, 125, 180, easeOut);
  const colorIn = progress(frame, 150, 195);
  const details = progress(frame, 175, 210);
  const palms = progress(frame, 185, 230, easeOut);
  const cam = makeCamera({ tilt, k: lerp(15, 19, tilt), cx: 600, cy: lerp(400, 470, tilt), zoom: interpolate(frame, [0, MOTION_FRAMES], [0.98, 1.04]) });
  const blue = 1 - tilt;
  const sun = sunAt(0.35);
  const grid = [];
  for (let g = -16; g <= 16; g += 2) {
    grid.push([cam(g, -12), cam(g, 12)]);
    grid.push([cam(-16, g * 0.75), cam(16, g * 0.75)]);
  }

  return (
    <AbsoluteFill style={{ opacity }}>
      <svg viewBox={`0 0 ${MOTION_W} ${MOTION_H}`} width="100%" height="100%">
        <Sky id="proc" dusk={0} frame={frame} />
        <rect width={MOTION_W} height={MOTION_H} fill="#0d2846" opacity={blue} />
        <g opacity={blue * 0.5}>
          {grid.map(([a, b], i) => (
            <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#5d8ec4" strokeWidth={i % 4 === 0 ? 1 : 0.5} />
          ))}
        </g>
        <g opacity={colorIn}>
          <ResthouseScene cam={cam} frame={frame} rise={rise} details={details} pool={colorIn} pergola={details} palms={palms}
            sun={sun} dusk={0} idp="proc" tilt={tilt} colorIn={colorIn} />
        </g>
        <g opacity={1 - colorIn * 0.85}>
          {[
            [[-12, -9], [-2, -9], [-2, -1], [-6, -1], [-6, 6], [-12, 6]],
            [[-12, -1], [-6, -1]],
            [[-7, -9], [-7, -1]],
            [[1, -0.5], [11, -0.5], [11, 4.5], [1, 4.5]],
            [[-3.6, 2.4], [2, 2.4], [2, 8], [-3.6, 8]],
            [[-15, -11], [15, -11], [15, 11], [-15, 11]],
          ].map((path, i) => (
            <PlanLine key={i} cam={cam} path={path} draw={Math.min(1, Math.max(0, plan * 1.5 - i * 0.1))}
              color={mix("#e8f2ff", LINE, tilt)} width={i === 5 ? 1.8 : 2.4} z={rise * 0.01} />
          ))}
        </g>
      </svg>
    </AbsoluteFill>
  );
}

export const RESTHOUSE_MOTIONS = {
  "plan-hero": ResthousePlanHero,
  climate: ResthouseClimate,
  "by-size": ResthouseBySize,
  process: ResthouseProcess,
};
