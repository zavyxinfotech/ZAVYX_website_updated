import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollState } from './store';

const smoothstep = (min, max, value) => {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
};

const rawMagenta = new THREE.Color().setHSL(0.933, 0.85, 0.5);
const rawAzure = new THREE.Color().setHSL(0.55, 0.85, 0.5);

function getBeadData() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  // Draw a figure mask
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0,0,size,size);
  ctx.fillStyle = '#fff';
  // Head
  ctx.beginPath(); ctx.ellipse(64, 30, 20, 25, 0, 0, Math.PI*2); ctx.fill();
  // Shoulders & Body
  ctx.beginPath(); ctx.ellipse(64, 100, 45, 50, 0, 0, Math.PI*2); ctx.fill();
  
  const imgData = ctx.getImageData(0,0,size,size).data;
  
  const positions = [];
  const colors = [];
  const normals = [];

  const hueA = 0.933;
  const hueB = 0.55;

  const tempCol = new THREE.Color();
  const count = 15000;

  for(let i=0; i<count; i++) {
     let x, y;
     let attempts = 0;
     while(attempts < 100) {
        x = Math.floor(Math.random() * size);
        y = Math.floor(Math.random() * size);
        const a = imgData[(y*size+x)*4+3];
        if (a > 128) break; 
        attempts++;
     }
     
     // 14 units tall, center (0,9,0)
     const wx = (x/size - 0.5) * 10;
     const wy = ((size-y)/size) * 14 + 2; 
     const wz = (Math.random()-0.5)*3; 
     
     positions.push(new THREE.Vector3(wx, wy, wz));

     const nx = wx;
     const ny = (wy - 9) * 0.15;
     const nz = wz;
     const n = new THREE.Vector3(nx, ny, nz).normalize();
     normals.push(n);

     const lightness = 0.3 + Math.random() * 0.5;
     const targetHue = Math.random() > 0.5 ? hueA : hueB;
     tempCol.setHSL(targetHue, 0.85, lightness);
     colors.push(tempCol.clone());
  }
  return { positions, colors, normals, count };
}

export default function Figure() {
  const meshRef = useRef();

  const { positions, colors, count } = useMemo(() => getBeadData(), []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const colorArray = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for(let i=0; i<count; i++) {
       arr[i*3] = colors[i].r;
       arr[i*3+1] = colors[i].g;
       arr[i*3+2] = colors[i].b;
    }
    return new THREE.InstancedBufferAttribute(arr, 3);
  }, [colors, count]);

  React.useEffect(() => {
    if (meshRef.current) {
       for(let i=0; i<count; i++) {
         dummy.position.copy(positions[i]);
         dummy.updateMatrix();
         meshRef.current.setMatrixAt(i, dummy.matrix);
       }
       meshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [count, dummy, positions]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
       const sp = scrollState.sp;
       const t = clock.elapsedTime;
       meshRef.current.position.y = Math.sin(t * 0.5) * 0.2;
       
       const scale = 1.0 - smoothstep(0.12, 0.22, sp);
       if (scale < 0.01) {
         meshRef.current.visible = false;
       } else {
         meshRef.current.visible = true;
         meshRef.current.scale.setScalar(scale);
       }
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[0.08, 6, 4]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorArray.array, 3]} />
      </sphereGeometry>
      <meshBasicMaterial vertexColors toneMapped={false} />
    </instancedMesh>
  );
}
