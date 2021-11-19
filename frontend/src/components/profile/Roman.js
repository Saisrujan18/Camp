import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Roman.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.01, 1.36]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
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
    </group>
  )
}

useGLTF.preload('/Roman.glb')
