import React from 'react'
import Image from 'next/image'

const Embark = () => {
  return (
    <div>
        <p className="absolute w-[621px] top-[1203px] left-[79px] [font-family:'Poppins-Bold',Helvetica] font-bold text-transparent text-[70px] tracking-[0] leading-[normal]">
            <span className="text-black">Embark on your best outings every </span>
            <span className="text-[#fec62e]">single</span>
            <span className="text-black">
                {" "}
                day.
                <br />
            </span>
        </p>
        <p className="absolute w-[491px] top-[1542px] left-[79px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            We&#39;ve done the heavy lifting on planning so you can focus on enjoying your day.
        </p>
        <div className="absolute w-[281px] h-[53px] top-[1735px] left-[79px]">
            <div className="relative w-[279px] h-[53px] bg-black rounded-[25px]">
                <div className="absolute top-[13px] left-[46px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                    What’s The Move?
                </div>
            </div>
        </div>
        <Image
            className="absolute w-[678px] h-[468px] top-[1320px] left-[1050px] object-cover"
            alt="Element"
            src="/images/35a1e12c-404b-4e3f-96d7-3f43db44216c-1.png"
            width={1000}
            height={1000}
            quality={95}
        />
    </div>
  )
}

export default Embark