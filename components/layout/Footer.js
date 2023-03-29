import { Discord, Insta, Twitter } from '../../assets/images/logo'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import VuzecWhite from '../../assets/images/logo/vuzec-white.svg'
import Button from '../Button'
import UpcomingDrop from '../UpcomingDrop'

const Footer = () => {
  const router = useRouter()
  return (
    <div className="bg-black w-full">
      <div
        className={classNames(
          'relative w-full px-8 py-12 sm:px-0 sm:py-0 h-auto sm:h-[708px] bg-presale bg-no-repeat bg-cover flex items-center',
          router.route.includes('/about') ||
            (router.route.includes('/blog') && 'hidden'),
        )}
      >
        <div className="w-full">
          <div className="w-full 2xl:max-w-[1500px] xl:max-w-[1200px] sm:max-w-lg lg:px-5 lg:max-w-none mx-auto flex justify-between items-center flex-wrap">
            <UpcomingDrop />
            <div className="w-full max-w-sm flex flex-col gap-4 mt-8">
              <p className="font-bold text-xl sm:text-[25px] text-white">
                what are you waiting for?
              </p>
              <Link href="https://app.vuzec.com/" target="_blank">
                <Button>JOIN THE PRESALE</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[6px] border-[#B71544]">
        <div className=" flex flex-col w-full max-w-[1440px] relative px-5 2xl:px-0 justify-center mx-auto py-5 md:pb-3">
          <div className="w-full xl:max-w-[1404px] xl:mx-auto lg:h-[260px] gap-8 lg:gap-2 flex lg:items-center justify-between flex-col lg:flex-row">
            <div className="relative w-full max-w-[130px] lg:max-w-none lg:w-auto cursor-pointer">
              <Link href="/">
                <Image src={VuzecWhite} alt="vujec-white" />
              </Link>
            </div>
            <ul className="flex text-white gap-3 lg:gap-2 flex-col lg:flex-row font-light text-lg xl:text-[22px] leading-7">
              <li>
                <span className="sm:hidden">•</span> HONG KONG
              </li>
              <li>• LOS ANGELES</li>
              <li>• AUSTRALIA</li>
            </ul>
            <ul className="flex gap-3 xl:gap-11 flex-col lg:flex-row text-white font-normal text-base opacity-[0.66]">
              <Link href="/about">
                <li className="hover:underline underline-offset-8">About Us</li>
              </Link>
              <Link href="work">
                <li className="hover:underline underline-offset-8">
                  How it works
                </li>
              </Link>
              <Link href="#">
                <li className="hover:underline underline-offset-8">
                  Terms of use
                </li>
              </Link>
              <Link href="#">
                <li className="hover:underline underline-offset-8">
                  Privacy policy
                </li>
              </Link>
            </ul>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <p className="font-medium text-base text-white">Community</p>
                <div className="flex gap-4">
                  <Link
                    href="https://www.instagram.com/vuzecmx/"
                    target="_blank"
                  >
                    <Insta className="w-6 h-6 text-[#F0F0F0] hover:scale-125 hover:text-[#B71544] transition-all ease-in-out" />
                  </Link>
                  <Link href="https://twitter.com/vuzecmx" target="_blank">
                    <Twitter className="w-6 h-6 text-[#F0F0F0] hover:scale-125 hover:text-[#B71544] transition-all ease-in-out" />
                  </Link>
                  <Link
                    href="https://twitter.com/vuzecmx"
                    target="_blank"
                    className="hidden"
                  >
                    <Discord className="w-6 h-6 text-[#F0F0F0] hover:scale-125 hover:text-[#B71544] transition-all ease-in-out" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="font-normal mt-5 md:mt-0 md:absolute bottom-4 right-0 md:right-0 text-base text-white opacity-[0.66]">
            © 2023 Vuzec, Inc.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
