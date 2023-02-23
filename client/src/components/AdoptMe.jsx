import Alerta from '../components/Alert'
import AdoptMeMsg from '../components/AdoptMeMsg'
import React from 'react'
import '../css/footer.css'



function AdoptMe() {
  return (
    <div className='container alert-cont'>
        <br />
     <Alerta/> <br />
     <AdoptMeMsg/> 
    </div>
  )
}

export default AdoptMe