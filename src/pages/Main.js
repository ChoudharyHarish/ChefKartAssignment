import React,{useState,useEffect} from "react";

 
import calendar from "../images/Select_date-01.svg";
import time from "../images/Set_time-01.svg";
import downArrow from "../images/Path 786.svg";
import Hamburger from "../images/Group 377.svg"

import "./Main.css";

import Header from "../components/Header";
import InputHolder from "../components/InputHolder";
import Category from "../components/Category";
import Dishes from "../components/Dishes";
import Menu from "../components/Menu";
import {ArrowRightOutlined } from "@mui/icons-material";


const Main = () => {

    const [popularDishes,setPopularDishes] = useState([]);
    const [dishes,setDishes] = useState([]);


    useEffect(() => {
            const getData = async(url)=>{
                const response  = await fetch(url);
                const data = await response.json();
                const {dishes,popularDishes} = data;
                setDishes(dishes);
                setPopularDishes(popularDishes)
;            }
            getData("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/");
    },[])


    return (
    <div>
        <Header title = "Select Dishes"/>

        <div className="relative flex flex-col justify-center items-center h-24">

            <div className="bg-black h-12 absolute top-0 w-full z-[-1]"></div>

            <div className="flex gap-3 justify-between bg-white px-3 py-5 rounded-2xl shadow-lg">
                    <InputHolder img = {calendar} content = '21 May 2021' />
                    <div className="vertical mx-0"></div>
                    <InputHolder img={time} content="10:30 Pm- 12:30 Pm"/>
            </div>
        </div>

        <Category/>


        <div className="mt-4 pl-6" >
            <h1 className="font-bold">Popular Dishes</h1>
            <Dishes data = {popularDishes}/>
        </div>

        <hr className="mt-3 " />

        <div className="px-6 mt-4 flex flex-col gap-2">

        <div className="flex justify-between items-center">

        <div className="flex gap-4">
           <h1 className="font-bold">Recommended</h1>
           <img src={downArrow} alt="" />
            
        </div>

        <button className="bg-black text-white py-2 px-6 rounded-xl text-xs">Menu</button>
        
        </div>

        <div className="relative flex flex-col items-center">
            <Menu data = {dishes}/>  
            <div className="flex justify-between absolute bg-black text-white p-3 w-4/5 mx-auto bottom-10">
                    <div className="flex gap-3">
                    <img src={Hamburger} alt="" />
                    <p>3 food items selected</p>
                    </div>
                    <ArrowRightOutlined/>
            </div>
        </div>
       
        </div>
    </div>
    )
}
export default Main;
