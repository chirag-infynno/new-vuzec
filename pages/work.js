import { Dropdown } from '../components/Dropdown'
import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

const faqs = [
  {
    id: 1,
    ques: 'What is Vuzec?',
    ans: 'Vuzec is a decentralized label that allows artists to raise capital and share their royalties with their fans and service providers.',
  },
  {
    id: 2,
    ques: 'How does it work?',
    ans:
      'Artists can raise capital by issuing "Notes", which represent a share in their future earnings. Fans and service providers can then purchase these tokens and earn a share of the artist' +
      "'s " +
      'royalties.',
  },
  {
    id: 3,
    ques: 'When I purchase a note, what do I get?',
    ans: "When you purchase a note, you are effectively buying a share in an artist's future earnings. You will receive a share of the artist's royalties each time their music is streamed or sold.",
  },
  {
    id: 4,
    ques: 'Where are notes stored?',
    ans: 'Notes are stored on a decentralized platform, typically a blockchain like Solana. This ensures the security and transparency of the investment.',
  },
  {
    id: 5,
    ques: 'How does Vuzec help Artists?',
    ans: "Vuzec provides artists with the access to funding and services they need to succeed, including branding, marketing, and music mastery. Additionally, the Collective's using Vuzec offer assistance with release strategy, track management, and more.",
  },
  {
    id: 6,
    ques: 'Why is investing in music a good idea?',
    ans: 'investing in music can be a unique and rewarding way to support your favorite artists and potentially earn returns on your investment.',
  },
  {
    id: 7,
    ques: 'How can I sell my notes?',
    ans: 'Notes can typically be sold on a decentralized exchange, allowing you to cash in on your investment.',
  },
  {
    id: 8,
    ques: 'When can I expect royalty payments?',
    ans: 'The frequency of royalty payments will depend on the terms of the investment, but they are typically paid out on a regular basis, such as monthly or quarterly.',
  },
  {
    id: 9,
    ques: 'When can I expect royalty payments?',
    ans: 'The frequency of royalty payments will depend on the terms of the investment, but they are typically paid out on a regular basis, such as monthly or quarterly.',
  },
  {
    id: 10,
    ques: 'How does Vuzec ensure fair and transparent royalty distribution?',
    ans: 'Vuzec uses decentralized technology and smart contracts to ensure that all royalty payments are made fairly and transparently. This helps to prevent any mismanagement or fraud and ensures that the rights of all parties are protected.',
  },
]

