
import React, { useState, useContext, useEffect } from "react";
import Heart from "react-heart"
import CardContext from "../context/CardContext"




const FavoriteBtn = (props) => {
  const { data } = props
  const [active, setActive] = useState(false)
  const { addToCard } = useContext(CardContext)

  useEffect(() => {
    setActive(false)
  }, [data])

  const handleClick = () => {
    setActive(!active)
    addToCard(data)
  }


  return (
    <div className={'favBtn'}>
      <div className="add">Add to favorite</div>
      <Heart className={'hearticon'} isActive={active} onClick={handleClick} >
      </Heart>
    </div>
  )

}
export default FavoriteBtn;
