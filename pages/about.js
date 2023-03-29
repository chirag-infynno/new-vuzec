import { Card } from '../components/Card'
import React from 'react'
import Core1 from '../assets/images/core1.svg'
import Core2 from '../assets/images/core2.svg'
import Core3 from '../assets/images/core3.svg'
import Tech1 from '../assets/images/tech1.svg'
import Tech2 from '../assets/images/tech2.svg'
import Tech3 from '../assets/images/tech3.svg'
import Tech4 from '../assets/images/tech4.svg'
import Adv1 from '../assets/images/adv-1.svg'
import Adv2 from '../assets/images/adv-2.svg'
import Adv3 from '../assets/images/adv-3.svg'
import Adv4 from '../assets/images/adv-4.svg'
import Adv5 from '../assets/images/adv-5.svg'
import Adv6 from '../assets/images/adv-6.svg'
import Adv7 from '../assets/images/adv-7.svg'
import Head from 'next/head'

export default function team() {
  const core = [
    {
      userImage: Core1,
      userName: 'MICHAEL BARO',
      userDetails:
        'Interim President Director of Global Marketing @Capitol Records',
      imagealt: 'core1',
    },
    ,
    {
      userImage: Core2,
      userName: 'JAYESH CHATLANI',
      userDetails: 'Co-founder and Strategy Lead',
      imagealt: 'core2',
    },
    {
      userImage: Core3,
      userName: 'NIKHAIL WADHWANI',
      userDetails: 'Co-founder and Operations Lead',
      imagealt: 'core3',
    },
  ]

  const techTeam = [
    {
      userImage: Tech1,
      userName: 'BRANDON KING',
      userDetails: 'Design & Operations',
      imagealt: 'Technology 1',
    },
    {
      userImage: Tech2,
      userName: 'BLAIR CHRISTENSEN',
      userDetails: 'Development',
      imagealt: 'Technology 2',
    },
    {
      userImage: Tech3,
      userName: 'REECE NIMORAKIOTAKIS',
      userDetails: 'Project Manager',
      imagealt: 'Technology 3',
    },
    {
      userImage: Tech4,
      userName: 'JAY PHILLIPS',
      userDetails: 'Solutions Architect',
      imagealt: 'Technology 4',
    },
  ]

  const advisor = [
    {
      userImage: Adv1,
      userName: 'COREY LLEWELLYN',
      userDetails: 'CEO',
      work: '@Digiwaxx',
      imagealt: 'Advisor 1',
    },
    {
      userImage: Adv2,
      userName: 'RICARDO VAN MILDERT',
      userDetails: 'COO',
      work: '@Moon Jelly',
      imagealt: 'Advisor 2',
    },

    {
      userImage: Adv3,
      userName: 'SCOTT PAGE',
      userDetails: 'Pink Floyd Musician',
      work: 'Entrepreneur',
      imagealt: 'Advisor 3',
    },

    {
      userImage: Adv4,
      userName: 'SMIT PUROHIT',
      userDetails: 'Senior Manager, Product, Finance & Strategy',
      work: '@TIDAL',
      imagealt: 'Advisor 4',
    },
    {
      userImage: Adv5,
      userName: 'ARUN MAKHIJA',
      userDetails: 'CFO - APAC',
      work: '@Foodpanda',
      imagealt: 'Advisor 5',
    },
    {
      userImage: Adv6,
      userName: 'JEROEN HILLEBRAND',
      userDetails: 'Head of Marketing',
      work: '@Moon Jelly',
      imagealt: 'Advisor 6',
    },
    {
      userImage: Adv7,
      userName: 'KOK CHEUNG',
      userDetails: 'GP',
      work: '@True Global Venutres Fund',
      imagealt: 'Advisor 7',
    },
  ]
  return (
    <>
      <Head>
        <title>
          About Us | Blockchain Music Streaming | NFT Music Streaming | Vuzec
        </title>
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="description"
          content="Vuzec is a blockchain-powered music streaming platform. Vuzec is a blockchain-based decentralized music streaming platform to connect music enthusiasts directly to independent music artists."
        />
        <meta
          name="keywords"
          content="Blockchain Music Streaming, NFT Music Streaming, Music Blockchain, NFT Music Meaning, Music Ownership, NFT Music for Sale, Selling Music NFT, NFT with Music"
        />
        <meta
          property="og:title"
          content="About Us | Blockchain Music Streaming | NFT Music Streaming | Vuzec"
        />
        <meta
          property="og:description"
          content="Vuzec is a blockchain-powered music streaming platform. Vuzec is a blockchain-based decentralized music streaming platform to connect music enthusiasts directly to independent music artists."
        />
        <meta property="og:type" content="event" />
        <meta property="og:url" content="https://www.vuzec.com/" />

        <meta
          name="twitter:title"
          content="About Us | Blockchain Music Streaming | NFT Music Streaming | Vuzec"
        />
        <meta
          name="twitter:description"
          content="Vuzec is a blockchain-powered music streaming platform. Vuzec is a blockchain-based decentralized music streaming platform to connect music enthusiasts directly to independent music artists."
        />
      </Head>
      <div className="sm:pl-28 sm:pr-[65px] pl-5 pr-5 mx-auto max-w-screen-2xl">
        <div className="w-full sm:max-w-2xl max-w-xs">
          <p className="text-left font-bold md:text-[70px] sm:text-[67px] text-[35px] leading-7 sm:leading-[85px] text-[#000000]">
            MEET THE
          </p>
          <br />
          <p className="text-right font-bold md:text-[70px] sm:text-[67px] text-[35px] leading-7 sm:leading-[85px] text-[#000000]">
            <span className="text-[#B71544]">VUZEC</span> TEAM
          </p>
        </div>
        <div className="self-end mt-2">
          <p className="sm:text-[25px] xs:text-lg text-[15px] leading-[30px] font-semibold text-[#000000] text-right">
            hover to discover our favourite songs
          </p>
        </div>
      </div>

      <div className="flex justify-center sm:mt-12 mt-20">
        <div className="max-w-screen-2xl w-full sm:pl-12 sm:pr-[71px] px-5 sm:px-0 flex md:gap-3 gap-10 flex-col md:flex-row">
          <div className="text-[#B71544] sm:text-[25px] text-[38px] hover:lg:text-[25px] leading-8 sm:w-64 overflow-hidden text-center md:text-left self-center md:self-start md:mt-28">
            CORE
          </div>
          <div className="flex sm:flex-wrap gap-11 sm:flex-row w-full flex-col items-center sm:items-start justify-between xl:justify-start">
            {core.map((data, index) => (
              <Card
                key={index}
                userImage={data.userImage}
                userName={data.userName}
                userDetails={data.userDetails}
                imagealt={data.imagealt}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:mt-12 mt-20">
        <div className="max-w-screen-2xl w-full sm:pl-12 sm:pr-[71px] px-5 sm:px-0 flex flex-col md:flex-row md:gap-3 gap-10">
          <div className=" sm:text-[25px] text-[38px] text-[#B71544] leading-8 sm:w-64 overflow-hidden text-center md:text-left self-center md:self-start md:mt-28">
            TECHNOLOGY
          </div>
          <div className="flex sm:flex-wrap gap-11 sm:flex-row w-full flex-col items-center sm:items-start justify-between xl:justify-start">
            {techTeam.map((data, index) => (
              <Card
                key={index}
                userImage={data.userImage}
                userName={data.userName}
                userDetails={data.userDetails}
                imagealt={data.imagealt}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:mt-12 mt-20 mb-24">
        <div className="max-w-screen-2xl w-full sm:pl-12 sm:pr-[71px] px-5 sm:px-0 flex flex-col md:flex-row md:gap-3 gap-10">
          <div className="text-[#B71544] sm:text-[25px] text-[38px] leading-8 sm:w-64 overflow-hidden text-center md:text-left self-center md:self-start md:mt-28">
            ADVISORS
          </div>
          <div className="flex sm:flex-wrap gap-11 sm:flex-row w-full flex-col items-center sm:items-start justify-between xl:justify-start">
            {advisor.map((data, index) => (
              <Card
                key={index}
                userImage={data.userImage}
                userName={data.userName}
                userDetails={data.userDetails}
                imagealt={data.imagealt}
                work={data.work}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
