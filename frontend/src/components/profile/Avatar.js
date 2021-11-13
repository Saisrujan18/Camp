import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AvatarTurnAround from "./AvatarTurnAround"
import Spinner from "../Spinner"

export default function Avatar() {
  return (
    <Canvas>
      <pointLight position={[10, 50, 50]} />
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Spinner />}>
        <AvatarTurnAround />
      </Suspense>
    </Canvas>
  );
}