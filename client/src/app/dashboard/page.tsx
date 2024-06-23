'use client';

import React from "react";
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const Dashboard = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/location');
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full h-[1024px] relative">
        <Image
          className="left-0 absolute w-full h-[7px] top-[10px] object-cover"
          alt="bar"
          src="/images/full-line.svg"
          width={1000}
          height={50}
          quality={95}
        />
        <Image
          className="left-0 absolute w-[25%] h-[7px] top-[10px] object-cover"
          alt="bar"
          src="/images/25p.svg"
          width={1000}
          height={50}
          quality={95}
        />
        <Image
          className="left-[483px] absolute w-[50px] h-[50px] top-[500px] object-cover"
          alt="Left Arrowhead"
          src="/images/arrowhead-4.png"
          width={1000}
          height={50}
          quality={95}
        />
        <Image
          className="left-[1357px] absolute w-[50px] h-[50px] top-[500px] object-cover"
          alt="Right Arrowhead"
          src="/images/arrowhead-5.png"
          width={1000}
          height={50}
          quality={95}
        />
        <div className="absolute w-[500px] h-[360px] top-[340px] left-[-200px] bg-[url(/images/get-active.svg)] bg-cover bg-[50%_50%]">
          <div className="absolute top-[123px] left-[150px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[75px] tracking-[0] leading-[normal]">
            Get Active
          </div>
        </div>
        <div className="absolute w-[500px] h-[360px] top-[340px] left-[1500px] bg-[url(/images/girls-night.svg)] bg-cover bg-[50%_50%]">
          <div className="absolute top-[123px] left-[150px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[75px] tracking-[0] leading-[normal]">
            Girl's Night
          </div>
        </div>
        <div className="absolute w-[650px] h-[500px] top-[250px] left-[630px] bg-[url(/images/chilling.svg)] bg-cover bg-[50%_50%]">
          <div className="absolute top-[193px] left-[211px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[100px] tracking-[0] leading-[normal]">
            Plan
          </div>
        </div>
      </div>
      <div className="absolute w-[117px] h-[50px] top-[900px] left-[900px] bg-[#fde2c0] rounded-[25px] z-0">
        <button className="absolute w-[117px] h-[50px] [font-family:'Poppins-Regular', Helvetica] font-normal text-black z-10" onClick={handleStart}>Next</button>
      </div>
    </div>
  );
};
export default Dashboard;
