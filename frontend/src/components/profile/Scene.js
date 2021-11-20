import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HighRes from "./HighRes"

import Viking from "./Viking"

import Spinner from "../Spinner"
import Grid from "./Grid";

export default function Avatar(props) {

  return (
    <Canvas camera={{position:[1.2, 1.5, 3], fov:[75], rotation:[0, Math.PI, 0]}}>
      <Grid size={10}/>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.5} />
      <pointLight position={[10, 50, 50]} />

      <Suspense fallback={<Spinner />}>
        {/* <HighRes isPlaying={props.isPlaying}/> */}
        <Viking isPlaying={props.isPlaying}/>
      </Suspense>
    </Canvas>
  );
}