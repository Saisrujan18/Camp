import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/female_generic.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions);
    actions.Dance.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, -5]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorig2Hips} />
        <skinnedMesh
          geometry={nodes.Ch22_Body.geometry}
          material={nodes.Ch22_Body.material}
          skeleton={nodes.Ch22_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch22_Eyelashes.geometry}
          material={nodes.Ch22_Eyelashes.material}
          skeleton={nodes.Ch22_Eyelashes.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch22_Hair.geometry}
          material={nodes.Ch22_Hair.material}
          skeleton={nodes.Ch22_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch22_Pants.geometry}
          material={nodes.Ch22_Pants.material}
          skeleton={nodes.Ch22_Pants.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch22_Shirt.geometry}
          material={nodes.Ch22_Shirt.material}
          skeleton={nodes.Ch22_Shirt.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch22_Sneakers.geometry}
          material={nodes.Ch22_Sneakers.material}
          skeleton={nodes.Ch22_Sneakers.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/female_generic.glb')
