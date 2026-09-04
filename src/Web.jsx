import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2';
import { scrollState } from './store';

const smoothstep = (min, max, value) => {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
};

// Return baseZ given sp (same logic as in Camera)
function getSpineZ(sp) {
  let baseZ = 25;
  if(sp < 0.2) {
    baseZ = 25 - (sp/0.2) * 60; // 300 * 0.2 = 60
  } else if (sp < 0.6) {
    baseZ = -35 - ((sp - 0.2)/0.4) * 60; // 150 * 0.4 = 60
  } else {
    baseZ = -95 - ((sp - 0.6)/0.4) * 144; // 360 * 0.4 = 144
  }
  return baseZ;
}

const TABLE = [
  { at: 0.250, span: 0.045, side: 1, radius: 10, lift: 2 },
  { at: 0.350, span: 0.045, side: -1, radius: 11, lift: -1.5 },
  { at: 0.450, span: 0.038, side: 1, radius: 12, lift: 2 },
  { at: 0.550, span: 0.035, side: -1, radius: 9, lift: -1 },
  { at: 0.650, span: 0.031, side: 1, radius: 11, lift: 2.5 },
  { at: 0.750, span: 0.031, side: -1, radius: 14, lift: -2 }
].map(t => {
  t.lead = 3.8 * t.radius;
  return t;
});

export default function Web() {
  const { size, camera } = useThree();
  const groupRef = useRef();
  
  const lineObjRef = useRef(null);
  
  const bone50 = new THREE.Color('#f3f2f4');
  const boneArr = [bone50.r * 1.25, bone50.g * 1.25, bone50.b * 1.25];
  const magenta = new THREE.Color('#ec1263');
  const magentaArr = [magenta.r * 2.4, magenta.g * 0.9, magenta.b * 1.3];

  useEffect(() => {
    // 6 entries, let's say 40 segments per strand
    const numSegments = 40;
    const geometry = new LineSegmentsGeometry();
    
    // We have 6 strands. Each has numSegments.
    // Stride 6: x1, y1, z1, x2, y2, z2
    const totalLines = 6 * numSegments;
    const positions = new Float32Array(totalLines * 6);
    const colors = new Float32Array(totalLines * 6);
    
    geometry.setPositions(positions);
    geometry.setColors(colors);

    const material = new LineMaterial({
      linewidth: 2.4,
      vertexColors: true,
      resolution: new THREE.Vector2(size.width, size.height),
      dashed: false,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      opacity: 1.0 // per-strand fade in vertex colors
    });

    const webLine = new LineSegments2(geometry, material);
    groupRef.current.add(webLine);
    lineObjRef.current = { line: webLine, positions, colors, numSegments };

    return () => {
      groupRef.current.remove(webLine);
      geometry.dispose();
      material.dispose();
    }
  }, [size]);

  useFrame((state) => {
    const sp = scrollState.sp;
    
    // Update camera lateral swing from the same table (Acts 2-3)
    let camOffsetX = 0;
    let camOffsetY = 0;
    let camBank = 0;

    // Line updating
    const obj = lineObjRef.current;
    if (obj) {
      const { positions, colors, numSegments, line } = obj;
      let offset = 0;
      
      for(let i = 0; i < 6; i++) {
        const tObj = TABLE[i];
        
        // 0 to 1 life over tObj.span
        const life = (sp - tObj.at) / tObj.span;
        const clampedLife = Math.max(0, Math.min(1, life));
        
        // S-wave for Camera across 0.08 - 0.82 of strand's life
        if (life > 0.08 && life < 0.82) {
           const u = (life - 0.08) / (0.82 - 0.08);
           // reduce motion 
           const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
           if (!prefersReducedMotion) {
             camOffsetX += tObj.side * 3.2 * Math.sin(Math.PI * u);
             camOffsetY += -1.5 * Math.sin(Math.PI * u); // dip to pass under anchor
             camBank += tObj.side * 0.15 * Math.sin(Math.PI * u); // bank into turn
           }
        }

        const anchorZ = getSpineZ(tObj.at) - tObj.lead;
        const anchorX = tObj.side * tObj.radius;
        const anchorY = 9 + tObj.lift;
        
        // Current spine origin at sp (this is roughly where camera originates this frame, or exactly where camera is)
        const spineZ = getSpineZ(Math.min(sp, tObj.at + (0.55 * tObj.span) )); 
        // strand connects camera to anchor.
        
        const phaseFire = smoothstep(0, 0.12, clampedLife);
        const phaseRelease = smoothstep(0.55, 0.80, clampedLife);
        const phaseFade = 1.0 - smoothstep(0.80, 1.0, clampedLife);

        for (let j = 0; j < numSegments; j++) {
           const segU1 = j / numSegments;
           const segU2 = (j+1) / numSegments;

           // curve interpolation
           // simple linear for taut phase, adding sag for release
           const pt1X = anchorX + (0 - anchorX) * segU1;
           const pt1Y = anchorY + (9 - anchorY) * segU1 - (Math.sin(segU1 * Math.PI) * 4 * phaseRelease);
           const pt1Z = anchorZ + (spineZ - anchorZ) * segU1;

           const pt2X = anchorX + (0 - anchorX) * segU2;
           const pt2Y = anchorY + (9 - anchorY) * segU2 - (Math.sin(segU2 * Math.PI) * 4 * phaseRelease);
           const pt2Z = anchorZ + (spineZ - anchorZ) * segU2;
           
           positions[offset] = pt1X;
           positions[offset+1] = pt1Y;
           positions[offset+2] = pt1Z;
           positions[offset+3] = pt2X;
           positions[offset+4] = pt2Y;
           positions[offset+5] = pt2Z;

           // colors
           // impulse at firing edge (segU near phaseFire)
           let colR = boneArr[0], colG = boneArr[1], colB = boneArr[2];
           if (clampedLife < 0.12) {
              const pulse = smoothstep(0, 0.05, Math.abs(segU1 - (1.0 - phaseFire))); // very rough pulse 
              if (pulse < 0.1) {
                 colR += magentaArr[0]; colG += magentaArr[1]; colB += magentaArr[2];
              }
           }

           const f = phaseFade;
           colors[offset] = colR * f; colors[offset+1] = colG * f; colors[offset+2] = colB * f;
           colors[offset+3] = colR * f; colors[offset+4] = colG * f; colors[offset+5] = colB * f;

           offset += 6;
        }
      }
      line.geometry.setPositions(positions);
      line.geometry.setColors(colors);
    }
    
    // Apply camera offsets
    camera.position.x = camOffsetX;
    camera.position.y = 9 + camOffsetY;
    
    // Apply bank using Rodrigues formulation natively by altering Up vector before lookat?
    // Wait, camera.rotation.order = 'YXZ' allows us to just set camera.rotation.z
    camera.rotation.z = camBank;
    camera.lookAt(0, 9, camera.position.z - 20);
    // Restore bank which lookAt overwrites if roll isn't protected correctly.
    // Standard lookAt resets roll (z-axis rotation). 
    // Wait, setting .rotation.z AFTER lookAt actually persists if order is YXZ.
    camera.rotation.z = -camBank; // wait, negative because we already looked at.
  });

  return (
    <group ref={groupRef} />
  );
}
