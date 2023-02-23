import React from 'react'
import NavBar from './NavBar'
import Logo from '../img/Logo.png'
import '../css/Header.css'
import { Link } from 'react-router-dom';


function HeaderBar() {

  return (
    <div className='headerContainer d-flex justify-content-between'>
      <Link to="/">
        <img className='logo ' src={Logo} alt="logo animalAPP" />
      </Link>
      <NavBar />
    </div>
  )
}


export default HeaderBar