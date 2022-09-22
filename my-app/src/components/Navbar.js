import React from 'react';

// import logo from '../images/f-p-logo.png'

import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <>
      <div className=''>
        <nav className="navbar navbar-expand-lg    navbar-dark">
          <Link className="navbar-brand" to="/">
            {/* <img src={logo} alt='' className='logo' /> */}
            United financial partnership

          </Link>
          <button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto  py-4">
              <li className="nav-item active">
                <Link className="nav-link" to="/" data-toggle="collapse" data-target="#navbarSupportedContent">HOME</Link>
              </li>
              
              

              <li className="nav-item active">
                <Link className="nav-link" to="/contact" data-toggle="collapse" data-target="#navbarSupportedContent">Contat Us</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/about" data-toggle="collapse" data-target="#navbarSupportedContent">About US</Link>
              </li>
              
              <li className="nav-item active">
                <Link className="nav-link" to="/services" data-toggle="collapse" data-target="#navbarSupportedContent">Our Services</Link>
              </li>
              <li className="nav-item active register ">
                <Link className="nav-link  " to="/register" data-toggle="collapse" data-target="#navbarSupportedContent">REGISTER</Link>
              </li>
              <li className="nav-item active   login ">
                <Link className="nav-link  " to="/login" data-toggle="collapse" data-target="#navbarSupportedContent">LOGIN</Link>
              </li>
           

            </ul>

          </div>
        </nav>
      </div>

    </>


  );
};

export default Navbar;






