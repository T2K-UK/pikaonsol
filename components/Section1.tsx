
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

  const scrollToCollection = () => {
    const element = document.getElementById("collection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById("roadmap");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="max-container flex flex-col items-center justify-center pb-32 md:gap-28 lg:py-20 xl:flex-row min-h-screen bg-cover bg-center hero-bg relative border-image-container">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 xl:mr-20 justify-center px-24">
        
        <h1 className="bold-120 lg:bold-120 text-white" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>$ESPCRO</h1>
        <p className="bold-32 mt-6 text-black xl:max-w-[600px]" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        
Spain faces Croatia in an exciting Euro 2024 clash, where both teams will battle for a crucial spot in the knockout stages. Expect high-intensity action as Spain's precision meets Croatia's resilience.
        </p>

        <div className="my-5 flex flex-wrap gap-5"></div>
        <div className="flex flex-col w-full gap-5 sm:flex-row">
          <Button3
            type="button" 
            title="Tokenomics" 
            onClick={scrollToTokenomics}
          />
          
        </div>
        <div className="my-1.5"></div>
        <div className="flex flex-col w-full gap-5 sm:flex-row">
          <Button3
            type="button" 
            title="Collection" 
            onClick={scrollToCollection}
          />
          
        </div>
        <div className="my-1.5"></div>
        <div className="flex flex-col w-full gap-5 sm:flex-row">
          <Button3
            type="button" 
            title="Roadmap" 
            onClick={scrollToRoadmap}
          />
          
        </div>
      </div>
      <div className="relative z-20 flex flex-1 justify-center xl:w-1/2 xl:ml-20 xl:-mr-10 px-24 mt-10 xl:mt-0">
        <Image
          src="/scall.gif" // Replace with the path to your GIF
          alt="Pikachu GIF"
          width={1000} // Set appropriate width
          height={1000} // Set appropriate height
          className="object-contain"
        />
      </div>
      
    </section>
  )
}

export default Hero