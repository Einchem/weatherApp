import React, { useState, useRef, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import searchCity from "../Actions/searchCity";
import CardContext from '../context/CardContext';
import '../weatherCss/searchBar.css';

function SearchBar({  SelectedCity }) {
  const [filteredData, SetFilteredData] = useState([]);
  const [autoSearch, SetAutoSearch] = useState([])
  const clickedCity = useRef('')
  const { currentCitySetter } = useContext(CardContext)

  const handleFilter = (event) => {
    const searchWord = event.currentTarget.value

    if (searchWord.length > 2) {
      async function autoCompleteRequest() {
        const response = await searchCity(searchWord) 
        if (!response.ok) return

        const data = await response.json()


        SetAutoSearch(data)
        data.filter((value) => {
          return value.LocalizedName.toLowerCase().includes(searchWord.toLowerCase())
        })
        SetFilteredData(data)

      }
      autoCompleteRequest()

    }
    else { SetFilteredData([])}
    
    




  }

  const testFunc = (event) => {
    SetFilteredData([])
    SelectedCity(event) 
    clickedCity.current.value = event.currentTarget.innerText
    currentCitySetter(clickedCity.current.value)
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type='text' placeholder={'Enter city ...'} ref={clickedCity} onChange={handleFilter}></input>
        <div className='searchIcon'>
          <SearchIcon></SearchIcon>
        </div>

      </div>
      {!!filteredData.length && (
        <div className='dataResult' >
          {filteredData.slice(0, 10).map((value, key) => {
            return <div className='dataItem' key={key += 1}>
              <button className='btn' onClick={testFunc} id={value.Key}>{value.LocalizedName}</button>

            </div>
          })}


        </div>
      )}



    </div>


  )
}
export default SearchBar;



