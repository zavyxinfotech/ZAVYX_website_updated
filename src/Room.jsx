import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollState } from './store';

const smoothstep = (min, max, value) => {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
};

// Wireframe Cage Lattice (Act 1)
function Lattice() {
  const linesRef = useRef();

  const { positions, randoms } = useMemo(() => {
     const pos = [];
     const rads = [];
     const count = 500;
     // Create random segments inside a bounding box
     for(let i=0; i<count; i++) {
        const x1 = (Math.random()-0.5)*12;
        const y1 = (Math.random()-0.5)*16 + 9;
        const z1 = (Math.random()-0.5)*12;
        
        const x2 = x1 + (Math.random()-0.5)*4;
        const y2 = y1 + (Math.random()-0.5)*4;
        const z2 = z1 + (Math.random()-0.5)*4;

        pos.push(x1,y1,z1, x2,y2,z2);
        
        // Single shared random per segment (pair)
        const rand = Math.random();
        rads.push(rand, rand);
     }
     return { positions: new Float32Array(pos), randoms: new Float32Array(rads) };
  }, []);

  useFrame(() => {
    if (linesRef.current) {
       const sp = scrollState.sp;
       // Weaves and unweaves on scalar sp
       linesRef.current.material.uniforms.uSp.value = sp;
    }
  });

  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uSp: { value: 0 },
      uColor: { value: new THREE.Color('#ec1263') }
    },
    vertexShader: `
      attribute float randomId;
      varying float vRand;
      void main() {
         vRand = randomId;
         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uSp;
      uniform vec3 uColor;
      varying float vRand;
      void main() {
         // weave in
         float build = smoothstep(0.0, 0.1, uSp - vRand*0.1);
         // weave out
         float teardown = 1.0 - smoothstep(0.12, 0.22, uSp - vRand*0.1);
         float op = build * teardown;
         if(op < 0.01) discard;
         gl_FragColor = vec4(uColor, op * 0.4);
      }
    `,
    transparent: true,
    depthWrite: false
  }), []);

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-randomId" array={randoms} itemSize={1} />
      </bufferGeometry>
      <primitive object={material} attach="material" />
    </lineSegments>
  );
}

// Room Grid (Nested Cylinders)
function GridRoom() {
  const c1Ref = useRef();
  const c2Ref = useRef();
  const c3Ref = useRef();

  useFrame(() => {
     const p = scrollState.p;
     if (c1Ref.current) c1Ref.current.rotation.y = p * 0.055;
     if (c2Ref.current) c2Ref.current.rotation.y = p * -0.03;
     if (c3Ref.current) c3Ref.current.rotation.y = p * 0.014;
  });

  const mat = useMemo(() => new THREE.LineBasicMaterial({
     color: '#29abe2',
     transparent: true,
     opacity: 0.22,
     depthWrite: false
  }), []);

  return (
    <group rotation={[Math.PI/2, 0, 0]} position={[0,9,0]}>
       <mesh ref={c1Ref}>
          <cylinderGeometry args={[9, 9, 800, 32, 100, true]} />
          <primitive object={mat} attach="material" wireframe />
       </mesh>
       <mesh ref={c2Ref}>
          <cylinderGeometry args={[13.95, 13.95, 800, 32, 100, true]} />
          <primitive object={mat} attach="material" wireframe />
       </mesh>
       <mesh ref={c3Ref}>
          <cylinderGeometry args={[19.8, 19.8, 800, 32, 100, true]} />
          <primitive object={mat} attach="material" wireframe />
       </mesh>
    </group>
  );
}

export default function Room() {
  return (
    <>
      <Lattice />
      <GridRoom />
      {/* Thin horizon bar in --accent-room-hi */}
      <mesh position={[0, 9, -200]}>
         <planeGeometry args={[100, 0.2]} />
         <meshBasicMaterial color="#7fd4ff" transparent opacity={0.6} fog={false} />
      </mesh>
    </>
  );
}
