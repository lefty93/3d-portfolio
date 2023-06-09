import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Shiba = ({isMobile}) => {
    const shiba = useGLTF('./shiba/scene.gltf');
    return (
        <primitive object={shiba.scene} scale={isMobile ? 0.8 : 2} />
    )
}

const ShibaCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px");
        setIsMobile(mediaQuery.matches);

        const hadnleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener("change", hadnleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", hadnleMediaQueryChange)
        }
    }, [])
    return (
        <Canvas shadows frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }} camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6]
        }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Shiba isMobile={isMobile} />
                <Preload all />
            </Suspense>
        </Canvas>
    )
}

export default ShibaCanvas;