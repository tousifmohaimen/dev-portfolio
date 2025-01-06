import React, {Suspense, useState, useEffect} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={0.5} groundColor="black"/>
            <pointLight intensity={1}/>
            <spotLight
                position={[-20, -50, 10]}
                angle={0.2}
                penumbra={1}
                intensity={2}
                castShadow="castShadow"
                shadow-mapsize={1024}/>
            <ambientLight intensity={1.3}/>
            <primitive
                object={computer.scene}
                scale={isMobile
                    ? 0.7
                    : 0.75}
                position={isMobile
                    ? [0, -3.0, -2.2]
                    : [0, -3.5, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}/>
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return() => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <> < Canvas frameloop = "demand" shadows = {true} camera = {{
            position: [20, 3, 5],
            fov: 25,
          }}
        gl = {{
            preserveDrawingBuffer: true,
          }} > <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}/>
            <Computers isMobile={isMobile}/>
        </Suspense>
        <Preload all="all"/>
    </Canvas>
</>
    );
};

export default ComputersCanvas;
