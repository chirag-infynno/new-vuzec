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
          Soothing The Soul: The Importance of Artist Mental Health and Wellness
          in the Music Industry
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The music industry is a wild ride, and it can take a toll on even the strongest of artists."
        />
        <meta
          name="keywords"
          content="Be Your Own Record Label Invest in music, Music Blockchain, Music Solana, Music NFT, Music Ownership, NFT Royalties, NFT Royalty"
        />
        <meta
          property="og:title"
          content="Soothing the Soul: The Importance of Artist Mental Health and Wellness in the Music Industry"
        />
        <meta
          property="og:description"
          content="The music industry is a wild ride, and it can take a toll on even the strongest of artists."
        />
        <meta property="og:type" content="event" />
        <meta property="og:url" content="https://www.vuzec.com/" />
      </Head>

      <div className="w-full max-w-screen-2xl mx-auto px-5 xs:px-8 xl:pl-14 flex flex-col gap-9 pb-12">
        <div className="flex flex-col md:gap-2 gap-6">
          <h1 className="text-[#B71544] font-semibold md:text-[40px] sm:text-[30px] text-[23px] md:leading-[85px] text-center">
            Soothing the Soul: The Importance of Artist Mental Health and
            Wellness in the Music Industry
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
                  .add(-2, 'week')
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
            The music industry is a wild ride, and it can take a toll on even
            the strongest of artists. As fans, we often only see the end result
            of a hit song or electrifying performance, but what we don&apos;t
            see is the work and sacrifices that go into making it all happen.
            That&apos;s why it&apos;s important to understand the importance of
            artist mental health and wellness.
          </h1>
          <h1>
            Think about it, these musicians pour their hearts and souls into
            their work, often sacrificing their own well-being for the sake of
            the music. They spend countless hours in the studio, on tour, and
            interacting with fans, all while trying to maintain a personal life.
            It&apos;s a lot to handle! But when artists prioritize their mental
            health and wellness, the music they produce is not only better, but
            it&apos;s more meaningful and genuine.
          </h1>
          <h1>
            As fans, we want our favorite artists to be happy and healthy, and
            that&apos;s why it&apos;s so crucial to support them in their
            journey towards good mental health. Whether it&apos;s encouraging
            them to take breaks, or simply being there for them, you can play a
            big role in helping them stay balanced and sane.
          </h1>
          <h1>
            So what does good artist mental health and wellness look like?
            It&apos;s a combination of things, but it starts with self-care.
            This can mean taking time off, seeking therapy, or simply finding
            healthy ways to manage stress. When artists take care of themselves,
            they&apos;re able to bring their A-game to their music, and the
            results are amazing. The music they produce is raw, real, and
            connects with fans on a deeper level.
          </h1>
          <h1>
            But it&apos;s not just about the artists, it&apos;s also about the
            industry itself. The music industry can be a tough place, with
            unrealistic expectations and pressure to always be performing at top
            level. That&apos;s why it&apos;s important for the industry to
            create a supportive environment that prioritizes the well-being of
            its artists. This means providing resources like therapy and support
            groups, and promoting healthy work-life balance.
          </h1>
          <h1>
            In conclusion, artist mental health and wellness is a crucial aspect
            of the music industry, and it&apos;s up to both fans and the
            industry itself to support and prioritize it. When artists are happy
            and healthy, the music they produce is not only better, but
            it&apos;s more meaningful and genuine. So let&apos;s all do our part
            to support our favorite musicians and help create a brighter and
            healthier future for the music industry!
          </h1>
        </div>
      </div>
    </>
  )
}
