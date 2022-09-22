import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";


// import "swiper/swiper.min.css";
const Homeheader = () => {
  // install Swiper modules
  SwiperCore.use([Autoplay, Pagination, Navigation]);
 
  return (
<>

 <div  >
 <h1 className=' text-center text-white'>SECURE AND EASY WAY TO  Participate IN  <b className='text-primary'>United Financial Partnership</b></h1>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='mySwiper'
      >
 
        <SwiperSlide>
          <img src={'images/headerpic2.jpg'} alt='' className='h-img-slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'images/headerpic3.jpg'} alt='' className='h-img-slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'images/meeting1.jpg'} alt='' className='h-img-slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'images/meeting2.jpg'} alt='' className='h-img-slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'images/meeting3.jpg'} alt='' className='h-img-slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'images/meeting4.jpg'} alt='' className='h-img-slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={'images/meeting5.jpg'} alt=''  className='h-img-slide'/>
        </SwiperSlide>

      </Swiper>

    </div> 
{/* <div className='container-fluid '>
   
<div className='row no-gutters mx-0 '>
      <div className='col-lg-12'>
    

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="images/meeting2.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-25" src="images/meeting2.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-25" src="images/meeting3.jpg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


      </div>
     </div>
</div> */}


</>




    
  )
}

export default Homeheader


