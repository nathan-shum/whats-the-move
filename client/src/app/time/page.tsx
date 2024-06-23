'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react'
import Image from 'next/image'

const Time = () => {
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const router = useRouter();

  const handleNext = () => {
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('endTime', endTime);
    router.push('/activities');
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
          className="left-0 absolute w-[75%] h-[7px] top-[10px] object-cover"
          alt="bar"
          src="/images/25p.svg"
          width={1000}
          height={50}
          quality={95}
        />
        <div className="absolute top-[484px] left-[350px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
          When’s the Move?
        </div>
        <div className="absolute top-[484px] left-[1100px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#979797] text-xl tracking-[0] leading-[normal]">
            <h1>Enter Start and End Time</h1>
            <br />
            <label className='top-0 bg-white rounded-[3.75px] border border-solid border-[#b6b6b6] shadow-[0px_4px_4px_#00000040]'>
                Start Time:
                <input
                type="text"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                />
            </label>
            <br />
            <br />
            <label className='top-0 bg-white rounded-[3.75px] border border-solid border-[#b6b6b6] shadow-[0px_4px_4px_#00000040]'>
                End Time:
                <input
                type="text"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                />
            </label>
            <br />
            <br />
            <button className="absolute left-[200px] bg-[#fde2c0] rounded-[25px] absolute w-[117px] h-[50px] [font-family:'Poppins-Regular', Helvetica] font-normal text-black z-10" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>

  )
}

export default Time