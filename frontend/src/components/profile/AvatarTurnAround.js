import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/avatarTurnAround.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    if(props.isPlaying && !actions.turnaround.isRunning())
    {
        actions.turnaround.play();
    }
      else
      actions.turnaround.stop();
  });

  function handleClick(e)
  {
    console.log(e)
    console.log('Avatar Clicked')
    if(actions.turnaround.isRunning())
      actions.turnaround.stop()
  }
  return (
    <group onClick={(e)=>{handleClick(e)}} ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01} position={[0, 0, 0]}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Erika_Archer_Body_Mesh.geometry}
          material={materials['Body_MAT.001']}
          skeleton={nodes.Erika_Archer_Body_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Erika_Archer_Clothes_Mesh.geometry}
          material={materials['Akai_MAT.001']}
          skeleton={nodes.Erika_Archer_Clothes_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Erika_Archer_Eyelashes_Mesh.geometry}
          material={materials['Lashes_MAT.001']}
          skeleton={nodes.Erika_Archer_Eyelashes_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Erika_Archer_Eyes_Mesh.geometry}
          material={materials['EyeSpec_MAT.001']}
          skeleton={nodes.Erika_Archer_Eyes_Mesh.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/avatarTurnAround.glb')
