'use client';

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button2 from "./Button2"
import Button from "./Button"
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-10 left-20 right-20 z-50 py-1  bg-white rounded border-solid border-2 ${isScrolled ? 'scrolled-navbar' : 'navbar-shadow'}`}>
      <div className="w-[90%] mx-auto navbar-container padding-container flex items-center justify-between ">
          <div className="hidden lg:flexCenter">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="mx-2">
                <Button2
                  type="button"
                  icon={`/${link.icon}.svg`}
                />
              </Link>
            ))}
          </div>

          <Link href="/">
            <Image src="/pikasol.png" alt="logo" width={300} height={100} />
          </Link>

          <div className="lg:flexCenter hidden">
            <Button 
              type="button"
              title="Address"
              icon="/copy-svgrepo-com.svg"
            />
          </div>

          <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
      </div>
    </nav>
  )
}

export default Navbar

