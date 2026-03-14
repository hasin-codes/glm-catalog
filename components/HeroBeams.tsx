"use client";

import dynamic from "next/dynamic";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

export default function HeroBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Beams
        beamWidth={4}
        beamHeight={22}
        beamNumber={6}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.5}
        scale={0.18}
        rotation={0}
      />
    </div>
  );
}
