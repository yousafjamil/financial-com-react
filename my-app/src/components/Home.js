import React from 'react'
import About from './About'
import Header from './Header'
import Homeheader from './Homeheader'
import Ourteam from './Ourteam'
import {BsWhatsapp} from 'react-icons'
const Home = () => {


  return (
    <div className=''>
     
     <Header />
     <hr/>
      <Homeheader  />
      <hr/>
     <Ourteam  />
    <About />


    </div>
  )
}

export default Home