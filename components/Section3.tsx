'use client';

import Image from "next/image";
import Button3 from './Button3'
interface Sec3Props {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}



const Sec3 = () => {
  return (
    <section id="tokenomics" className="max-container flex flex-col items-center justify-center pb-32 lg:py-20 min-h-screen bg-cover bg-center hero-bg relative border-image-container">
      <div className="w-full flex justify-center">
        <h1 className="text-6xl font-bold text-white text-center mt-20" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        The collection
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row items-center xl:items-start w-full mt-20 space-y-10 xl:space-y-0 xl:space-x-10 px-10">
        <div className="flex-1 flex justify-center xl:justify-start">
          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            {[...Array(9)].map((_, index) => (
              <Image
                key={index}
                src={`/eggmeme_${index + 1}.jpg`} 
                alt={`Image ${index + 1}`}
                width={333} 
                height={333} 
                className="object-cover"
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col xl:items-center space-y-10 box-shadow">
          <div className="bg-green-50 bg-opacity-100 p-12 rounded-lg shadow-lg box-border flex flex-col items-center justify-center w-[80%] gap-5 sm:flex-row">
          
            <div className="text-center">
              <h2 className="text-3xl bold-32 mb-4 text-center" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Total supply:</h2>
              <p className="text-center bold-52" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>1,000,000,000</p>
            </div>
          </div>
          <div className="bg-orange-50 bg-opacity-100 p-12 rounded-lg shadow-lg box-border flex flex-col items-center justify-center w-[80%] gap-5 sm:flex-row">
          
            <div className="text-center">
              <h2 className="text-3xl bold-32 mb-4 text-center" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>LP Burn:</h2>
              <p className="text-center bold-52" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Burnt</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-100 p-12 rounded-lg shadow-lg box-border flex flex-col items-center justify-center w-[80%] gap-5 sm:flex-row">
          
            <div className="text-center">
              <h2 className="text-3xl bold-32 mb-4 text-center" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Tax:</h2>
              <p className="text-center bold-52" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>0%</p>
            </div>
          </div>
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
  )
}

export default Sec3