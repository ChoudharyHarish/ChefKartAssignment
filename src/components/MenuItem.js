import React from 'react';
// import hamburger from "../images/Group 377.svg";
import dot from "../images/Group 359.svg";
import star from "../images/star.svg";
import img from  "../images/Group 1541.svg";
// import bg from "../images/Mask Group 19.png";
import { Link } from 'react-router-dom';


import Equipment from './Equipment';



const MenuItem = ({name,image,id,description,rating,equipments
}) => {
  return (
    <div className="flex justify-between py-4" style={{borderBottom:"0.5px solid grey"}}>
    
    <div className="left flex flex-col  w-1/2">
    <div className="flex flex-start gap-2 items-center">
        <h1>{name}</h1>

        <div>
            <img src={dot} alt="" />
        </div>

        <div className="bg-green-600 flex items-center justify-center py-0.5 px-1">
        <p className="text-white" style={{fontSize:'0.5rem'}}>{rating}</p>
        <img src={star} alt="" className="h-2 w-2" />
        </div>

     
    </div>

    <div className="flex gap-2">
        {equipments?.map((name,index) => <Equipment key={index} name={name}/>)}       
    
        <div className="" style={{border: "0.5px solid #D6D6D6CE"}} ></div>

        <div className=''>
            <p className="p-text font-extrabold">Ingredients</p>
            <button className="text-[#FF8800] flex items-center gap-1 font-bold small-text">
            <Link to={`/dish/${id}`}>View List</Link>
            <img src={img} alt="" className='h-2 w-2' style={{transform:'rotate(-180deg)'}} />
            </button>
        </div>


    </div>


    <p className="small-text mt-1 text-gray-600">{description}</p>


    </div>

    <div className="right relative flex flex-col justify-center items-center h-20 w-32">

        <img src={image} alt="" className="h-full w-full object-cover rounded-lg" />

        <button className="
            absolute 
            text-xs
             bg-neutral-50 px-4 py-0.5 text-orange-600 border-orange-600

        " style={{border:'1px solid',bottom:"-0.6rem"}} >Add</button>
    </div>
    </div>
  )
}

export default MenuItem;