import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, Points, PointMaterial } from '@react-three/drei'
import * as random from "maath/random/dist/maath-random.esm"

const Stars = () => {
  return (
    <div>Stars</div>
  )
}

const StarsCanvas = () => {
  return (
    <div>
      <Canvas>
        <Suspense>
          {/* <Stars /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas