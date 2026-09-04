import React, { useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollState } from './store';
import Figure from './Figure';
import Room from './Room';
import Web from './Web';

const smoothstep = (min, max, value) => {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
};

export default function Scene() {
  const { scene, camera } = useThree();

  useEffect(() => {
    scene.background = new THREE.Color('#170510');
    scene.fog = new THREE.Fog('#170510', 30, 120);
  }, [scene]);

  useFrame(() => {
    const sp = scrollState.sp;
    const p = scrollState.p;

    camera.rotation.order = 'YXZ'; 

    let baseZ = 25;
    
    if (sp < 0.2) {
      baseZ = 25 - (sp / 0.2) * 60;
    } else if (sp < 0.6) {
      baseZ = -35 - ((sp - 0.2) / 0.4) * 60;
    } else {
      baseZ = -95 - ((sp - 0.6) / 0.4) * 144;
    }

    if (scene.fog) {
      if (p > 0.85) {
        scene.fog.near = 30 * (1.0 - smoothstep(0.85, 1.0, p));
        scene.fog.far = 120 * (1.0 - smoothstep(0.85, 1.0, p));
      } else {
        scene.fog.near = 30;
        scene.fog.far = 120;
      }
    }

    camera.position.z = baseZ;
    camera.position.y = 9;
  });

  return (
    <>
      <ambientLight intensity={2.0} />
      <directionalLight position={[10, 20, 15]} intensity={2.5} />
      <Figure />
      <Room />
      <Web />
    </>
  );
}
