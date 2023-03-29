import Image from 'next/image'
import React from 'react'
import GraceCard from '../../assets/images/grace-bg.png'
import User from '../../assets/images/user.png'
import Calendar from '../../assets/images/calendar.png'
import moment from 'moment'
import Head from 'next/head'

export default function slug({ title, discription, date }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>
          The Evolution of Music Promotion: The Impact of Social Media on the
          Industry
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The digital age has brought about a massive shift in the music industry, and social media has played a big role in that transformation."
        />
        <meta
          name="keywords"
          content="Be Your Own Record Label Invest in music, Music Blockchain, Music Solana, Music NFT, Music Ownership, NFT Royalties, NFT Royalty"
        />
        <meta
          property="og:title"
          content="The Evolution of Music Promotion: The Impact of Social Media on the Industry"
        />
        <meta
          property="og:description"
          content="The digital age has brought about a massive shift in the music industry, and social media has played a big role in that transformation."
        />
        <meta property="og:type" content="event" />
        <meta property="og:url" content="https://www.vuzec.com/" />
      </Head>
      <div className=" w-full max-w-screen-2xl mx-auto px-5 xs:px-8 xl:pl-14 flex flex-col gap-9 pb-12">
        <div className="flex flex-col md:gap-2 gap-6">
          <h1 className="text-[#B71544] font-semibold md:text-[40px] sm:text-[30px] text-[23px] md:leading-[85px] text-center">
            The Evolution of Music Promotion: The Impact of Social Media on the
            Industry
          </h1>
          <div className="mx-auto flex justify-center gap-3">
            <div className="flex items-center gap-2">
              <Image src={User} alt="user" height={25} />
              <span>Vuzec Team</span>
            </div>
            <div className="flex gap-[6px] items-center">
              <Image src={Calendar} alt="Calendar" />
              <span>
                {moment()
                  .startOf('week')
                  .add(-1, 'week')
                  .add(2, 'day')
                  .format('MMM DD') +
                  ', ' +
                  moment().format('YYYY')}
              </span>
            </div>
          </div>
        </div>
        <Image src={GraceCard} alt="image" className="rounded-lg mt-2" />
        <div className="flex flex-col gap-6 sm:text-2xl text-base text-black px-3">
          <h1>
            The digital age has brought about a massive shift in the music
            industry, and social media has played a big role in that
            transformation. With billions of people logging onto platforms like
            Facebook, Instagram, Twitter, and TikTok, musicians now have a vast
            and engaged audience to connect with. Social media has allowed
            artists to break down the barriers between themselves and their
            fans, creating a more personal relationship and fostering a sense of
            community.
          </h1>

          <h1>
            One of the biggest advantages of social media is its global reach.
            No longer are artists limited to their local market, they can now
            share their music and message with fans all over the world, building
            a truly global fanbase. And with powerful targeting tools, musicians
            can precisely target their audience and reach the people who are
            most likely to be interested in their music.
          </h1>
          <h1>
            For musicians, the importance of social media in music marketing and
            promotion cannot be overstated. With social media, they can control
            their narrative, build their brand, and connect with their fans on a
            deeper level. Moreover, they can gather valuable insights and data
            about their music and their fans, allowing them to make informed
            decisions about their careers.
          </h1>
          <h1>
            While record labels were once the primary source of promotion and
            marketing for artists, the rise of social media has changed the
            industry&apos;s dynamics. Artists now have the power to reach
            millions of fans without the help of a record label, using platforms
            like Instagram and TikTok to share their music, engage with fans,
            and build their brand. This shift has given artists more control
            over their careers, allowing them to create their own paths and
            succeed on their own terms.
          </h1>
          <h1>
            In conclusion, social media has revolutionized the music industry,
            providing artists with a powerful tool for marketing and promotion.
            With its vast reach and targeting capabilities, social media has
            enabled musicians to connect with fans, build their brand, and
            gather valuable insights and data, all while controlling their
            narrative and carving their own path to success.
          </h1>
        </div>
      </div>
    </>
  )
}
