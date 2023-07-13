import React from "react";
import arrow from "../images/Path 786.svg";

const regExp = /[a-zA-Z]/g;


const Item = ({name,quantity}) => {
  return (
    <div className="flex justify-between">
    <p className="text-xs">{name}</p>
    <span className="text-xs">{quantity}{`${!regExp.test(quantity) ? ' pc' : ''}`}</span>
  </div>
  )
}

const Ingredients = ({title,data}) => {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <div className="flex gap-3">
        <h2 className="font-bold text-sm">{title} {`0${data.length}`}</h2>
        <img src={arrow} alt="" />
      </div>

      <div className="flex flex-col gap-2">
        {data.map((item) => <Item key={item.name} {...item} />  )}
      
      </div>
    </div>
  );
};

export default Ingredients;
