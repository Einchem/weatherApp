import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar';
import DisplayWheatherCard from "../components/DisplayWheaterCard";
import temperatureConverter from '../Actions/temperatureConverter';
import dayConverter from '../Actions/dayConverter';
import CardContext from '../context/CardContext';


function Favorite() {
  const { cities } = useContext(CardContext) //duplicate
  const { currentCitySetter } = useContext(CardContext)

  const navigate = useNavigate();

  const handleClick = (event) => {
    const city = event.currentTarget.id
    currentCitySetter(city)
    let path = `/`;
    navigate(path);

  }
  return (
    <>
      <NavBar></NavBar>
      <div>
        <h1>Welcome to your Favorites cities weather</h1>

      </div>
      <div className="move">

        {cities?.map((item, index) => (
          <button className="favcard" key={index} id={item.City} onClick={handleClick}>

            <DisplayWheatherCard
              day={dayConverter(item.Day)}

              celcius={`${temperatureConverter(item.Celcius)}`}
              date={item.City}
              className='display'

            />


          </button>
        ))}
      </div>
      
    </>
  )
}
export default Favorite;
