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
          Unleashing The Power of Supporting Independent Artists: Why It Matters
          Now More Than Ever!
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="When it comes to music, we all have our own preferences. Some love the big names and the glitz and glam of the industry."
        />
        <meta
          name="keywords"
          content="Be Your Own Record Label Invest in music, Music Blockchain, Music Solana, Music NFT, Music Ownership, NFT Royalties, NFT Royalty"
        />
        <meta
          property="og:title"
          content="Unleashing The Power of Supporting Independent Artists: Why It Matters Now More Than Ever!"
        />
        <meta
          property="og:description"
          content="When it comes to music, we all have our own preferences. Some love the big names and the glitz and glam of the industry."
        />
        <meta property="og:type" content="event" />
        <meta property="og:url" content="https://www.vuzec.com/" />
      </Head>
      <div className=" w-full max-w-screen-2xl mx-auto px-5 xs:px-8 xl:pl-14 flex flex-col gap-9 pb-12">
        <div className="flex flex-col md:gap-2 gap-6">
          <h1 className="text-[#B71544] font-semibold md:text-[40px] sm:text-[30px] text-[23px] md:leading-[85px] text-center">
            Unleashing The Power of Supporting Independent Artists: Why It
            Matters Now More Than Ever!
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
                  .add(-4, 'week')
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
            When it comes to music, we all have our own preferences. Some love
            the big names and the glitz and glam of the industry. Others,
            however, prefer something a little more raw and real - something
            that speaks to them on a more personal level. That&apos;s where
            independent artists come in!
          </h1>

          <h1>
            Supporting independent artists is like having your own secret club -
            you&apos;re privy to a world that not everyone knows about.
            It&apos;s a chance to discover new talent, before they hit the
            mainstream, and to feel like you&apos;re part of something special.
            And the best part? When you support independent artists, you&apos;re
            not just helping them with their music career - you&apos;re helping
            to shape the future of the music industry.
          </h1>
          <h1>
            So, what are the benefits of supporting independent artists in
            today&apos;s music landscape? For starters, you get a chance to hear
            music that&apos;s a little different from what you&apos;d normally
            hear on the radio. Independent artists are free to experiment and
            try new things, without having to worry about pleasing anyone but
            themselves (and their fans). They&apos;re not tied down to a label
            or a big corporation, so they have the freedom to make the music
            they want to make. And trust us, that freedom leads to some
            seriously amazing sounds.
          </h1>
          <h1>
            Another perk of supporting independent artists is that you can
            actually make a difference in their career. With the rise of
            platforms like Vuzec, fans can directly support and even profit from
            the artists they love. No longer do you have to just be a passive
            listener - you can help independent artists grow and succeed, and
            even get a return on your investment!
          </h1>
          <h1>
            And let&apos;s not forget the personal touch. When you support
            independent artists, you&apos;re building a relationship with them.
            You get to know them, and they get to know you. They appreciate your
            support, and they&apos;re grateful for every like, comment, and
            share. You can connect with them on a level that&apos;s just not
            possible with the big names in the industry.
          </h1>

          <h1>
            So, there you have it folks - the benefits of supporting independent
            artists in today&apos;s music landscape. Don&apos;t just be a
            passive listener - be a part of something special. Help shape the
            future of the music industry, and discover some amazing new sounds
            in the process. So, what are you waiting for? Join the charge, only
            at&nbsp;
            <a
              href="https://www.vuzec.com/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-[#B71544]"
            >
              Vuzec.com
            </a>
          </h1>
        </div>
      </div>
    </>
  )
}
