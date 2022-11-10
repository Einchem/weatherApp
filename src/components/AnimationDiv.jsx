import React from 'react'
import '../weatherCss/animationdiv.css'


export default function AnimationDiv() {
  return (
    <div>
    
		<div className="container">
			<div className="weather-sun">
				<div className="sun">
					<div className="rays"></div>
					<div className="rays"></div>
					<div className="rays"></div>
					<div className="rays"></div>
				</div>
			</div>
			<div className="weather-cloud">
				<div className="cloud"></div>
				<div className="cloud"></div>
			</div>
			<div className="weather-snow">
				<div className="snow">
					<div className="f"></div>
				</div>
			</div>
			<div className="weather-cloudAndSun">
				<div className="cloud"></div>
				<div className="sun">
					<div className="rays"></div>
					<div className="rays"></div>
					<div className="rays"></div>
					<div className="rays"></div>
				</div>
			</div>
			<div className="weather-rain">
				<div className="cloud"></div>
				<div className="rain"></div>
				<div className="rain"></div>
				<div className="rain"></div>
				<div className="rain"></div>
			</div>
		</div>
    
    </div>


  )
}
