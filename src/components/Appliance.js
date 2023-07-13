import React from 'react';
import referigerator from "../images/Mask Group 20.png";


const Appliance = ({name,image}) => {
  return (
    <div className="flex flex-col justify-center items-center p-2" style={{backgroundColor:'#F5F5F5'}}>
                <img src={referigerator} alt="" />
                <p className="small-text" >{name}</p>
    </div>
  )
}

export default Appliance