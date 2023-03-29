import Image from 'next/image'
import React from 'react'
import GraceCard from '../../assets/images/grace-bg.png'
import User from '../../assets/images/user.png'
import Calendar from '../../assets/images/calendar.png'
import moment from 'moment'
import Head from 'next/head'

export default function slug() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>
          The Future of Music Investment: Why Fairly Valued Music Royalty Assets
          are the Way to Go
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="investing has always been a wild ride, with everything from swinging stocks to crude oil catching people's attention."
        />
        <meta
          name="keywords"
          content="Be Your Own Record Label Invest in music, Music Blockchain, Music Solana, Music NFT, Music Ownership, NFT Royalties, NFT Royalty"
        />
        <meta
          property="og:title"
          content="The Future of Music Investment: Why Fairly Valued Music Royalty Assets are the Way to Go"
        />
        <meta
          property="og:description"
          content="investing has always been a wild ride, with everything from swinging stocks to crude oil catching people's attention."
        />
        <meta property="og:type" content="event" />
        <meta property="og:url" content="https://www.vuzec.com/" />
      </Head>
      <div className=" w-full max-w-screen-2xl mx-auto px-5 xs:px-8 xl:pl-14 flex flex-col gap-9 pb-12">
        <div className="flex flex-col md:gap-2 gap-6">
          <h1 className="text-[#B71544] font-semibold md:text-[40px] sm:text-[30px] text-[23px] md:leading-[85px] text-center">
            The Future of Music Investment: Why Fairly Valued Music Royalty
            Assets are the Way to Go
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
                  .add(2, 'day')
                  .add(-3, 'week')
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
            investing has always been a wild ride, with everything from swinging
            stocks to crude oil catching people&apos;s attention. But
            there&apos;s one investment that&apos;s been off-limits to the
            masses - music royalties. This exclusive asset class is reserved for
            only the super wealthy, who invest in it for low-risk returns that
            far surpass those of traditional investments.
          </h1>

          <h1>
            Take Walt Disney&apos;s family investment arm, for example. In 2020,
            they made headlines by acquiring Taylor Swift&apos;s catalog for a
            staggering $405 million. This catalog is expected to provide Disney
            with a return over the next 10 to 15 years, and beyond - so long as
            we continue to blast {`"Shake it Off"`} and our kids continue to do
            the same.
          </h1>
          <h1>
            But what if we told you that investing in music royalties is no
            longer just for the super wealthy? Thanks to blockchain technology
            and Vuzec, the future of music investment is finally accessible to
            the masses. By tokenizing music royalties and allowing for
            fractional ownership, everyone has the opportunity to invest in this
            exciting asset class.
          </h1>
          <h1>
            Music royalties are a low-risk investment, providing a consistent
            stream of income based on the continued use and consumption of the
            music. Unlike stocks that are subject to market fluctuations, music
            royalties are stable, ensuring a return on investment as long as
            people keep listening.
          </h1>
          <h1>
            And unlike other investments, music royalties are immune to the
            effects of inflation. Their value is not impacted by inflation,
            making them a reliable and stable investment option, even during
            uncertain economic times.
          </h1>
          <h1>
            So what are you waiting for? The future of music investment is now,
            and Vuzec is leading the charge. Join us in a new era of music and
            finance, where creativity is nurtured, hard work is rewarded, and
            investment is valued. The time is now to make history, together.
          </h1>
        </div>
      </div>
    </>
  )
}
