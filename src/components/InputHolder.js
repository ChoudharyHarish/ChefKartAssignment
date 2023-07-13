import React from 'react'

const InputHolder = ({img,content}) => {
  return (
    <div className="flex justify-center items-center">
    <img src={img} alt="" className="h-5 w-5" />
    <p className="ml-3 text-xs font-bold">{content}</p>
</div>
  )
}

export default InputHolder