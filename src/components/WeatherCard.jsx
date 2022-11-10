import React from 'react'

const WeatherCard = (props) => {
  const { day, celcius } = props
  return (
    <div className='wcard'>
      <p>{day}</p>
      <p>{celcius}</p>
     
    </div>
  )
}
export default WeatherCard;

