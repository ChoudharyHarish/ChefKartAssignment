import React from 'react';
import img from  "../images/Group 1541.svg";
import { Link } from 'react-router-dom';


const Header = ({title}) => {
  return (
    <div className="header ">
    <Link to='/'>
    <img src={img} alt="" />
    </Link>
    <h1 className="h-title font-bold" >{title}</h1>
    </div>
  )
}

export default Header