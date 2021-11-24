import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useSpring, a} from "@react-spring/three"

export default function Model({ ...props }) 
{
	const group = useRef()
	// Store this file in Backend
	const { nodes, materials, animations } = useGLTF('/Egyptian.glb')
	const { actions } = useAnimations(animations, group)
	useEffect(() => {
		if(props.isPlaying && !actions.egyptian.isRunning())
		{
			actions.egyptian.play();
		}
		else
		actions.egyptian.stop();
	})
	const rotateCamera = useSpring({
		cancel: !props.isPlaying,
		from : {rotate: [0, 0, 0]},
		to: {rotate : [0, Math.PI * 2, 0]},
		config : {duration : 5000},
		loop : true,
		reset : true
	})
	return (
		<a.group ref={group} {...props} dispose={null} rotation={rotateCamera.rotate}>
		<group position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
			<primitive object={nodes.Hips} />
			<skinnedMesh
			geometry={nodes.egyptian_B.geometry}
			material={materials.egyptian_red_B_texture}
			skeleton={nodes.egyptian_B.skeleton}
			/>
		</group>
		</a.group>
	)
}
// Store this file in Backend
useGLTF.preload('/Egyptian.glb')
