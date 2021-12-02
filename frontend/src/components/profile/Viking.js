import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useSpring, a} from "@react-spring/three"

export default function Model({ ...props }) 
{
	//Avatar model Viking
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/Viking.glb')
	const { actions } = useAnimations(animations, group)
	useEffect(() => {
		var timer
		if(props.isPlaying && !actions.viking.isRunning())
		{
			actions.viking.play()
			return
		}
		else
		{
			group.current.rotation.set(0, 0, 0)
			timer = setTimeout(()=>{actions.viking.stop()}, 8000)
		}
		return () => {//actions.viking.stop()
			clearTimeout(timer)}
	})
	//Rotate animation of the Avatar
	//Camera is static Avatar rotates
	const rotateCamera = useSpring({
		cancel: !props.isPlaying,
		from : {rotate: [0, 0, 0]},
		to: {rotate : [0, Math.PI * 2, 0]},
		config : {duration : 5000},
		loop : true,
		reset : true
	})
	//The Avatar model
	return (
		<a.group ref={group} {...props} dispose={null} rotation={rotateCamera.rotate}>
		<group position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
			<primitive object={nodes.Hips_vC_green} />
			<skinnedMesh
			geometry={nodes.viking_C.geometry}
			material={materials.viking_C_texture}
			skeleton={nodes.viking_C.skeleton}
			/>
		</group>
		</a.group>
	)
}
useGLTF.preload('/Viking.glb')