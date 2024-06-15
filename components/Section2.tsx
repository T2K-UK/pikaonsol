'use client';

import Image from "next/image";
import Button3 from './Button3'
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}



const Camp = () => {
  return (
    <section id="tokenomics" className="max-container flex flex-col items-center justify-center pb-32 lg:py-20 min-h-screen bg-cover bg-center hero-bg relative border-image-container">
      <div className="w-full flex justify-center">
        <h1 className="text-6xl font-bold text-white text-center mt-20" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Tokenomics
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row items-center xl:items-start w-full mt-20 space-y-10 xl:space-y-0 xl:space-x-10 px-10">
        <div className="flex-1 flex justify-center xl:justify-start">
        <Image
            src="/eggsmoke.gif" 
            alt="Egg Meme"
            width={999} 
            height={999} 
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col xl:items-center space-y-10 box-shadow">
          <div className="bg-blue-50 bg-opacity-100 p-12 rounded-lg shadow-lg box-border flex flex-row items-center  w-[80%] gap-5 sm:flex-row">
            <div className="items-start justify-start">
              <Image
                src="/egg.png"
                alt="Some image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="items-end justify-end">
              <h2 className="text-3xl bold-32 mb-4 text-left" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Total supply:</h2>
              <p className="text-center bold-52" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>1,000,000,000</p>
            </div>
          </div>
          <div className="bg-orange-50 bg-opacity-100 p-12 rounded-lg shadow-lg box-border flex flex-row items-center w-[80%] gap-5 sm:flex-row">
          <div className="items-start justify-start">
              <Image
                src="/pipe2.png"
                alt="Some image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="items-end justify-end">
              <h2 className="text-3xl bold-32 mb-4 text-center" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>LP Burn:</h2>
              <p className="text-center bold-52" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Burnt</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-100 p-12 rounded-lg shadow-lg box-border flex flex-row items-center w-[80%] gap-5 sm:flex-row">
          <div className="items-start justify-start">
              <Image
                src="/tophat.png"
                alt="Some image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="items-end justify-end">
              <h2 className="text-3xl bold-32 mb-4 text-center" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Tax:</h2>
              <p className="text-center bold-52" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>0%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-text-container absolute top-0 w-full h-16 overflow-hidden flex items-center">
        <div className="moving-text text-white bold-40">$SPACRO    $SPACRO   $SPACRO    $SPACRO    $SPACRO    $SPACRO    $SPACRO     $SPACRO     $SPACRO     $SPACRO     $SPACRO     $SPACRO     $SPACRO     $SPACRO  </div>
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
  )
}

export default Camp