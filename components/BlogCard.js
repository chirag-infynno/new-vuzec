import Image from 'next/image'
import React from 'react'
import GraceCard from '../assets/images/grace-bg.png'

export const BlogCard = ({ title, discription, date }) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer rounded-lg shadow-lg hover:shadow-xl border-white border-[2px] group">
      <div className="rounded-md group-hover:opacity-25">
        <Image src={GraceCard} alt="blog image" className="rounded-t-md" />
      </div>
      <div className="min-h-[230px] p-3 flex flex-col justify-between">
        <div className="flex gap-2 flex-col">
          <h1 className="overflow-ellipsis overflow-hidden text-md multiline-ellipsis-2 text-black font-bold text-xl hover:text-[#B71544]">
            {title}
          </h1>

          <span className="multiline-ellipsis-4 text-sm">{discription}</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center text-[#B71544]">
            Read morea {'>'}
          </span>
          <span className="">{date} </span>
        </div>
      </div>
    </div>
  )
}
