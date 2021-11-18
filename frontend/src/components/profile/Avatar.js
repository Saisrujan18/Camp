import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AvatarTurnAround from "./AvatarTurnAround"

import Spinner from "../Spinner"
import Grid from "./Grid";

export default function Avatar(props) {

  function Lights()
  {
    <>
      <spotLight position={[-0.5, 0, 0]}/>
      <spotLight position={[0.5, 0, 0]}/>

      {/* <spotLight position={[-0.5, 0, 1]}/>
      <spotLight position={[0.5, 0, 1]}/>

      <spotLight position={[-0.5, 0, 2]}/>
      <spotLight position={[0.5, 0, 2]}/>

      <spotLight position={[-0.5, 0, 3]}/>
      <spotLight position={[0.5, 0, 3]}/> */}
    </>
  }
  return (
    <Canvas onClick={()=>{console.log("Clicked Object")}} camera={{position:[1, 1.5, 4], rotation:[0, Math.PI, 0]}}>
      <Grid size={10}/>
      {/* <pointLight position={[10, 50, 50]} /> */}
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.5} />
      {/* <Lights/> */}
      <Suspense fallback={<Spinner />}>
        <AvatarTurnAround isPlaying={props.isPlaying}/>
      </Suspense>
    </Canvas>
  );
}