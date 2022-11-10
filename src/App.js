import React, { useState, useEffect, useRef, useContext } from "react";
import getFiveDayForecast from "./Actions/getFiveDayForecast";
import SearchBar from "./components/Searchbar";
import DisplayWheatherCard from "./components/DisplayWheaterCard";
import './weatherCss/displayWeather.css'
import temperatureConverter from "./Actions/temperatureConverter";
import NavBar from "./components/NavBar";
import AnimationDiv from "./components/AnimationDiv";
import moment from "moment";
import FavoriteBtn from "./components/FavoriteBtn";
import dayConverter from "./Actions/dayConverter";
import CardContext from './context/CardContext';
import './weatherCss/App.css'



function App() {

  const [fiveDays, setFiveDays] = useState([])
  const [clickedBtn, setClickedBtn] = useState('')
  const cityName = useRef('Tel aviv')
  const { currentCitySetter, cityId, ClickedCityCard, currentCity } = useContext(CardContext)


  useEffect(() => { 
    fiveDaysForcastRequest(cityId)
  }, [])



  const handleClick = event => {
    cityName.current = event.currentTarget.innerText
    currentCitySetter(cityName.current)
    const currentCityId = event.currentTarget.id.toString()  
    ClickedCityCard(currentCityId) 
    fiveDaysForcastRequest(currentCityId)

  }

  async function fiveDaysForcastRequest(cityID) { 
    try { 
      const response = await getFiveDayForecast(cityID)
      if (!response.ok) return
      const data = await response.json()
      setFiveDays(data.DailyForecasts)
      setClickedBtn(cityID)
      
    } catch (error) {
      const err = await error.json()
      console.warn(error)
    }
  }




  return (
    <>
      
      <NavBar> </NavBar>
      <div className="searchBtn">
       
        <SearchBar placeholder='Enter city...' SelectedCity={handleClick}
        ></SearchBar>

      </div>
      <div>
      <h2 className='cityTitle'>{currentCity}</h2>
        <FavoriteBtn data={fiveDays} city={cityName.current}></FavoriteBtn>
      </div>
      <AnimationDiv></AnimationDiv>

      <div className="cardsContainer">

        {fiveDays?.map((item, index) => (
          <div className="card" key={index}>
            <DisplayWheatherCard
              day={dayConverter(item.Date)}

              celcius={`${temperatureConverter(item.Temperature.Maximum.Value)}`}
              date={moment(item.Date).utc().format('DD-MM-YYYY')} 
              className='display'

            />
          </div>
        ))}
      </div>

    </>

  );
}

export default App;
