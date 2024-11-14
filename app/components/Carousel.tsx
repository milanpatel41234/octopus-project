// import React, { useState } from "react";
// import Card from "./Card";
// import img from "@/public/assets/img.png";

// const cardData = [
//   { title: 'Card 1', description: 'This is the description for Card 1.', imageUrl: img },
//   { title: 'Card 2', description: 'This is the description for Card 2.', imageUrl: img },
//   { title: 'Card 3', description: 'This is the description for Card 3.', imageUrl: img },
// ];

// function Carousel() {
//   // Set initial card index to 0 (first card)
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);

//   const handlePrevious = () => {
//     // Cycle to last card if we are on the first one
//     setCurrentCardIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     // Cycle to first card if we are on the last one
//     setCurrentCardIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-12">
//       <div className="col-span-1 flex justify-center items-center">
//         <button onClick={handlePrevious}>
//           <img
//             src="/assets/vector.png"
//             alt="Previous"
//             className="w-[11.49px] h-[21.36px] "
//           />
//         </button>
//       </div>

//       <div className="col-span-10 flex justify-center items-center relative">
//         <Card currClass="left" data={cardData[currentCardIndex=== 0 ? cardData.length - 1 : currentCardIndex -1]} />
//         <Card currClass="middle" data={cardData[currentCardIndex]} />
//         <Card currClass="right" data={cardData[currentCardIndex === cardData.length - 1 ? 0 : currentCardIndex + 1]} />
//       </div>

//       <div className="col-span-1 flex justify-center items-center">
//         <button onClick={handleNext}>
//           <img
//             src="/assets/vector.png"
//             alt="Next"
//             className="w-[11.49px] h-[21.36px] rotate-[-180deg]"
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Carousel;


import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img3 from"@/public/assets/img1.png"
import img from "@/public/assets/img2.png"
import img2 from  "@/public/assets/img3.png"
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