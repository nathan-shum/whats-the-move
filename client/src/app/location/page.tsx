'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react'
import Image from 'next/image'
import GoogleMapsPlaces from '../../components/map'

const Location = () => {
  const [location, setLocation] = useState<string>('');
  const router = useRouter();

  const handleNext = () => {
    localStorage.setItem('location', location);
    router.push('/time');
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
          className="left-0 absolute w-[50%] h-[7px] top-[10px] object-cover"
          alt="bar"
          src="/images/25p.svg"
          width={1000}
          height={50}
          quality={95}
        />
        <div className="absolute w-[776px] h-[882px] top-[123px] left-[884px]">
          <div className="absolute w-[776px] h-[776px] top-px left-0 bg-[#fde2c0] rounded-[388px]" />
          <div className="absolute w-[409px] h-[135px] top-[747px] left-[186px]">
            <div className="relative w-[405px] h-[135px] bg-[#fde2c0] rounded-[30.47px] border-[1.3px] border-solid border-black">
              <div className="absolute w-[281px] top-3.5 left-20 [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[24.4px] tracking-[0] leading-[normal]">
                Maximum Distance
              </div>
              <div className="absolute w-[326px] h-[50px] top-[52px] left-8">
                <div className="absolute w-[326px] h-[50px] top-0 left-0">
                  <Image className="absolute w-[26px] h-[31px] top-0 left-0 object-cover" alt="Pin" src="/images/pin-1.svg" width={1000} height={50} quality={95} />
                  <div className="absolute w-[314px] h-[23px] top-7 left-3">
                    <Image className="absolute w-[314px] h-1 top-[7px] left-0" alt="Line" src="/images/line-20.svg" width={1000} height={50} quality={95}/>
                    <Image className="absolute w-[50px] h-px top-2.5 left-px" alt="Line" src="/images/line-21.svg" width={1000} height={50} quality={95}/>
                    <div className="absolute w-[23px] h-[23px] top-0 left-[37px] bg-black rounded-[11.38px]" />
                  </div>
                </div>
                <div className="absolute w-[73px] top-0 left-11 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[18.3px] tracking-[0] leading-[normal]">
                  2 mi
                </div>
              </div>
            </div>
          </div>
          <Image
            className="absolute w-[673px] h-[673px] top-[52px] left-[51px] object-cover"
            alt="Image"
            src="/images/image-4.svg"
            width={1000} height={50} quality={95}
            z-0
          />
          <div className="absolute w-[210px] h-[210px] top-[265px] left-[116px] bg-[#00000054] rounded-[104.94px]" />
          <div className="w-[137px] h-[29px] top-[340px] bg-[#fde2c0] rounded-[19.78px] border-[0.75px] border-solid border-black absolute left-[152px]" />
          <div className="absolute top-[346px] left-[175px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[10.5px] tracking-[0] leading-[normal]">
            Golden Gate Park
          </div>
          <div className="w-[462px] h-[60px] top-0 bg-white rounded-[3.75px] border border-solid border-[#b6b6b6] shadow-[0px_4px_4px_#00000040] absolute left-[152px]" />
          <div className="absolute top-3.5 left-[175px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#979797] text-xl tracking-[0] leading-[normal]">
            Enter location
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="absolute top-[484px] left-[230px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
          Where's the Move?
          <GoogleMapsPlaces />
        </div>
        <div className="absolute w-[117px] h-[50px] top-[600px] left-[480px] bg-[#fde2c0] rounded-[25px] z-0">
          <button className="absolute w-[117px] h-[50px] [font-family:'Poppins-Regular', Helvetica] font-normal text-black z-10" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Location