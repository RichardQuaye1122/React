import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-green-500 space-x-5 flex'>
        <NavLink to="/"><h3>Home</h3></NavLink>
        <NavLink  to="/About"><h3>About</h3></NavLink >
        <NavLink  to="/Contact"><h3>Details</h3></NavLink >
        <NavLink  to="/Items"><h3>Items</h3></NavLink >

    </div>
  )
}

export default NavBar