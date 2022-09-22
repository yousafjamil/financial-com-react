import React from 'react'
import { NavLink, Route, Routes, Outlet } from 'react-router-dom'
import Allusers from './Allusers'
import Singleuser from './Singleuser'

const Sidebar = () => {

  return (
    <div className='container-fluid '>

      <div className='row'>
        <div className='col-lg-2 bg-dark'>

          <ul >
            <li className='mb-3 text-uppercase'>
              < NavLink to='allusers' >All Users</NavLink>
            </li>
            <li>
              < NavLink to='singleuser' >users Messages</NavLink>
            </li>
          </ul>
        </div>

        <div className='col-lg-8 offset-1'>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default Sidebar