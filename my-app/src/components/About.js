import React from 'react'

const About = () => {
   return (
      <div className='container-fluid mt-5'>
         <h6 className='text-white text-center mt-5 mb-4 h1 o-t-header'>About  <b className='text-primary'>US</b></h6>
         <p className='text-white mt-5 mb-4 text-center'>THE MOST SECURED AND TRUSTED WE ARE UNITED FINANCIAL PARTNERSHIP PLATFORM</p>

         <div className='row'>

            <div className='col-lg-5 offset-1 mb-5'>
               <img className=' finance-pic img-fluid' src='images/finance1.jpg' />
            </div>
            <div className='col-lg-5 offset-1 '>
               <img className=' finance-pic img-fluid' src='images/companypic.jpeg' />
            </div>
         </div>
         <div className='row mt-3'>
            <div className='col-lg-8 offset-lg-3'>
               <h2 className=' text-white text-primary'>WE ARE UNITED FINANCIAL PARTNERSHIP</h2>
               <article className=' about-p '>WE ARE UNITED FINANCIAL PARTNERSHIP
                  and we’re up front. of financial premier trading platform is designed for those who grasp the power of wealth , and want to be a part of the movement and development. With lightning-fast trades, dependable digital wallets and industry-leading security, we’ve created an exchange to lead this revolutionary business.</article>
            </div>
         </div>
      </div>
   )
}

export default About