import React from 'react'
import NavBar from './NavBar'
import Logo from '../img/Logo.png'
import '../css/Header.css'
function HeaderBar() {
  return (
    <div className='headerContainer' 
   
    >
      <div className="container">
        <img src={Logo} alt="" style={{float: 'left', maxWidth: '100%'}} />
        <NavBar />
      </div>
    </div>
  )
}


export default HeaderBar