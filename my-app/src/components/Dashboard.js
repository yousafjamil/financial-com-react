import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
// import Allusers from './Allusers'

import Sidebar from './Sidebar'
// import Singleuser from './Singleuser'


const Dashboard = () => {
 
  return (
    <div className='container-fluid '>
      <div className='row '>
        <h1 className='text-white'>Admin panel</h1>
        <div className='col-lg-12 '>
          <Sidebar  />
    
        </div>
        <div className='col-lg-6'>
       
        </div>


      </div>
    </div>
  )
}

export default Dashboard
