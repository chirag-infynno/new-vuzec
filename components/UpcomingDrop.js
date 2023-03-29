import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import Story from '../assets/images/story.png'

const UpcomingDrop = ({ home }) => {
  return (
    <div
      className={classNames('w-fit flex flex-col', home ? 'gap-2' : 'gap-8')}
    >
      <p className="font-normal text-xl text-white">UPCOMING DROP</p>
      <div className="md:bg-upcomingDrops md:drop-shadow-dropsUpcomig md:rounded-[29px] md:pl-6 md:py-4 flex w-full gap-5 flex-col sm:flex-row max-h-full h-full max-w-[600px]  lg:max-w-[520px] overflow-hidden xl:max-w-[600px] xl:max-h-[321px]">
        <div className="hidden relative sm:block h-[281px] w-[550px] !rounded-[13px] overflow-hidden">
          <Image
            src={Story}
            alt="NFT Musicians"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative block sm:hidden overflow-hidden !rounded-[13px] max-w-sm">
          <Image src={Story} alt="NFT Musicians" />
        </div>
        <div className="w-full flex flex-col gap-3 sm:gap-0 justify-between">
          <div className="flex flex-col gap-3 sm:gap-1 overflow-hidden">
            <h2 className="font-bold text-2xl xl:text-3xl text-white">
              The Story
            </h2>
            <p className="font-normal text-xl xl:text-2xl text-white">Vuzec</p>
            <div className="flex gap-3  flex-wrap  ">
              <div className="bg-[#F0F0F0] w-fit rounded-[99px] py-1 px-4 flex justify-center items-center">
                <p className="font-medium text-base text-[#1D1D1D] opacity-[0.66]">
                  Rap
                </p>
              </div>
              <div className="bg-[#F0F0F0] w-fit rounded-[99px] py-1 px-4 flex justify-center items-center">
                <p className="font-medium text-base text-[#1D1D1D] opacity-[0.66] whitespace-nowrap">
                  Hip Hop
                </p>
              </div>
              <div className="bg-[#F0F0F0] w-fit rounded-[99px] py-1 px-4 flex justify-center items-center">
                <p className="font-medium text-base text-[#1D1D1D] opacity-[0.66]">
                  EP
                </p>
              </div>
              <div className="bg-[#F0F0F0] w-fit rounded-[99px] py-1 px-4 flex justify-center items-center">
                <p className="font-medium text-base text-[#1D1D1D] opacity-[0.66]">
                  2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UpcomingDrop
