import React, { useEffect, useRef } from 'react';



export const AnimatedHeroText = ({ text }) => {
  const words = text.split(" ");
  let charCount = 0;

  return (
    <>
      <style>
        {`
          @keyframes dnaFold {
            0% {
              opacity: 0;
              transform: perspective(600px) rotateX(90deg);
            }
            100% {
              opacity: 1;
              transform: perspective(600px) rotateX(0deg);
            }
          }
          .dna-word {
            display: inline-block;
            opacity: 0;
            transform-origin: center;
            animation: dnaFold 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }
          .char-hover {
            display: inline-block;
          }
        `}
      </style>
      <span className="inline-block text-slate-900 dark:text-white transition-colors duration-300">
        {words.map((word, wIdx) => {
          return (
            <span 
              key={wIdx} 
              className="dna-word mr-3 sm:mr-4 lg:mr-5" 
              style={{ animationDelay: `${wIdx * 0.15 + 0.2}s` }}
            >
              {word.split('').map((char, cIdx) => {
                 const colorClass = `hover-c${charCount % 4}`;
                 charCount++;
                 return (
                   <span 
                     key={cIdx} 
                     className={`char-hover ${colorClass}`}
                   >
                     {char}
                   </span>
                 );
              })}
            </span>
          );
        })}
      </span>
    </>
  );
};
