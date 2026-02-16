import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import { Canvas } from "@react-three/fiber";



function Doraemon({ windowWidth }) {
  const { scene } = useGLTF("/Doraemon.glb");

  // Memoize scale & position to avoid recalculation on every render
  const { scale, position } = useMemo(() => {
    if (windowWidth >= 1024) return { scale: 2.3, position: [0, -1.5, 0] };
    return { scale: 3, position: [0, -3.0, 0] };
  }, [windowWidth]);

  // Dispose resources on unmount to prevent WebGL context loss
  useEffect(() => {
    return () => {
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry.dispose();
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      });
    };
  }, [scene]);
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
