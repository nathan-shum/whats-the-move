import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="absolute w-[1440px] h-[2248px] top-[3232px] left-0">
        <p className="absolute w-[491px] top-[1957px] left-[114px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            We aim to make everyday extraordinary!
        </p>
        <div className="absolute top-[2018px] left-[114px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]">
            info@whatsthemove.co
        </div>
        <Image className="absolute w-[354px] h-[46px] top-[2086px] left-[114px]" alt="Group" src="/images/group-6.png" width={1000} height={50} quality={95} />
    </div>
  )
}

export default Footer