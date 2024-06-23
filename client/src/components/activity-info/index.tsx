import React from 'react'

const ActivityInfo = ({ activity }: { activity: any }) => {
  console.log('Created pop up: for ', activity['Activity'])
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <p className="element-king-dr-daly">
            <span className="text-wrapper">📍</span>
            <span className="span">
              {" "}
              900 King Dr, Daly City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-wrapper">💵</span>
            <span className="span">
              {" "}
              Price: $ - Affordable&nbsp;&nbsp;&nbsp;&nbsp; <br />
            </span>
            <span className="text-wrapper">⭐ </span>
            <span className="span">Rating: 4.5 (200 reviews)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <span className="text-wrapper">🏷️ </span>
            <span className="span">Tags: #Bowling #Nightlife</span>
          </p>
          <p className="enjoy-a-fun-evening">
            Enjoy a fun evening at Classic Bowling with neon lights and music.
            <br />
            Perfect for a casual night out or a&nbsp;&nbsp;competitive game with friends.
          </p>
          <div className="overlap">
            <div className="div">Classic Bowling</div>
            <div className="text-wrapper-2">10:00PM - 12:00AM</div>
          </div>
          <img className="img" alt="Img" src="10c5e07de20a3f5e2ae47d053190aade4073548f-2.png" />
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="text-wrapper-3">Edit</div>
          </div>
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="text-wrapper-3">Save</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityInfo