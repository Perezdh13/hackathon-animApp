import React from 'react'
import NavBar from './NavBar'
import Logo from '../img/Logo.png'
import '../css/Header.css'
function HeaderBar() {
  return (
    <div className='headerContainer d-flex justify-content-between'>
      
        <img className='logo ' src={Logo} alt="logo animalAPP" />
        
        <NavBar/>
   
    </div>
  )
}


export default HeaderBar