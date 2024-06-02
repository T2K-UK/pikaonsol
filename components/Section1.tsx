
'use client';

import Image from "next/image";
import Button3 from './Button3'

const Hero: React.FC = () => {
  const scrollToTokenomics = () => {
    const element = document.getElementById("tokenomics");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="max-container flex flex-col items-center justify-center pb-32 md:gap-28 lg:py-20 xl:flex-row min-h-screen bg-cover bg-center hero-bg relative border-image-container">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 xl:mr-20 justify-center px-24">
        
        <h1 className="bold-120 lg:bold-120 text-white" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>$PIKA</h1>
        <p className="bold-32 mt-6 text-gray-900 xl:max-w-[600px]" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Pikachu, ash ketchum first starter pokemon, he has won the hearts of all pokemon fans being a staple creature in the pokemon franchise.
        </p>

        <div className="my-5 flex flex-wrap gap-5"></div>
        <div className="flex flex-col w-full gap-5 sm:flex-row">
          <Button3
            type="button" 
            title="Tokenomics" 
            onClick={scrollToTokenomics}
          />
          
        </div>
      </div>
      <div className="relative z-20 flex flex-1 justify-center xl:w-1/2 xl:ml-20 xl:-mr-10 px-24 mt-10 xl:mt-0">
        <Image
          src="/pikaonsol/output-onlinegiftools.gif" // Replace with the path to your GIF
          alt="Pikachu GIF"
          width={1000} // Set appropriate width
          height={1000} // Set appropriate height
          className="object-contain"
        />
      </div>
      <style jsx>{`
        .border-image-container::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 25px; /* Adjust the height as needed */
          background: url('/borderpika.png') no-repeat center center;
          background-size: cover;
        }
      `}</style>
    </section>
  )
}

export default Hero