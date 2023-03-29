import { Twitter } from '../assets/images/logo'
import { Linkedin } from '../assets/images/logo/Linkedin'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export const Card = ({ userImage, userName, userDetails, imagealt, work }) => {
  return (
    <div className="w-full lg:max-w-[255px] sm:max-w-[210px] max-w-[255px] flex flex-col gap-1">
      <div className="overflow-hidden rounded-[20px] transition-all ease-in-out duration-200">
        <div className="cursor-pointer hover:scale-[1.2] transition-all ease-in-out duration-200 relative lg:h-[255px] lg:w-[255px] sm:h-[210px] sm:w-[210px] h-[255px] w-[255px]">
          <Image className="" src={userImage} alt={imagealt} fill />
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-1 items-center">
        <Link href="https://www.linkedin.com/company/vuzec" target="_blank">
          <div className="relative cursor-pointe">
            <Linkedin className="text-[#bfbfbf] cursor-pointer hover:text-[#B71544]" />
          </div>
        </Link>
        <Link href="https://twitter.com/vuzecmx" target="_blank">
          <div className="relative cursor-pointer">
            <Twitter className=" cursor-pointer text-[#bfbfbf] hover:text-[#B71544]" />
          </div>
        </Link>
      </div>
      <div>
        <div className="lg:w-64 sm:w-[200px] w-64">
          <h1 className="font-bold text-[25px] leading-8 text-[#B71544]">
            {userName}
          </h1>
          <p className="text-[20px] leading-6 font-normal text-[#000000]">
            {userDetails}
          </p>
          {work && (
            <p className="text-[20px] leading-6 font-normal text-[#000000]">
              {work}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
