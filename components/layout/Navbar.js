import { Union, Vuzec } from '../../assets/images/images'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Navbar = (dark, light) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const router = useRouter()
  const toggleClass = () => {
    setIsNavOpen(!isNavOpen)
    const closeAfterClick = document.querySelector('#nav-icon4')
    closeAfterClick?.classList?.toggle('open')
  }

  useEffect(() => {
    toggle
      ? (document.body.style.position = 'fixed')
      : (document.body.style.position = 'relative')
  }, [toggle])

  return (
    <div
      className={classNames(
        'relative w-full mx-auto max-w-screen-2xl',
        router.route.includes('/about') ||
          router.route.includes('/work') ||
          router.route.includes('/blog')
          ? 'h-40'
          : 'h-auto',
      )}
    >
      <div
        className={classNames(
          'w-full max-w-screen-2xl mx-auto',
          router.route.includes('/about') ||
            router.route.includes('/work') ||
            router.route.includes('/blog')
            ? 'bg-white '
            : 'bg-trasperent',
          toggle ? 'fixed z-50 max-w-full' : 'absolute',
        )}
      >
        <div
          className={classNames(
            'flex w-full items-center lg:gap-12 md:gap-4 justify-between md:justify-start max-w-full md:max-w-5xl px-5 xs:px-8  xl:pl-14 py-10',
          )}
        >
          <div
            className="flex items-center gap-4 xs:gap-7"
            onClick={() => router.push('/')}
          >
            <div className="relative cursor-pointer">
              <Image src={Union} width={74} height={64} alt="Music NFT" />
            </div>
            <div className="relative cursor-pointer text-[#B71544] font-semibold text-2xl tracking-[0.25em]">
              VUZEC
            </div>
          </div>
          <div className="hidden md:flex w-full items-center gap-11 lg:gap-12 whitespace-nowrap lg:max-w-lg sm:max-w-md">
            <Link href="/about">
              <p
                className={classNames(
                  'font-semibold text-2xl w-fit hover:text-[#B71544]',
                  router.route.includes('/about') ||
                    router.route.includes('/work') ||
                    router.route.includes('/blog')
                    ? 'text-black leading-[29px]'
                    : 'opacity-[0.66] leading-[29px] text-white',
                  router.route.includes('/about') && '!text-[#B71544]',
                )}
              >
                About Us
              </p>
            </Link>
            <Link href="/work">
              <p
                className={classNames(
                  'font-semibold text-2xl w-fit hover:text-[#B71544]',
                  router.route.includes('/about') ||
                    router.route.includes('/work') ||
                    router.route.includes('/blog')
                    ? 'text-black leading-[29px]'
                    : 'opacity-[0.66] leading-[29px] text-white',
                  router.route.includes('/work') && '!text-[#B71544]',
                )}
              >
                How it works
              </p>
            </Link>

            <Link href="/blog">
              <p
                className={classNames(
                  'font-semibold text-2xl w-fit hover:text-[#B71544]',
                  router.route.includes('/about') ||
                    router.route.includes('/work') ||
                    router.route.includes('/blog')
                    ? 'text-black leading-[29px]'
                    : 'opacity-[0.66] leading-[29px] text-white',
                  router.route.includes('/blog') && '!text-[#B71544]',
                )}
              >
                Blog
              </p>
            </Link>
          </div>
          <div className="md:hidden flex justify-end max-w-fit w-full h-full">
            <div
              id="nav-icon4"
              onClick={() => {
                toggleClass()
                setToggle(!toggle)
              }}
            >
              <span
                className={classNames(
                  router.route.includes('/about') ||
                    router.route.includes('/work') ||
                    router.route.includes('/blog')
                    ? 'bg-black'
                    : 'bg-white',
                )}
              ></span>
              <span
                className={classNames(
                  router.route.includes('/about') ||
                    router.route.includes('/work') ||
                    router.route.includes('/blog')
                    ? 'bg-black'
                    : 'bg-white',
                )}
              ></span>
              <span
                className={classNames(
                  router.route.includes('/about') ||
                    router.route.includes('/work') ||
                    router.route.includes('/blog')
                    ? 'bg-black'
                    : 'bg-white',
                )}
              ></span>
            </div>
          </div>
          <div
            className={`md:invisible w-full h-full flex flex-wrap flex-col justify-center items-center fixed left-0 top-[125px] ${
              toggle
                ? 'visible ms:visible sm:visible  z-[3]'
                : 'invisible -z-10'
            }`}
          >
            <div
              className={`md:invisible bg-black w-full h-full flex flex-wrap absolute left-0 top-0 ${
                toggle
                  ? 'visible ms:visible sm:visible z-[3]'
                  : 'invisible -z-10'
              }`}
            ></div>
            <div
              data-tilt
              data-tilt-perspective="2000"
              className="navbar_menu will-change-transform"
            >
              <div
                className={`block min-h-[130px] transform transition ${
                  toggle
                    ? 'opacity-100 -translate-y-1/3 delay-[0.45s]'
                    : 'opacity-0 -translate-y-0  delay-[0s]'
                }`}
              >
                <ul
                  className={`transition flex flex-col gap-10 my-5 items-start justify-between ${
                    toggle ? 'delay-[0.45s]' : 'delay-[0s]'
                  }`}
                >
                  <li
                    onClick={() => {
                      setIsNavOpen(false)
                      router.push('/about')
                      setToggle(false)
                      const closeAfterClick =
                        document.querySelector('#nav-icon4')
                      closeAfterClick?.classList?.remove('open')
                    }}
                    className="font-normal text-3xl text-center text-[#e3e3e3] hover:text-[#B71544] transition delay-[0s]"
                  >
                    About Us
                  </li>
                  <li
                    onClick={() => {
                      setIsNavOpen(false)
                      router.push('/work')
                      setToggle(false)
                      const closeAfterClick =
                        document.querySelector('#nav-icon4')
                      closeAfterClick?.classList?.remove('open')
                    }}
                    className="font-normal text-3xl text-center text-[#e3e3e3] hover:text-[#B71544] transition delay-[0s]"
                  >
                    How it works
                  </li>

                  <li
                    onClick={() => {
                      setIsNavOpen(false)
                      router.push('/blog')
                      setToggle(false)
                      const closeAfterClick =
                        document.querySelector('#nav-icon4')
                      closeAfterClick?.classList?.remove('open')
                    }}
                    className="font-normal text-3xl text-center text-[#e3e3e3] hover:text-[#B71544] transition delay-[0s]"
                  >
                    Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

// w-full max-w-screen-2xl mx-auto bg-trasperent fixed z-50 max-w-full
// w-full max-w-screen-2xl mx-auto bg-white  fixed z-50 max-w-full
