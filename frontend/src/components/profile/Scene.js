import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraShake } from "@react-three/drei";
import HighRes from "./HighRes"

import Viking from "./Viking"
import Roman from "./Roman"
import Egyptian from "./Egyptian"

import Spinner from "../Spinner"
import Grid from "./Grid";

export default function Scene(props)
{
	const AvatarList = [<Viking isPlaying={props.isPlaying}/>,
						<Roman isPlaying={props.isPlaying}/>, 
						<Egyptian isPlaying={props.isPlaying}/>]
	
	return (
		<Canvas camera={{position:[1.2, 1.5, 3], fov:[75], rotation:[0, Math.PI, 0]}}>
			{/* <Grid size={10}/> */}
			<OrbitControls />

			<ambientLight intensity={0.1} />
			<directionalLight intensity={0.5} />
			<pointLight position={[10, 50, 50]} />
			<fog attach="fog" args={['#C6C6DC', 3, 9]}/>

			<Suspense fallback={<Spinner />}>
				{/* <HighRes isPlaying={props.isPlaying}/> */}
				{AvatarList[props.avatarid]}
			</Suspense>
			<CameraShake yawFrequency={(props.isPlaying?0.5:0)} pitchFrequency={(props.isPlaying?0.5:0)} rollFrequency={(props.isPlaying?0.5:0)} />
		</Canvas>
	);
}