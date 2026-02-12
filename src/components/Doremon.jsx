import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";


function Doraemon({ windowWidth }) {
  const { scene } = useGLTF("/Doraemon.glb");

  const { scale, position } = useMemo(() => {
    if (windowWidth >= 1024) {
      return { scale: 2.3, position: [0, -2, 0] };
    } else if (windowWidth >= 768) {
      return { scale: 1.5, position: [0, -1, 0] };
    } else {
      return { scale: 3.5, position: [0, -3, 0] };
    }
  }, [windowWidth]);

  return <primitive object={scene} scale={scale} position={position} />;
}

const DoremonComponent = ({windowWidth}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 15]} />
      <Doraemon windowWidth={windowWidth} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default DoremonComponent;
