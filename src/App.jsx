import React, { Suspense } from 'react'
import ExperienceDesktop from './Components/ExperienceDesktop.jsx'
import ExperienceMobile from './Components/ExperienceMobile.jsx'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import { isDesktop } from 'react-device-detect'
import './style.css'

function Index() {

  return (
    <>
        <Canvas
          camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 4 ]
          } }
          width={ window.innerWidth }
          height={ window.innerHeight }
        >
          <Suspense fallback={ null }>
            {isDesktop ? <ExperienceDesktop /> : <ExperienceMobile />}
          </Suspense>
        </Canvas>
        <Loader />
    </>
  )
}

export default Index