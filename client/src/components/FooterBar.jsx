import React from 'react'
import { Link } from 'react-router-dom';

function FooterBar() {
  return (
    <div className="Container-fluid ">
      <div className='container-fluid-contact'>
        <Link to="/contact">
          <img className='logo' src={require('../img/Dog Heart.png')} alt="" />
        </Link>
        <p>Contacto</p>
      </div>
      <div className='container-fluid-aboutUs'>
        <Link to="/aboutUs">
          <img className='logo' src={require('../img/Pet Commands Train.png')} alt="" />
        </Link>
        <p>Sobre nosotros</p>
      </div>
      <div className='container-fluid-report'>
        <Link to="/report">
          <img className='logo' src={require('../img/Turtle.png')} alt="" />
        </Link>
        <p>Notificar Abuso</p>
      </div>
    </div>
  )
}

export default FooterBar