import React from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, DoubleSide } from "three";

export default function Text() {
  const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

  const fragmentShader = `
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;
  uniform float uTime;

  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    uv.x += sin(uv.y * 20.0 + uTime * 2.0) * 0.03;

    vec4 image1 = texture2D(uTexture1, uv);
    vec4 image2 = texture2D(uTexture2, uv);

    gl_FragColor = mix(image1, image2, uProgress);
  }
`;

  function MyPlane() {
    const texture1 = useLoader(TextureLoader, "/image.jpg");
    const texture2 = useLoader(TextureLoader, "/image2.jpg");
    const materialRef = React.useRef();
    useFrame((state) => {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      console.log(materialRef.current.uniforms.uTime.value);
    });

    return (
      <mesh>
        <planeGeometry args={[4, 3, 32, 32]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={{
            uTexture1: { value: texture1 },
            uTexture2: { value: texture2 },
            uProgress: { value: 0 },
            uStrength: { value: 0.05 },
            uTime: { value: 0 },
          }}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    );
  }
  return (
    <Canvas
      style={{ height: "100vh" }}
      fallback={<div className="text-black">Sorry no WebGL supported!</div>}
      camera={{ position: [0, 0, 12], fov: 50 }}
    >
      <pointLight position={[5, 5, 5]} intensity={100} />
      <ambientLight intensity={0.5} />
      <MyPlane />
    </Canvas>
  );
}
