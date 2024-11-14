
import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img from "@/public/assets/img2.png"
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Card from './Card';


const card1 = { title: 'Card 1', description: 'This is the description for Card 1.', imageUrl: img };
const card2 =   { title: 'Card 2', description: 'This is the description for Card 2.', imageUrl: img };
const card3 =   { title: 'Card 3', description: 'This is the description for Card 3.', imageUrl: img };


function Carousel() {
  return (
    <div>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 10,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >

         <SwiperSlide >
                <Card  data={card1}/>
              </SwiperSlide>
         <SwiperSlide >
                <Card  data={card2}/>
              </SwiperSlide>
         <SwiperSlide >
                <Card  data={card3}/>
              </SwiperSlide>
      
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon style={{color:"white"}} name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}

export default Carousel