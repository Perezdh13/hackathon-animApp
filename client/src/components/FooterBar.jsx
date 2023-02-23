import React from 'react'

function FooterBar() {
  return (
    <div className = "Container-fluid">
      <img src={require('../img/Dog Heart.png')} alt="" />
      <img src={require('../img/Pet Commands Train.png')} alt="" />
      <img src={require('../img/Turtle.png')} alt="" />
      <img className ="logo" src={require('../img/instagram.png')} alt="" />
      <img className ="logo" src={require('../img/facebook.png')} alt="" />
      <img className ="logo" src={require('../img/twitter.png')} alt="" />
    </div>
  )
}

export default FooterBar