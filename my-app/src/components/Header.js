import React from 'react'
import { FaWhatsapp as FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header-container container-fluid'>
 <h1 className='text-white  text-right  mr-5'>  <a href='https://wa.me/2349039500987' target={'_blank'} ><FaWhatsapp  style={{backgroundColor:"green",height:"60px" ,width:"40px",borderRadius:'12px' }} /></a>  </h1>
{/* +2349039500987 */}
        <h1 className=' h-header '>Welcome to United financial partnership</h1>

    </div>
  )
}

export default Header