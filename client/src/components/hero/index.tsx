"use client"
import React from 'react'
import Header from '../header'

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center w-full min-h-screen max-md:max-w-full">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black opacity-0"></div>
        <img loading="lazy" src="/images/Hero.png" alt="" className="object-cover w-full h-full absolute inset-0 z-0" />
        <div className="relative z-20 w-full h-full">
            <Header />
      </div>
    </section>
  );
};

export default Hero;
