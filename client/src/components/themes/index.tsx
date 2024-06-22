import React from 'react'
import Image from 'next/image'

const Themes = () => {
  return (
    <div>
        <div className="absolute w-[500px] h-[360px] top-[2652px] left-[-123px] bg-[url(/images/date-night.svg)] bg-cover bg-[50%_50%]">
          <div className="absolute top-[123px] left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[75px] tracking-[0] leading-[normal]">
            Date Night
          </div>
        </div>
        <div className="absolute w-[500px] h-[360px] top-[2652px] left-[1500px] bg-[url(/images/get-active.svg)] bg-cover bg-[50%_50%]">
          <div className="absolute top-[123px] left-[150px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[75px] tracking-[0] leading-[normal]">
            Get Active
          </div>
        </div>
        <div className="absolute w-[650px] h-[500px] top-[2589px] left-[620px] bg-[url(/images/the-boys.svg)] bg-cover bg-[50%_50%]">
          <div className="absolute top-[167px] left-[102px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[100px] tracking-[0] leading-[normal]">
            The Boys
          </div>
        </div>
        <Image
          className="w-[50px] h-[50px] top-[2814px] left-[500px] absolute object-cover"
          alt="Left Arrowhead"
          src="/images/arrowhead-4.png"
          width={1000}
          height={50}
          quality={95}
        />
        <Image
          className="w-[50px] h-[50px] top-[2814px] left-[1330px] absolute object-cover"
          alt="Right Arrowhead"
          src="/images/arrowhead-5.png"
          width={1000}
          height={50}
          quality={95}
        />
    </div>
  )
}

export default Themes