import React from 'react';


const Dish = ({bg,title,showHighlight}) => {
  return (
    <div className={`rounded-full p-0.5 flex justify-center ${showHighlight==='true' && 'dishHighlight'}`}>
    <div className="rounded-full dish relative h-16 w-16 flex justify-center items-center">
             <img src={bg} alt="" className="h-16 w-16 rounded-full absolute object-cover" />
             <p className="text-white z-10 text-xs text-center">{title}</p>
             <div className="bg-black/40 h-full w-full absolute top-0 rounded-full left-0"></div>
    </div>
    </div>

  )
}

export default Dish