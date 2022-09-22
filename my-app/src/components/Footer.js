import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' container'>
          <hr className='text-white bg-white footer p-5'/>
        <div className='row'>
            <div className='col-lg-4 f-first-col'>
                <ul>
                    <h3 className='text-white'>OUR COMPANY</h3>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/about' >About US</Link>
                    </li>
                    <li>
                        <Link to='/contact' >Contact US</Link>
                    </li>
                    <li>
                        <Link to='/services' >Our Services</Link>
                    </li>
                </ul>
            </div>
           
            <div className='col-lg-4 f-first-col'>
                <ul>
                    <h3 className='text-white'>HELP & SUPPORT</h3>
                    <li>
                        <Link to='/' >FAQ</Link>
                    </li>
                    <li>
                        <Link to='/about' >TERMS OF SERVICES</Link>
                    </li>
                    <li>
                        <Link to='/register' >REGISTER</Link>
                    </li>
                    <li>
                        <Link to='/login' >LOGIN</Link>
                    </li>
                </ul>
            </div>
           

            <div className='col-lg-4 f-first-col'>
                <ul>
                    <h3 className='text-white'>CONTACT US</h3>
                    <li>
                    <Link to='/register' >+2349039500987</Link>

                    </li>
                    <li>
                        <Link to='/about' >Email Us: williamsdave09987@gmail.com</Link>
                    </li>
                    <li>
                    <Link to='/' >UNITEDFINANCIALPARTNERSHIP.COM</Link>

                    </li>
                   
                </ul>
            </div>
            
        </div>
        <hr className='text-white bg-white'/>
        <h5 className='text-white text-center'>© 2021 UNITEDFINANCIALPARTNERSHIP.COM</h5>
       </div>
  )
}

export default Footer