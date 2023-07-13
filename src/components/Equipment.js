import React from 'react';
import refrigerator from "../images/Group 508.svg";


const Equipment = ({name}) => {
  return (
    <div className="flex flex-col justify-center items-center">
    <img src={refrigerator} alt="" />
    <p style={{fontSize:'0.4rem'}}>{name}</p>
</div>
  )
}

export default Equipment