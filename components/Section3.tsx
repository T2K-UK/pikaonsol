'use client';

import { useState } from 'react';
import Image from "next/image";
import Button3 from './Button3';

interface Sec3Props {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Sec3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/scmeme_1.jpg', title: 'Luka Modric' },
    { src: '/scmeme_2.jpg', title: 'Joško Gvardiol' },
    { src: '/scmeme_3.jpg', title: 'Pedri' },
    { src: '/scmeme_4.jpg', title: 'Lamine Yamal' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="collection" className="max-container flex flex-col items-center justify-center pb-32 lg:py-20 min-h-screen bg-cover bg-center hero-bg relative border-image-container">
      <div className="w-full flex justify-center">
        <h1 className="text-6xl font-bold text-white text-center mt-20" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          The Collection
        </h1>
      </div>
      <div className="flex flex-col items-center w-full mt-20 space-y-10 px-10">
        <div className="flex justify-center items-center w-full">
          <button onClick={handlePrev} style={{ color: 'black' }} className="text-white text-4xl mr-4">&#8592;</button>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-black mb-4">{images[currentIndex].title}</h2>
            <div className="border-4 border-black p-1">
                <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                width={999}
                height={999}
                className="object-cover"
                />
            </div>
          </div>
          <button onClick={handleNext} style={{ color: 'black' }} className="text-white text-4xl ml-4">&#8594;</button>
        </div>
      </div>
      <div className="border-text-container absolute top-0 w-full h-16 overflow-hidden flex items-center">
        <div className="moving-text text-white bold-40">$ESPCRO    $ESPCRO   $ESPCRO    $ESPCRO    $ESPCRO    $ESPCRO    $ESPCRO     $ESPCRO     $ESPCRO     $ESPCRO     $ESPCRO     $ESPCRO     $ESPCRO     $ESPCRO  </div>
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

export default Sec3;