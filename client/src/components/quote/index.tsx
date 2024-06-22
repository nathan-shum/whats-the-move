import React from 'react'
import Image from 'next/image'

const Quote = () => {
  return (
    <div>
        <div className="absolute w-full h-[2248px] top-[3232px] left-0">
          <div className="absolute w-full h-[2248px] top-0 left-0">
            <div className="absolute w-full h-[900px] top-0 left-0 bg-[#ffc173]" />
            <div className="absolute w-[200px] top-[500px] left-[1500px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
              Jordan H.
            </div>
            <div className="absolute top-[540px] left-[1410px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-3xl tracking-[0] leading-[normal]">
              College Student
            </div>
            <p className="absolute w-[501px] top-[68px] left-[150px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal] underline whitespace-nowrap">
              Cheers To Our Users Being “frfr.”
            </p>
            <p className="absolute w-[1311px] top-[202px] left-[150px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[50px] tracking-[0] leading-[normal]">
              “I don’t got to worry about sitting in the car looking at places to eat, go, or chill. ‘What’s the Move’
              saved me so much time planning functions”
            </p>
            <div className="absolute w-[661px] h-[755px] top-[530px] left-[137px]">
              <div className="absolute w-[480px] h-[305px] top-[286px] left-[181px]">
                <Image
                  className="w-[69px] h-[69px] top-[22px] left-[3px] absolute object-cover"
                  alt="Person walking"
                  src="/images/person-walking-1.png"
                  width={1000}
                  height={760}
                  quality={95}
                />
                <Image
                  className="w-[72px] h-[72px] top-[137px] left-[257px] absolute object-cover"
                  alt="Person walking"
                  src="/images/person-walking-3.png"
                  width={1000}
                  height={72}
                  quality={95}
                />
                <Image
                  className="w-[51px] h-[51px] top-[246px] left-[414px] absolute object-cover"
                  alt="Person walking"
                  src="/images/person-walking-4.png"
                  width={1000}
                  height={72}
                  quality={95}
                />
                <Image
                  className="w-[72px] h-[72px] top-0 left-[166px] absolute object-cover"
                  alt="Person walking"
                  src="/images/person-walking-2.png"
                  width={1000}
                  height={72}
                  quality={95}
                />
              </div>
              <Image
                className="w-[68px] h-[68px] top-[336px] left-0 absolute object-cover"
                alt="Person walking"
                src="/images/person-walking-5.png"
                width={1000}
                height={72}
                quality={95}
              />
              <Image
                className="w-[71px] h-[71px] top-[185px] left-4 absolute object-cover"
                alt="Person walking"
                src="/images/person-walking-6.png"
                width={1000}
                height={72}
                quality={95}
              />
              <Image
                className="w-[70px] h-[70px] top-0 left-[76px] absolute object-cover"
                alt="Person walking"
                src="/images/person-walking-7.png"
                width={1000}
                height={72}
                quality={95}
              />
            </div>
            <Image className="absolute w-[574px] h-[676px] top-[387px] left-0" alt="Group" src="/images/group-8.png"  width={1000} height={680} quality={95} />
            <div className="absolute w-full h-[647px] top-[1601px] left-0 [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(255,189,105)_100%)]" />
            <Image className="absolute w-[1212px] h-1 top-[1904px] left-[114px]" alt="Line-19" src="/images/line-19.svg" width={1000} height={1904} quality={95} />
            <Image className="absolute w-[510px] h-[510px] top-[740px] left-[310px]" alt="Line-18" src="/images/line-18.svg" width={1000} height={1904} quality={95} />
            <Image className="absolute w-[367px] h-[768px] top-[1056px] left-[114px]" alt="Mobile" src="/images/image-5.png" width={1000} height={770} quality={95} />
          </div>
          <Image
            className="absolute w-64 h-[76px] top-[1058px] left-[798px] object-cover"
            alt="App Store"
            src="/images/image-1.png"
            width={1000}
            height={100}
            quality={95}
          />
          <Image
            className="absolute w-64 h-[75px] top-[1059px] left-[1086px] object-cover"
            alt="Google Play"
            src="/images/image-2.png"
            width={1000}
            height={100}
            quality={95}
          />
          <Image
            className="absolute w-[650px] h-[500px] top-[1220px] left-[905px] object-cover z-10"
            alt="Yurr Movers"
            src="/images/yurr-movers.png"
            width={1000}
            height={100}
            quality={95}
          />
          <Image
            className="absolute w-[683px] h-[703px] top-[1159px] left-[886px] object-cover z-0"
            alt="Yurr Movers"
            src="/images/yurr-movers-rectangle.svg"
            width={1000}
            height={100}
            quality={95}
          />
          <div className="absolute w-[279px] h-[53px] top-[926px] left-[85px] bg-black rounded-[25px]" />
            <div className="absolute top-[933px] left-[159px] [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal]">
              Try it now!
            </div>
        </div>
    </div>
  )
}

export default Quote