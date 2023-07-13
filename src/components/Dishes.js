import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Dish from './Dish';

import bg from "../images/Mask Group 19.png";


const Dishes = ({data}) => {
  console.log(data);
  return (
    <div className="mt-4">
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      scrollbar={{draggable:true}}
    >

    {data?.map(({name,image,id}) => {
      return <SwiperSlide key={id} ><Dish id={id} title={name} bg = {image} showHighlight={`${id === 3 ? 'false':'true'}`}  /></SwiperSlide>
    })}

    {/* Added some more dummmy data to check the functioning of swiper */}

    <SwiperSlide><Dish id  ='1' title="Panner" bg = {bg} showHighlight='true'/></SwiperSlide>
    <SwiperSlide><Dish id  ='2' title="Panner" bg = {bg} showHighlight='true'/></SwiperSlide>
    <SwiperSlide><Dish id  ='3' title="Panner" bg = {bg} showHighlight='true'/></SwiperSlide>
  
    </Swiper>
</div>
  )
}

export default Dishes;