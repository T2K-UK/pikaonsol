'use client';

import Image from "next/image";
import { useState } from 'react';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  full?: boolean;
}

const Button = ({ type, title, icon, full }: ButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const copyText = "Address coming soon!"; 
    navigator.clipboard.writeText(copyText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); 
    });
  };
  return (
    <button type={type} className={`${full && 'w-full'} button-shadow hover:button-sink`} onClick={handleCopy} style={{ width: '150px', height: '50px' }}>
      <div className="flex items-center justify-center h-full">
        <a className="relative" >
        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
            {isCopied ? (
              <span className="text-base font-bold">Copied!</span>
            ) : (
              <>
                {icon && (
                  <Image
                    src={icon}
                    width={24}
                    height={24}
                    alt={`${icon.split('.')[0]} icon`}
                    className="inline-block"
                  />
                )}
                <span className="ml-2 text-base font-bold">{title}</span>
              </>
            )}
          </span>
        </a>
      </div>
    </button>
  )
}

export default Button