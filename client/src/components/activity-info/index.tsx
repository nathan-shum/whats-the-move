import React from 'react'

const ActivityInfo = ({ activity }: { activity: any }) => {
  console.log('Created pop up: for ', activity['Activity'])
  return (
    <div className="w-[559px] h-[804px]">
      <div className="w-[571px] h-[804px] top-0 left-0">
        <div className="relative w-[559px] h-[804px] bg-[#faf7f0] rounded-[17.28px]">
          <p className="absolute w-[505px] top-[587px] left-[26px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[26.9px] tracking-[-0.57px] leading-[48.1px]">
            <span className="tracking-[-0.15px]">📍</span>
            <span className="text-[16.1px] w-[215px] inline-block leading-[1.6]">
              {activity['Activity Address']}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="tracking-[-0.15px]">💵</span>
            <span className="text-[16.1px] tracking-[-0.09px]">
              {" "}
              Price: $ - Affordable&nbsp;&nbsp;&nbsp;&nbsp; <br />
            </span>
            <span className="tracking-[-0.15px]">⭐ </span>
            <span className="text-[16.1px] tracking-[-0.09px]">
              Rating: 4.5 (200 reviews)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span className="tracking-[-0.15px]">🏷️ </span>
            <span className="text-[16.1px] tracking-[-0.09px]">Tags: #Bowling #Nightlife</span>
          </p>
          <p className="absolute w-[496px] top-[475px] left-[35px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16.1px] tracking-[-0.57px] leading-[1.6]">
            {activity['Long Description']}
          </p>
          <div className="absolute w-[213px] h-20 top-[390px] left-[35px]">
            <div className="absolute top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#1f1a0a] text-[26.9px] tracking-[-0.57px] leading-[48.1px] whitespace-nowrap">
                {activity['Activity']}
            </div>
            <div className="absolute top-[45px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#a07f1c] text-[24.1px] tracking-[0] leading-[34.4px] whitespace-nowrap">
                {activity['Time Frame']}
            </div>
          </div>
          <img
            className="absolute w-[499px] h-[334px] top-8 left-[29px] object-cover"
            alt="Img"
            src="/images/10c5e07de20a3f5e2ae47d053190aade4073548f-2.png"
          />
          <div className="absolute w-[202px] h-[49px] top-[698px] left-[35px]">
            <div className="absolute w-[202px] h-[47px] top-0 left-0 bg-[#fedd91] rounded-[20.18px]" />
            <div className="absolute top-0 left-[78px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[24.2px] tracking-[-0.57px] leading-[48.1px] whitespace-nowrap">
              Edit
            </div>
          </div>
          <div className="absolute w-[202px] h-[49px] top-[698px] left-[316px]">
            <div className="absolute w-[202px] h-[47px] top-0 left-0 bg-[#fedd91] rounded-[20.18px]" />
            <div className="absolute top-0 left-[78px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[24.2px] tracking-[-0.57px] leading-[48.1px] whitespace-nowrap">
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityInfo