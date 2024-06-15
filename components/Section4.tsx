'use client';

import { useState } from 'react';
import Image from "next/image";
import Button3 from './Button3';

interface Sec4Props {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Sec4 = () => {
  
  return (
    <section id="roadmap" className="max-container flex flex-col items-center justify-center pb-32 lg:py-20 min-h-screen bg-cover bg-center hero-bg relative border-image-container">
      <div className="w-full flex justify-center">
        <h1 className="text-6xl font-bold text-white text-center mt-20" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Roadmap
        </h1>
      </div>
      <div className="flex flex-col items-center w-full mt-20 space-y-10 px-10">
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center">
            <div className="border-4 border-black p-1">
                <Image
                src="/scroadmap.png"
                alt="roadmap"
                width={1400}
                height={750}
                className="object-cover"
                />
            </div>
          </div>
        </div>
      </div>
      <div className="border-text-container absolute top-0 w-full h-16 overflow-hidden flex items-center">
        <div className="moving-text text-white bold-40">$SPACRO    $SPACRO   $SPACRO    $SPACRO    $SPACRO    $SPACRO    $SPACRO     $SPACRO     $SPACRO     $SPACRO     $SPACRO     $SPACRO     $SPACRO     $SPACRO </div>
      </div>
      <style jsx>{`
        .border-text-container {
          background: url('/blackborder.png') no-repeat center center;
          background-size: cover;
          border-top: 4px solid black;
          border-bottom: 4px solid black;
          z-index: 2; /* Ensure the text is above the border image */
        }
        .moving-text {
          white-space: nowrap;
          will-change: transform;
          animation: moveText 10s linear infinite;
          padding-left: 100%; /* Start the text off-screen */
        }
        @keyframes moveText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Sec4;