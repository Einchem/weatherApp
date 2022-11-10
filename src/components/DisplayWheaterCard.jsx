import React from 'react'

const DisplayWheatherCard = (props) => {
  const { date, celcius,day } = props
  return (

    <div>

      <h1>{day}</h1>
      <p className='dayDate'>{date}</p>
      <div className='date'>{celcius}</div>
      <span className='celcius'>cº</span>
     
    </div>
  )
}
export default DisplayWheatherCard;