export default function work() {
  return (
    <>
      <Head>
        <title>
          How It Works | Selling Your Music as NFT | NFT Music for Sale | Vuzec
        </title>
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="description"
          content="Vuzec, musicians sell Notes containing a share of the streaming royalty rights of your favourite songs. As a Note owner, you will receive your share of the streaming royalties."
        />
        <meta
          name="keywords"
          content="Selling Music NFT, NFT with Music, Music as an NFT, Selling your Music as NFT, NFT Music Site"
        />
        <meta
          property="og:title"
          content="How It Works | Selling Your Music as NFT | NFT Music for Sale | Vuzec"
        />
        <meta
          property="og:description"
          content="Vuzec, musicians sell Notes containing a share of the streaming royalty rights of your favourite songs. As a Note owner, you will receive your share of the streaming royalties."
        />
        <meta property="og:type" content="event" />
        <meta property="og:url" content="https://www.vuzec.com/" />

        <meta
          name="twitter:title"
          content="How It Works | Selling Your Music as NFT | NFT Music for Sale | Vuzec"
        />
        <meta
          name="twitter:description"
          content="Vuzec, musicians sell Notes containing a share of the streaming royalty rights of your favourite songs. As a Note owner, you will receive your share of the streaming royalties."
        />
      </Head>
      <div className={`max-w-screen-2xl mx-auto sm:pl-36 pl-5`}>
        <h1 className="font-bold lg:text-[70px] md:text-[55px] text-[30px] whitespace-nowrap leading-[85px] text-[#000000]">
          GETTING <span className="text-[#B71544]">STARTED</span>
        </h1>
      </div>
      <div className="max-w-screen-lg w-full mx-auto flex flex-col sm:gap-20 gap-6 px-5 sm:pt-10 pt-7 pb-9 sm:pb-24">
        <div className=" flex lg:gap-[100px] md:flex-row flex-col md:gap-14 gap-3">
          <div className="w-72 sm:60">
            <h1 className="text-[25px] md:leading-8 leading-7 font-bold text-[#B71544] w-72 sm:60">
              NOTES AND MUSIC RIGHTS
            </h1>
          </div>
          <span className="sm:text-[20px] leading-7 text-[18px] text-[#000000]">
            When you stream you favourite song on e.g. Spotify, owners of notes
            of that music are able to receive money (royalties).
          </span>
        </div>
        <div className=" flex lg:gap-[100px] md:flex-row flex-col md:gap-14 gap-3">
          <div className="w-72 sm:60">
            <h1 className="text-[25px] md:leading-8 leading-7 font-bold text-[#B71544] w-72 sm:60">
              ROYALTIES
            </h1>
          </div>
          <span className="sm:text-[20px] leading-7 text-[18px] text-[#000000]">
            Streaming royalties are normally paid out to the owners quarterly,
            bi-annually, or annually. The payout is divided between the
            rightsholders based on their share of ownership.
          </span>
        </div>
        <div className=" flex lg:gap-[100px] md:flex-row flex-col md:gap-14 gap-3">
          <div className="w-72 sm:60">
            <h1 className="text-[25px] md:leading-8 leading-7 font-bold text-[#B71544] w-72 sm:60">
              VUZEC
            </h1>
          </div>
          <span className="sm:text-[20px]leading-7 text-[18px] text-[#000000]">
            On Vuzec, musicians sell Notes containing a share of the streaming
            royalty rights of your favourite songs. As a Note owner, you will
            receive your share of the streaming royalties.
          </span>
        </div>
      </div>
      <div className=" bg-black">
        <div className="max-w-screen-2xl w-full mx-auto px-5 py-24">
          <div className="sm:ml-28">
            <h1 className="lg:text-[70px] md:text-[50px] lg:leading-[85px] sm:text-[35px] text-[30px] leading-10 font-bold text-[#FFFFFF]">
              THE RELEASE PROCESS
            </h1>
          </div>
          <div className="flex w-ful flex-col sm:px-5 lg:gap-24 gap-8 lg:mt-24 mt-16">
            <motion.div
              className="flex sm:gap-6 gap-3 self-start "
              initial={{ x: 100 }}
              viewport={{ amount: 0.5 }}
              whileInView={{ x: 0, visibility: 'visible' }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[#B71544] lg:text-[100px] sm:text-[60px] text-[35px] font-light lg:leading-[122px] lg:mt-[2px]">
                1
              </h1>
              <div className="w-full max-w-3xl flex sm:gap-5 gap-1 flex-col">
                <h1 className="text-[#B71544] lg:text-[50px] sm:text-[40px] text-[23px] font-bold sm:leading-[61px] leading-7 tracking-[.25em]">
                  PRE-SALE
                </h1>
                <span className="text-white md:text-[25px] text-[18px] md:leading-8 leading-7">
                  For a select few – purchase is available a couple of hours
                  before the Notes are accessible to the public.
                </span>
              </div>
            </motion.div>
            <motion.div
              className="flex sm:gap-6 gap-3 md:self-end xl:mr-4 lg:mr-2 mr-0"
              initial={{ x: -100 }}
              viewport={{ amount: 0.5 }}
              whileInView={{ x: 0, visibility: 'visible' }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[#B71544] lg:text-[100px] sm:text-[60px] text-[35px] font-light lg:leading-[90px] lg:mt-[2px]">
                2
              </h1>
              <div className="w-full mmax-w-3xl-w-xl flex sm:gap-5 gap-1 flex-col">
                <h1 className="text-[#B71544] lg:text-[50px] sm:text-[40px] text-[23px] font-bold sm:leading-[61px] leading-7 tracking-[.25em]">
                  PUBLIC SALE
                </h1>
                <span className="text-white md:text-[25px] text-[18px] md:leading-8 leading-7">
                  Everyone can now purchase our Notes.
                  <br /> Payment is available with both credit card, USDC, and
                  SOL.
                </span>
              </div>
            </motion.div>
            <motion.div
              className="flex sm:gap-6 gap-3 self-start "
              initial={{ x: 100 }}
              viewport={{ amount: 0.5 }}
              whileInView={{ x: 0, visibility: 'visible' }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[#B71544] lg:text-[100px] sm:text-[60px] text-[35px] font-light lg:leading-[122px] lg:mt-[2px]">
                3
              </h1>
              <div className="w-full max-w-3xl flex sm:gap-5 gap-1 flex-col">
                <h1 className="text-[#B71544] lg:text-[50px] sm:text-[40px] text-[23px] font-bold sm:leading-[61px] leading-7 tracking-[.25em]">
                  CHECK YOUR PROFILE
                </h1>
                <span className="text-white md:text-[25px] text-[18px] md:leading-8 leading-7">
                  once you have bought a NOTE – it will be shown on your profile
                  page where you can follow your song’s performance.
                </span>
              </div>
            </motion.div>
            <motion.div
              className="flex sm:gap-6 gap-3 md:self-end xl:mr-4 lg:mr-2 mr-[68px]"
              initial={{ x: -100 }}
              viewport={{ amount: 0.5 }}
              whileInView={{ x: 0, visibility: 'visible' }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[#B71544] lg:text-[100px] sm:text-[60px] text-[35px] font-light lg:leading-[122px] lg:mt-[2px]">
                4
              </h1>
              <div className="w-full max-w-3xl flex sm:gap-5 gap-1 flex-col">
                <h1 className="text-[#B71544] lg:text-[50px] sm:text-[40px] text-[23px] font-bold sm:leading-[61px] leading-7 tracking-[.25em]">
                  ROYALTY PAYOUTS
                </h1>
                <span className="text-white md:text-[25px] text-[18px] md:leading-8 leading-7">
                  Initially, royalties are paid out every 6 months.
                  <br /> More information will be presented with every drop.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-[31px] w-full mx-auto bg-[#B71544]"></div>
      <div className="max-w-screen-2xl w-full mx-auto px-5 sm:py-28 py-14">
        <div className="sm:ml-28">
          <h1 className="lg:text-[70px] md:text-[50px] lg:leading-[85px] sm:text-[35px] text-[30px] leading-10 font-bold text-[#000000]">
            BEHIND THE SCENES
          </h1>
        </div>

        <div className="flex w-ful flex-col sm:px-5 lg:gap-24 gap-8 lg:mt-24 sm:mt-16 mt-8">
          <motion.div
            className="flex sm:gap-6 gap-3 self-start"
            initial={{ x: -100 }}
            viewport={{ amount: 0.5 }}
            whileInView={{ x: 0, visibility: 'visible' }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[#B71544] lg:text-[100px] sm:text-[60px] text-[40px] font-light sm:leading-[140px] leading-[92px] lg:mt-[2px]">
              1
            </h1>
            <div className="w-full max-w-3xl flex sm:gap-4 gap-1 pt-4 flex-col">
              <h1 className="text-[#B71544] sm:text-[40px] text-[25px] font-bold sm:leading-[48px] leading-7 sm:tracking-[.25em] tracking-[.1em]">
                VUZEC DISCUSSES WITH MUSIC OWNERS
              </h1>
              <span className="text-[#000000] md:text-[25px] text-[18px] md:leading-8 leading-7">
                We work with artists, producers, songwriters, labels, and
                catalog holders. owners of quality music rights can release on
                Vuzec.
              </span>
            </div>
          </motion.div>
          <motion.div
            className="flex sm:gap-6 gap-3 self-center"
            initial={{ display: 'hidden' }}
            viewport={{ amount: 0.5 }}
            whileInView={{ x: 0, visibility: 'visible' }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[#B71544] lg:text-[100px] sm:text-[60px] text-[40px] leading-[47px] sm:leading-[84px] font-light lg:leading-[93px] lg:mt-[2px]">
              2
            </h1>
            <div className="w-full max-w-2xl flex sm:gap-4 gap-1 flex-col">
              <h1 className="text-[#B71544] sm:text-[40px] text-[25px] font-bold sm:leading-[48px] leading-7 sm:tracking-[.25em] tracking-[.1em]">
                THE ROYALTY SPLIT
              </h1>
              <span className="text-[#000000] md:text-[25px] text-[18px] md:leading-8 leading-7">
                Vuzec and the rightsholder decide what share of royalty to
                divest from a song/EP/album.
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex sm:gap-6 gap-3 self-end"
            initial={{ x: 100 }}
            viewport={{ amount: 0.5 }}
            whileInView={{ x: 0, visibility: 'visible' }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[#B71544] lg:text-[100px] sm:text-[60px] text-[40px] leading-[47px] sm:leading-[84px] font-light lg:leading-[105px] lg:mt-[2px]">
              3
            </h1>
            <div className="w-full max-w-2xl flex sm:gap-4 gap-1 flex-col">
              <h1 className="text-[#B71544] sm:text-[40px] text-[25px] font-bold sm:leading-[48px] leading-7 sm:tracking-[.25em] tracking-[.1em]">
                CREATION OF NOTES
              </h1>
              <span className="text-[#000000] md:text-[25px] text-[18px] md:leading-8 leading-7">
                Together with the rightsholder, we workout a fair valuation and
                design for the album.
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex sm:gap-6 gap-3 self-center"
            initial={{ display: 'hidden' }}
            viewport={{ amount: 0.5 }}
            whileInView={{ x: 0, visibility: 'visible' }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[#B71544] lg:text-[100px] sm:text-[60px] text-[40px] font-light leading-[47px] sm:leading-[84px] lg:leading-[105px] lg:mt-[2px]">
              4
            </h1>
            <div className="w-full max-w-6xl flex sm:gap-4 gap-1 flex-col">
              <h1 className="text-[#B71544] sm:text-[40px] text-[25px] font-bold sm:leading-[48px] leading-7 sm:tracking-[.25em] tracking-[.1em]">
                ENGINEERING AND DEPLOYMENT
              </h1>
              <span className="text-[#000000] md:text-[25px] max-w-3xl text-[18px] md:leading-8 leading-7 flex flex-col">
                <span>
                  The engineering team utilizes custom developed smart contracts
                  to create Notes and on-chain royalties.
                </span>
                <br />
                <span className="md:mt-5 mt-3">
                  The release is prepared with up-to-date metadata and details.
                  new features are implemented on an ongoing basis.
                </span>
              </span>
            </div>
          </motion.div>
          <motion.div
            className="flex sm:gap-6 gap-3 self-end"
            initial={{ x: 100, display: 'hidden' }}
            viewport={{ amount: 0.5 }}
            whileInView={{ x: 0, visibility: 'visible' }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[#B71544] lg:text-[100px] sm:text-[60px] text-[40px] font-light lg:leading-[105px] lg:mt-[2px]">
              5
            </h1>
            <div className="w-full max-w-3xl flex sm:gap-5 gap-1 flex-col">
              <h1 className="text-[#B71544] sm:text-[40px] text-[25px] font-bold sm:leading-[48px] leading-7 sm:tracking-[.25em] tracking-[.1em]">
                THE DROP
              </h1>
              <span className="text-[#000000] md:text-[25px] text-[18px] md:leading-8 leading-7">
                The notes are made available for purchase – allowing you to
                invest in your favorite music
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-screen-2xl w-full mx-auto sm:px-16 px-5 py-6">
        <h1 className="uppercase text-center text-[#000000] text-[70px] leading-[85px] font-bold mb-4">
          faq
        </h1>
        {faqs.map((faq) => (
          <Dropdown
            key={faq.id}
            quastion={faq.ques}
            answer={faq.ans}
            textColor="black"
            border="black"
            open={faq.id === 2 ? true : false}
          />
        ))}
      </div>
    </>
  )
}
