"use client";

// Autoplaying, looping Remotion illustration. Always on: no controls, no
// play/pause toggle, no click-to-pause. The Player loads in the browser only;
// until then the box keeps its size so the page doesn't jump.

import dynamic from "next/dynamic";
import {
  MOTION_FPS,
  MOTION_FRAMES,
  MOTION_H,
  MOTION_W,
  RESTHOUSE_MOTIONS,
} from "./resthouseCompositions";

const Player = dynamic(() => import("@remotion/player").then((mod) => mod.Player), {
  ssr: false,
  loading: () => null,
});

export default function MotionIllustration({ name, label, className = "", fill = false }) {
  const component = RESTHOUSE_MOTIONS[name];
  if (!component) return null;

  return (
    <div
      role="img"
      aria-label={label}
      className={
        fill
          ? `absolute inset-0 overflow-hidden bg-[color:var(--surface-2)] ${className}`
          : `relative w-full overflow-hidden rounded-[26px] bg-[color:var(--surface-2)] ${className}`
      }
      style={fill ? undefined : { aspectRatio: `${MOTION_W} / ${MOTION_H}` }}
    >
      <Player
        component={component}
        durationInFrames={MOTION_FRAMES}
        fps={MOTION_FPS}
        compositionWidth={MOTION_W}
        compositionHeight={MOTION_H}
        autoPlay
        loop
        controls={false}
        clickToPlay={false}
        doubleClickToFullscreen={false}
        spaceKeyToPlayOrPause={false}
        acknowledgeRemotionLicense
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
