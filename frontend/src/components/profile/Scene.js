import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FemaleGeneric from "./Female_Generic"
import Spinner from "../Spinner"
import { Camera } from "three";

export default function Scene() {
  return (
    <Canvas camera={{position:[0, 0, 0], fov:75, near:0.1, far:1000}}>
      <pointLight position={[10, 50, 50]} />
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={<Spinner />}>
        <FemaleGeneric/>
      </Suspense>
    </Canvas>
  );
}