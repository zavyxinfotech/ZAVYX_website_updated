import React, { useEffect, useRef, useState } from 'react';

export default function ScrollAnimatedHeading({ text, className }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  let charCounter = 0;

  return (
    <div ref={containerRef} className={`inline-flex flex-wrap justify-center ${className}`}>
      <style>
        {`
          .scroll-anim-char {
             display: inline-block;
             opacity: 0;
             transform: translateY(20px) rotateX(-90deg);
             transform-origin: bottom center;
             transition: opacity 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .scroll-anim-visible .scroll-anim-char {
             opacity: 1;
             transform: translateY(0) rotateX(0deg);
          }
        `}
      </style>
      
      <span className={isVisible ? "scroll-anim-visible" : ""}>
          {words.map((word, wIdx) => {
            return (
              <span key={wIdx} className="inline-flex mr-[0.3em] whitespace-nowrap">
                {word.split('').map((char, cIdx) => {
                  charCounter++;
                  return (
                    <span 
                       key={`${wIdx}-${cIdx}`} 
                       className="scroll-anim-char transition-colors duration-300"
                       style={{ transitionDelay: `${charCounter * 0.04}s` }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            );
          })}
      </span>
    </div>
  );
}
