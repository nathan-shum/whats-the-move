import React from 'react'
import Image from 'next/image'

const GettingStarted = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-[url(/images/1000_F_561382565_gSbpB8DMRXYK8bM26GOGsGDexeedEBBL-1.png)] bg-cover bg-[10%_10%]">
        <div className="absolute w-full h-[1025px] top-0 left-0 [background:linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(102,102,102,0.4)_80%)]" />
        <div className="absolute w-[279px] h-[53px] top-[600px] left-[calc(100vw-1100px)] bg-white rounded-[25px]" />
        <div className="absolute top-[610px] left-[calc(100vw-1040px)] [font-family:'Literata-Bold',Helvetica] font-bold text-black text-3xl tracking-[0] leading-[normal]">
            Get Started
        </div>
        <div className="absolute w-[165px] h-[60px] top-[34px] left-[calc(100vw-200px)] bg-black rounded-[37.5px]" />
        <div className="absolute top-[calc(100vh-985px)] left-[calc(100vw-165px)] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
        Log in
        </div>
        <Image className="absolute w-[146px] h-[50px] top-[30px] left-[34px]" alt="Wtm" src="/images/WTM.svg" width={1000} height={760} quality={95} />
        <Image className="absolute w-[800px] h-[700px] top-[90px] left-[550px]" alt="slogan" src="/images/needs-a-move.svg" width={1000} height={760} quality={95} />
    </div>
  )
}

export default GettingStarted
