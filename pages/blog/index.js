import React from 'react'
import Head from 'next/head'
import { BlogCard } from '../../components/BlogCard'
import Link from 'next/link'
import moment from 'moment'

const BlogDetails = [
  {
    title:
      'Uniting for Success: The Power of Collaboration in the Music Industry',
    discription: [
      "The music industry is full of stories of artists and disputes, with many falling victim to the greed of label executives. But, those who have reached the top have relied on strong partnerships and collaborations with other artists and industry professionals. This trend is seen across all industries, with success often stemming from having a supportive network. Whether it's the PayPal Mafia in venture capital or Google in technology, you must have the right network to achieve success.",
    ],
    date: moment().format('MMM DD') + ', ' + moment().format('YYYY'),
    link: 'blog/uniting-for-success',
  },
  {
    title:
      'The Evolution of Music Promotion: The Impact of Social Media on the Industry',
    discription: [
      'The digital age has brought about a massive shift in the music industry, and social media has played a big role in that transformation. With billions of people logging onto platforms like Facebook, Instagram, Twitter, and TikTok, musicians now have a vast and engaged audience to connect with. Social media has allowed artists to break down the barriers between themselves and their fans, creating a more personal relationship and fostering a sense of community.',
    ],
    link: 'blog/the-Evolution-of-Music-Promotion',
    date:
      moment().startOf('week').add(-1, 'week').add(2, 'day').format('MMM DD') +
      ', ' +
      moment().format('YYYY'),
  },
  {
    title:
      'Soothing The Soul: The Importance of Artist Mental Health and Wellness in the Music Industry',
    discription: [
      "The music industry is a wild ride, and it can take a toll on even the strongest of artists. As fans, we often only see the end result of a hit song or electrifying performance, but what we don't see is the work and sacrifices that go into making it all happen. That's why it's important to understand the importance of artist mental health and wellness.",
    ],
    link: 'blog/soothing-the-Soul',
    date:
      moment().startOf('week').add(-2, 'week').add(2, 'day').format('MMM DD') +
      ', ' +
      moment().format('YYYY'),
  },
  {
    title:
      'The Future of Music Investment: Why Fairly Valued Music Royalty Assets are the Way to Go',
    discription: [
      "Investing has always been a wild ride, with everything from swinging stocks to crude oil catching people's attention. But there's one investment that's been off-limits to the masses - music royalties. This exclusive asset class is reserved for only the super wealthy, who invest in it for low-risk returns that far surpass those of traditional investments.",
    ],
    link: 'blog/the-future-of-music-investment',
    date:
      moment().startOf('week').add(2, 'day').add(-3, 'week').format('MMM DD') +
      ', ' +
      moment().format('YYYY'),
  },
  {
    title:
      'Unleashing The Power of Supporting Independent Artists: Why It Matters Now More Than Ever!',
    discription: [
      "When it comes to music, we all have our own preferences. Some love the big names and the glitz and glam of the industry. Others, however, prefer something a little more raw and real - something that speaks to them on a more personal level. That's where independent artists come in!",
    ],
    link: 'blog/unleashing-the-power-of-supporting-artists',
    date:
      moment().startOf('week').add(2, 'day').add(-4, 'week').format('MMM DD') +
      ', ' +
      moment().format('YYYY'),
  },
]

const blog = (props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Blog | Audius NFT | NFTS for Music | Vuzec</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Explore the Audius blog for the latest music industry news and updates on our cutting-edge platform. Get exclusive insights on new features, upcoming artists, and label partnerships."
        />
        <meta
          name="keywords"
          content="Audius NFT, NFT Music Industry, NFT in Music, NFT Music Crypto, Audius Tiktok, Audius Blockchain, Blockchain Music Streaming, NFT and Music, NFTs for Music, Buy NFT Music, Music Ownership"
        />
        <meta
          property="og:title"
          content="Blog | Audius NFT | NFTS for Music | Vuzec"
        />
        <meta
          property="og:description"
          content="Explore the Audius blog for the latest music industry news and updates on our cutting-edge platform. Get exclusive insights on new features, upcoming artists, and label partnerships."
        />
        <meta property="og:type" content="event" />
        <meta property="og:url" content="https://www.vuzec.com/" />
        <meta
          name="twitter:title"
          content="Blog | Audius NFT | NFTS for Music | Vuzec"
        />
        <meta
          name="twitter:description"
          content="Explore the Audius blog for the latest music industry news and updates on our cutting-edge platform. Get exclusive insights on new features, upcoming artists, and label partnerships."
        />
      </Head>
      <div className="">
        <div className="w-full max-w-screen-2xl mx-auto px-5 xs:px-8 xl:pl-14 flex flex-col gap-5 pb-12">
          <h1 className="font-bold lg:text-[70px] md:text-[55px] text-[30px] whitespace-nowrap md:leading-[85px] leading-10 text-[#000000]">
            Our <span className="text-[#B71544]">Blog</span>
          </h1>
          <div className=" grid lg:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 auto-cols-max w-full gap-8 max-w-screen-2xl mt-3 md:mt-7">
            {BlogDetails.map((data, index) => (
              <Link href={data.link} key={index}>
                <BlogCard
                  title={data.title}
                  discription={data.discription[0]}
                  key={index}
                  date={data?.date}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default blog
