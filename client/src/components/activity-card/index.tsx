import React from 'react';

const ActivityCard = ({ activity, onClick }: { activity: any , onClick: any}) => {

  const handleClick = () => {
    console.log('HELLO')
    console.log('Card clicked:', activity); // Verify the activity inside handleClick
    onClick(activity); // Ensure the correct activity is passed
  };

  return (
         <div className="relative w-[850px] h-[172px] bg-white">
            <div className="absolute w-[803px] h-[172px]">
            <div className="w-[785px] h-[153px] top-[19px] left-[18px] bg-[#faf7f0] absolute rounded-[17.28px]" />
            <div className="w-[501px] h-[65px] top-[95px] left-10 bg-[#d9d9d9] absolute rounded-[17.28px]" />
            <p className="absolute w-[495px] top-[93px] left-[60px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[14.4px] tracking-[-0.41px] leading-[34.6px]">
                {activity['Brief Description']}
            </p>
            <div className="absolute w-[474px] top-[34px] left-[63px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#1f1a0a] text-[28.8px] tracking-[-0.61px] leading-[51.5px]">
                {activity['Location']}
            </div>
            <img className="absolute w-[201px] h-[130px] top-[31px] left-[582px] object-cover" src={activity['Photo']} alt={activity['Activity']} />
            <div className="w-[133px] h-11 top-[38px] left-[410px] bg-white absolute rounded-[17.28px]" />
            <p className="absolute top-[41px] left-[438px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#a07f1c] text-[14.4px] tracking-[0] leading-[36.8px] whitespace-nowrap">
                {" "}
                {activity['Time Spent']} minutes
            </p>
            <button onClick={handleClick} className="w-[100px] h-[30px] absolute top-[110px] left-[690px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#a07f1c] text-[14.4px] tracking-[0] leading-[36.8px] whitespace-nowrap bg-white absolute rounded-[17.28px]">
                more
            </button>
            <div className="absolute w-9 h-9 bg-[url(/cancel-1.svg)] bg-cover bg-[50%_50%] top-0 left-0" />
            </div>
        </div>

  );
};

export default ActivityCard;





// <div className="activity-card">
    //   <h2>{activity['Activity']}</h2>
    //   <p><strong>Location:</strong> {activity['Location']}</p>
    //   <p><strong>Time Frame:</strong> {activity['Time Frame']}</p>
    //   <p><strong>Time Spent:</strong> {activity['Time Spent']} minutes</p>
    //   <p><strong>Description:</strong> {activity['Brief Description']}</p>
    //   <p><strong>Long Description:</strong> {activity['Long Description']}</p>
    //   <p><strong>Address:</strong> {activity['Activity Address']}</p>
    //   <p><strong>Google Maps:</strong> <a href={activity['Google Maps']} target="_blank" rel="noopener noreferrer">View on Map</a></p>
    //   <p><strong>Website:</strong> <a href={activity['Website']} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
    //   <p><strong>Photo:</strong> <img src={activity['Photo']} alt={activity['Activity']} /></p>
    // </div>