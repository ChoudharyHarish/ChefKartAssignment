import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import MenuItem from "../components/MenuItem";


const Menu = ({data}) => {

  console.log(data);
  return (
    <div className='flex flex-col  overflow-scroll example ht w-full'>
    
    {data.map((details)=>  <MenuItem key={details.id} {...details} />)}
  
</div>
    
  )
}

export default Menu