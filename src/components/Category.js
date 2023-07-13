import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Category = () => {
  return (
    <div className="pl-6">
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      scrollbar={{draggable:true}}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><li className="slide rounded-3xl active text-xs">Italian</li></SwiperSlide>
      <SwiperSlide><li className="slide rounded-3xl text-xs">Indian</li></SwiperSlide>
      <SwiperSlide><li className="slide rounded-3xl text-xs">Indian</li></SwiperSlide>
      <SwiperSlide><li className="slide rounded-3xl text-xs">Indian</li></SwiperSlide>
      <SwiperSlide><li className="slide rounded-3xl text-xs">Indian</li></SwiperSlide>
    </Swiper>
</div>
  )
}

export default Category