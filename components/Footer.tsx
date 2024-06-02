'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-border-image py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-black text-center relative z-10">
          &copy; {new Date().getFullYear()} Pika on sol is a memecoin for entertainment purposes only.
        </p>
      </div>
      <style jsx>{`
        .bg-border-image {
          background-image: url('/borderpika.png'); /* Replace with your border image URL */
        }
      `}</style>
    </footer>
  );
};

export default Footer;