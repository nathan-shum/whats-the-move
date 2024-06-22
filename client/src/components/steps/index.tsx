import React from 'react'
import Image from 'next/image'

const Steps = () => {
  return (
    <div className="absolute w-[1428px] h-[413px] top-[2059px] left-[calc(100vw-1600px)]">
        <div className="absolute w-80 h-[352px] top-0 left-0 rounded-[18px] [background:linear-gradient(180deg,rgb(255,189,105)_0%,rgb(255,255,255)_100%)]" />
        <div className="absolute w-80 h-[352px] top-0 left-[487px] rounded-[18px] [background:linear-gradient(180deg,rgb(255,189,105)_0%,rgb(255,255,255)_100%)]" />
        <div className="absolute w-80 h-[352px] top-0 left-[998px] rounded-[18px] [background:linear-gradient(180deg,rgb(255,189,105)_0%,rgb(255,255,255)_100%)]" />
        <div className="flex w-[1182px] h-[223px] items-start gap-[333px] absolute top-[5px] left-[65px]">
        <div className="relative w-fit mt-[-1.00px] mb-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[150px] tracking-[0] leading-[normal]">
            01
        </div>
        <div className="relative w-fit mt-[-1.00px] mb-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[150px] tracking-[0] leading-[normal]">
            02
        </div>
        <div className="mr-[-12.00px] relative w-fit mt-[-1.00px] mb-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[150px] tracking-[0] leading-[normal]">
            03
        </div>
        </div>
        <div className="absolute w-[227px] top-[175px] left-[67px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[75px] tracking-[0] leading-[normal]">
        Find
        </div>
        <div className="w-[222px] top-[175px] left-[569px] text-black text-[75px] absolute [font-family:'Poppins-Bold',Helvetica] font-bold tracking-[0] leading-[normal]">
        Plan
        </div>
        <div className="absolute w-[205px] top-[175px] left-[1083px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[75px] tracking-[0] leading-[normal]">
        Live
        </div>
        <div className="left-[133px] absolute w-[53px] h-[53px] top-[299px] bg-white rounded-[26.62px] shadow-[0px_0px_0.72px_#ffc173,0px_0px_1.43px_#ffc173,0px_0px_5.01px_#ffc173,0px_0px_10.02px_#ffc173,0px_0px_17.18px_#ffc173,0px_0px_30.06px_#ffc173]" />
        <div className="left-[620px] absolute w-[53px] h-[53px] top-[299px] bg-white rounded-[26.62px] shadow-[0px_0px_0.72px_#ffc173,0px_0px_1.43px_#ffc173,0px_0px_5.01px_#ffc173,0px_0px_10.02px_#ffc173,0px_0px_17.18px_#ffc173,0px_0px_30.06px_#ffc173]" />
        <div className="left-[1131px] absolute w-[53px] h-[53px] top-[299px] bg-white rounded-[26.62px] shadow-[0px_0px_0.72px_#ffc173,0px_0px_1.43px_#ffc173,0px_0px_5.01px_#ffc173,0px_0px_10.02px_#ffc173,0px_0px_17.18px_#ffc173,0px_0px_30.06px_#ffc173]" />
        <Image
        className="w-[25px] h-[25px] top-[316px] left-[148px] absolute object-cover"
        alt="Arrowhead"
        src="/images/arrowhead-1.png"
        width={1000}
        height={1000}
        quality={95}
        />
        <Image
        className="w-[25px] h-[25px] top-[316px] left-[635px] absolute object-cover"
        alt="Arrowhead"
        src="/images/arrowhead-2.png"
        width={1000}
        height={25}
        quality={95}
        />
        <Image
        className="w-[25px] h-[25px] top-[316px] left-[1146px] absolute object-cover"
        alt="Arrowhead"
        src="/images/arrowhead-3.png"
        width={1000}
        height={25}
        quality={95}
        />
        <div className="absolute top-[302px] left-[1247px] [font-family:'Literata-Bold',Helvetica] font-bold text-white text-[75px] tracking-[0] leading-[normal]">
        Spor
        </div>
    </div>
  )
}

export default Steps