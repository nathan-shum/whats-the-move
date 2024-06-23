'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'


const Activities = () => {
  
  const [activities, setActivities] = useState<string>('');
  const [numberOfActivities, setNumberOfActivities] = useState<number>(1);
  const router = useRouter();
  
  const handleNext = () => {
    localStorage.setItem('activities', activities);
    localStorage.setItem('numberOfActivities', numberOfActivities.toString());
    router.push('/itinerary');
  };
  
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full h-[1024px] relative">
        <Image
          className="left-0 absolute w-full h-[7px] top-[10px] object-cover"
          alt="bar"
          src="/images/100p.svg"
          width={1000}
          height={50}
          quality={95}
        />
        <div className="absolute top-[484px] left-[330px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
          What’s the Move?
        </div>
        <div className="absolute w-[462px] h-[60px] top-[485px] left-[1037px] bg-white rounded-[3.75px] border border-solid border-[#b6b6b6] shadow-[0px_4px_4px_#00000040]">
          <div className="absolute top-[13px] left-3.5 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#979797] text-xl tracking-[0] leading-[normal]">
            <label>
                Activities (comma-separated):
                <input
                type="text"
                value={activities}
                onChange={(e) => setActivities(e.target.value)}
                />
            </label>
          </div>
        </div>
        <div className="absolute w-[279px] h-[60px] top-[403px] left-[1036px] bg-white rounded-[3.75px] border border-solid border-[#b6b6b6] shadow-[0px_4px_4px_#00000040]">
          <div className="absolute top-[13px] left-[13px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#979797] text-xl tracking-[0] leading-[normal]">
            <label>
                Number of Activities:
                <input
                type="number"
                value={numberOfActivities}
                onChange={(e) => setNumberOfActivities(Number(e.target.value))}
                />
            </label>
          </div>
        </div>
        <div className="absolute w-[138px] h-[50px] top-[567px] left-[1037px] bg-[#fde2c0] rounded-[25px]">
          <div className="absolute top-[9px] left-[13px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
            Bowling
          </div>
          <img className="left-[113px] absolute w-2.5 h-2.5 top-5 object-cover" alt="Close" src="/images/close.svg" />
        </div>
        <div className="absolute w-[117px] h-[50px] top-[567px] left-[1198px] bg-[#fde2c0] rounded-[25px]">
          <div className="absolute top-[9px] left-4 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
            KBBQ
          </div>
          <img className="left-[91px] absolute w-2.5 h-2.5 top-5 object-cover" alt="Close" src="/images/close.svg" />
        </div>
        <div className="absolute w-[117px] h-[50px] top-[567px] left-[1338px] bg-[#fde2c0] rounded-[25px]">
          <div className="absolute top-[9px] left-4 [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
            Picnic
          </div>
          <img className="left-[97px] absolute w-2.5 h-2.5 top-5 object-cover" alt="Close" src="/images/close.svg" />
        </div>
        <div className="absolute w-[117px] h-[50px] top-[650px] left-[1350px] bg-[#fde2c0] rounded-[25px] z-0">
            <button className="absolute w-[117px] h-[50px] [font-family:'Poppins-Regular', Helvetica] font-normal text-black z-10" onClick={handleNext}>Generate Itinerary</button>
        </div>
      </div>
    </div>
  )
}

export default Activities