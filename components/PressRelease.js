import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PressRelease = ({ pressReleases }) => {
  return (
    <div className="w-full max-w-xl lg:max-w-7xl mx-auto">
      <p className="font-bold text-2xl text-white mb-5">press release • </p>
      <div className="flex flex-wrap lg:flex-nowrap w-full gap-8">
        {pressReleases.map((pressRelease) => (
          <div
            key={pressRelease.id}
            className="w-full flex flex-col gap-5 md:gap-10"
          >
            <div className="flex flex-col gap-5">
              <div>
                <Image src={pressRelease.img} alt={pressRelease.alt} />
              </div>
              <Link href={pressRelease.url} target="_blank">
                <h2 className="font-bold hover:underline underline-offset-8 text-xl md:text-2xl text-white">
                  {pressRelease.title}
                </h2>
              </Link>
            </div>
            <p className="text-xl md:text-2xl font-normal text-white">
              {pressRelease.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PressRelease
