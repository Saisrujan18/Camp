import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useSpring, a} from "@react-spring/three"

export default function Model({ ...props }) {

	//Avatar model Roman
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/Roman.glb')
	const { actions } = useAnimations(animations, group)
	useEffect(() => {
		var timer
		if(props.isPlaying && !actions.roman.isRunning())
		{
			actions.roman.play()
			return
		}
		else
		{
			group.current.rotation.set(0, 0, 0)
			timer = setTimeout(()=>{actions.roman.stop()}, 8000)
		}
		return () => {//actions.roman.stop()
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
			<primitive object={nodes.Hips_rD_red} />
			<skinnedMesh
			geometry={nodes.Mesh002.geometry}
			material={materials.roman_D_texture}
			skeleton={nodes.Mesh002.skeleton}
			/>
			<skinnedMesh
			geometry={nodes.Mesh002_1.geometry}
			material={materials.roman_clothes_texture}
			skeleton={nodes.Mesh002_1.skeleton}
			/>
		</group>
		</a.group>
  )
}
useGLTF.preload('/Roman.glb')