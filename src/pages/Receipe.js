import React,{useEffect,useState} from "react";
import { useParams } from "react-router";

import Header from "../components/Header";
import Ingredients from "../components/Ingredients";
import Appliance from "../components/Appliance";

import star from "../images/star.svg";
import time from "../images/clock.svg";
import bg from "../images/pngtree-herbal-ingredients-transparent-image-png-image_3206949-removebg-preview.png";
import bg1 from "../images/Mask Group 17@2x.png";

const Receipe = () => {
  const { id } = useParams();
 const [data,setData]= useState(null);
 const [vegetables,setVegetables] = useState([]);
 const [spices,setspices] = useState([]);
 const [appliances,setappliances] = useState([]);

  const url = `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${id}`;

  useEffect(() => {
    const getData = async(url)=>{
        const response  = await fetch(url);
        const data = await response.json();
        setData(data);
        setVegetables(data?.ingredients.vegetables);
        setappliances(data?.ingredients.appliances);
        setspices(data?.ingredients.spices); 
      }
    getData(url);
},[url])

  return (
    <div>
      <Header />

      <div className="flex relative px-6 h-[192px] borderBanner" >
        <div className="flex flex-col gap-3  w-3/4 justify-center" >
          <div className="flex gap-3 items-end">
            <h1 className="font-bold text-[23px] leading-none">{data?.name}</h1>
            <div className="bg-green-600 flex items-center justify-center  px-1.5 rounded-sm h-4 ">
              <p className="text-white" style={{ fontSize: "0.5rem" }}>
                {4.2}
              </p>
              <img src={star} alt="" className="h-2 w-2" />
            </div>
          </div>
          <p className="text-gray-500 text-xs" >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            quibusdam ipsum? Commodi obcaecati pariatur alias atque
            exercitationem!
          </p>

            <div className="flex gap-3">
                <img src={time} alt="" />
                <p className="text-sm font-bold" >{data?.timeToPrepare}</p>
            </div>

        </div>

        <div>
            <div className="circle rounded-full "></div>
            <img src={bg1} alt="" className="image" />
            <img src={bg} alt=""  className="imagefront"/>
        </div>




      </div>

    <div className="p-6">

        <div className = 'flex flex-col' >
        <h1 className="font-bold">Ingredients</h1>
        <p className="text-gray-500 small-text">For 2 people</p>
        </div>

        <div className="borderIngredients mt-4 flex flex-col" >
              
                <Ingredients title = 'Vegetables' data = {vegetables} />
                <Ingredients title = 'Spices'  data = {spices}/>
        </div>

        <div className="mt-4">
            <h1 className="font-bold">Appliances</h1>
            <div className="flex gap-4 mt-4">
              {appliances.map((appliance) => <Appliance key={appliance.name}  {...appliance}/>)}
            </div>

        </div>


    </div>


    </div>
  );
};

export default Receipe;
