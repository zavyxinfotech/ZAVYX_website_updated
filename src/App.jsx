import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { scrollState } from './store';
import Scene from './Scene';
import DOMOverlay from './DOMOverlay';
import './index.css';

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      // 0 to 1 scroll
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const raw = Math.max(0, Math.min(1, window.scrollY / (maxScroll || 1)));
      scrollState.raw = raw;
      scrollState.p = raw;
      scrollState.sp = Math.max(0, Math.min(1, raw / 0.82));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="track" />
      <div className="sticky-stage">
        <Canvas dpr={window.matchMedia('(max-width: 768px)').matches ? 1 : 1.5} gl={{ antialias: false, powerPreference: "high-performance", alpha: false, preserveDrawingBuffer: false }}>
          <Scene />
        </Canvas>
        <DOMOverlay />
      </div>
    </>
  );
}
