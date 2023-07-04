import React, { Suspense } from 'react'
import Experience from './Components/Experience.jsx'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import './style.css'

// const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(
//   <Canvas
//     camera={ {
//       fov: 45,
//       near: 0.1,
//       far: 2000,
//       position: [ -3, 1.5, 4 ]
//     } }
//     width={ window.innerWidth }
//     height={ window.innerHeight }
//   >
//     <Suspense fallback={ null }>
//       <Experience />
//     </Suspense>
//   </Canvas>
// )

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
            <Experience />
          </Suspense>
        </Canvas>
        <Loader />
    </>
  )
}

export default Index