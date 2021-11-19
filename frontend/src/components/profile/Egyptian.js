import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Egyptian.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.01, -1.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.egyptian_B.geometry}
          material={materials.egyptian_red_B_texture}
          skeleton={nodes.egyptian_B.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Egyptian.glb')
