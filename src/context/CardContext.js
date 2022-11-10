import { useState, createContext } from 'react'
const CardContext = createContext();


export function CardProvider({ children }) {
  const [cities, setCities] = useState([])
  const [currentCity, setCurrentCity] = useState('Tel aviv')
  const [cityId, SetCityId] = useState("215854")

  const currentCitySetter = (currentcityname) => {
    setCurrentCity(currentcityname)

  }


  const addToCard = (cityObj) => {

    const city = Object.values(cityObj)
    const cityData = city[0]
    const favoriteCity = { Day: cityData.Date, Celcius: cityData.Temperature.Maximum.Value, City: currentCity }
    const isFound = cities.some(element => element.City === favoriteCity.City)
    if (!isFound) {
      cities.push(favoriteCity)
      setCities(cities)
    }

  }
  const ClickedCityCard = (clickedCity) => {
    SetCityId(clickedCity)
  }


  return (
    <CardContext.Provider value={{ cities, addToCard, currentCity, currentCitySetter, ClickedCityCard, cityId }}>{children}</CardContext.Provider>
  )



}
export default CardContext;
