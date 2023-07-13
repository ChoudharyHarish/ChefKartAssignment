import React from 'react';
import bg from "../images/Mask Group 19.png";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';


import MenuItem from "../components/MenuItem";


const Menu = ({data}) => {


  const equipments = ['refreigerator','microwave'];
  return (
    <div className='flex flex-col  overflow-scroll example ht w-full'>
    
    {data.map((details)=>  <MenuItem key={details.id} {...details} />)}

    {/* Added some more dummmy data to check the functioning of swiper */}


    <MenuItem name = "Panner Butter Masala" image={bg} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." rating="4.2" equipments={equipments}/>
    <MenuItem name = "Panner Butter Masala" image={bg} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." rating="4.2" equipments={equipments}/>
    <MenuItem name = "Panner Butter Masala" image={bg} description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." rating="4.2" equipments={equipments}/>
  
</div>
    
  )
}

export default Menu