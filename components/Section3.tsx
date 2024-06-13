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
    { src: '/eggmeme_1.jpg', title: 'Gentleman Eggstein' },
    { src: '/eggmeme_2.jpg', title: 'Astronaut Eggstein' },
    { src: '/eggmeme_3.jpg', title: 'Clown Eggstein' },
    { src: '/eggmeme_4.jpg', title: 'Elephant Eggstein' },
    { src: '/eggmeme_5.jpg', title: 'Mario Eggstein' },
    { src: '/eggmeme_6.jpg', title: 'Doctor Eggstein' },
    { src: '/eggmeme_7.jpg', title: 'Wizard Eggstein' },
    { src: '/eggmeme_8.jpg', title: 'Cowboy Eggstein' },
    { src: '/eggmeme_9.jpg', title: 'King Eggstein' },
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
      <style jsx>{`
        .border-image-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 25px; /* Adjust the height as needed */
          background: url('/blackborder.png') no-repeat center center;
          background-size: cover;
        }
      `}</style>
    </section>
  );
};

export default Sec3;