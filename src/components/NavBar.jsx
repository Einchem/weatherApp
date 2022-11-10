import React from 'react'
import { Link } from 'react-router-dom'
import '../weatherCss/navbar.css'


export default function NavBar() {
  return (
    <div className="topnav">

      <Link className='active' to="/">Home</Link>
      <Link className='fav' to="/Favorite">Favorites</Link>

    </div>


  )
}

