import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { scrollState } from './store';

// Smoothstep utility
const smoothstep = (min, max, value) => {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
};

export default function DOMOverlay() {
  const overlayRef = useRef(null);
  const act1Ref = useRef(null);
  const act2Ref = useRef(null);
  
  // Custom loop avoiding React re-renders since we use requestAnimationFrame directly
  // Actually, we can hook into R3F's useFrame since DOMOverlay wraps inside Canvas?
  // No, DOMOverlay is outside Canvas in App.jsx.
  // I will write a custom requestAnimationFrame loop for DOM Overlay.
  
  React.useEffect(() => {
    let frameId;
    const tick = () => {
      const p = scrollState.p;
      const sp = scrollState.sp;
      
      // Update Act 1 Overlay (0 to 0.2 of sp) Let's say it fades out between 0.15 and 0.2
      if (act1Ref.current) {
        const fadeOut = 1 - smoothstep(0.12, 0.20, sp);
        act1Ref.current.style.opacity = fadeOut;
        act1Ref.current.style.visibility = fadeOut < 0.01 ? 'hidden' : 'visible';
        act1Ref.current.style.transform = `translateZ(0) scale(${1 + (1-fadeOut)*0.1})`;
        act1Ref.current.style.filter = `blur(${(1-fadeOut)*10}px)`;
      }

      // Update Act 2 Overlay (e.g., closing arriving in acts 4-5) 
      if (act2Ref.current) {
        const arrive = smoothstep(0.70, 0.85, sp);
        const wipe = 1 - smoothstep(0.90, 1.0, p); // fades out at extreme end if p wipe
        const finalOp = arrive * wipe;
        act2Ref.current.style.opacity = finalOp;
        act2Ref.current.style.visibility = finalOp < 0.01 ? 'hidden' : 'visible';
        act2Ref.current.style.transform = `translateZ(0) scale(${1 + (1-arrive)*0.2})`;
        act2Ref.current.style.filter = `blur(${(1-arrive)*10}px)`;
      }

      frameId = requestAnimationFrame(tick);
    }
    tick();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="dom-overlay" ref={overlayRef}>
      
      <div ref={act1Ref} className="overlay-content" style={{ position: 'absolute', willChange: 'opacity, transform, filter', backfaceVisibility: 'hidden' }}>
        <div className="title-wordmark">
          <span className="brand-zavyx">ZAVYX</span>
          <span className="brand-info">info</span><span className="brand-tech">tech</span>
        </div>
        <div className="copy-rhythm">
          <div>BRAND NEW DAY</div>
        </div>
      </div>

      <div ref={act2Ref} className="overlay-content" style={{ position: 'absolute', opacity: 0, visibility: 'hidden', willChange: 'opacity, transform, filter', backfaceVisibility: 'hidden' }}>
        <div className="copy-rhythm">
          <div style={{ color: 'var(--raw-magenta-500)'}}>BUILDING</div>
          <div style={{ color: 'var(--raw-azure-500)'}}>FORWARD</div>
        </div>
      </div>

    </div>
  );
}
