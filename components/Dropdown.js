// import Downarrow from "@/assets/images/logo/Downarrow";
import { Uparrow } from '../assets/images/logo/Uparrow'

import React, { useState } from 'react'

export const Dropdown = ({ open, quastion, textColor, border, answer }) => {
  const [isopen, setisopen] = useState(open)

  return (
    <div className={`border-t-[2px] border-${border} py-5 relative`}>
      <div
        onClick={() => setisopen(!isopen)}
        className="flex cursor-pointer items-start md:items-center flex-col pr-[30px] md:pr-0"
      >
        <h1 className="text-left md:text-center text-[#B71544] text-[25px] leading-8 font-bold px-2 sm:px-0">
          {quastion}
        </h1>
        <div
          className={`${
            isopen ? 'rotate-0 right-0 bottom-3' : 'rotate-180 right-0 top-7'
          } absolute cursor-pointer transition-all ease-in-out duration-1000`}
          onClick={() => setisopen(!isopen)}
        >
          <Uparrow />
        </div>
        <div
          className={`${
            isopen ? ' max-h-96 mt-4' : 'max-h-0'
          }  overflow-hidden max-w-5xl text-left sm:text-center px-2 transition-all ease-in-out duration-500 flex `}
        >
          <span
            className={`sm:text-[20px] text-[18px] sm:leading-7 leading-6 text-${textColor}`}
          >
            {answer}
          </span>
        </div>
      </div>
    </div>
  )
}
