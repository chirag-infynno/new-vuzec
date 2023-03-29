import Head from "next/head";
import Image from "next/image";
import { Hind, Montserrat } from "@next/font/google";
import Story from "../assets/images/story.png";
import Button from "../components/Button";
import UpcomingDrop from "../components/UpcomingDrop";
import GraceCard from "../assets/images/grace-card.png";
import Studio from "../assets/images/studio.png";
import Moonjelly from "../assets/images/logo/moon-jelly.png";
import Magiceden from "../assets/images/logo/magic-eden.png";
import Digiwaxx from "../assets/images/logo/digiwaxx.png";
import Toolost from "../assets/images/logo/TooLost.png";
import Blockshimi from "../assets/images/logo/block-ship.png";
import SohoHouse from "../assets/images/logo/soho_house.jpeg";
import Decentraland from "../assets/images/logo/decentraland.jpeg";
import Partner1 from "../assets/images/logo/partner1.png";
import Partner2 from "../assets/images/logo/partner2.png";
import Partner3 from "../assets/images/logo/partner3.png";
import Partner4 from "../assets/images/logo/partner4.png";
import Partner5 from "../assets/images/logo/partner5.png";
import Partner6 from "../assets/images/logo/partner6.png";
import Partner7 from "../assets/images/logo/partner7.png";
import Partner8 from "../assets/images/logo/partner8.jpeg";
import Web3 from "../assets/images/web3.png";
import WavWrld from "../assets/images/wavwrld.png";
import TriangleImg1 from "../assets/images/triangleimg1.png";
import Triangle2 from "../assets/images/triangle2.png";
import Triangle3 from "../assets/images/triangle3.png";
import Triangle4 from "../assets/images/triangle4.png";
import Triangle5 from "../assets/images/triangle5.png";
import Triangle6 from "../assets/images/triangle6.png";
import Triangle7 from "../assets/images/triangle7.png";
import Triangle8 from "../assets/images/triangle8.png";
import Triangle9 from "../assets/images/triangle9.png";
import Triangle10 from "../assets/images/triangle10.png";
import Triangle11 from "../assets/images/triangle11.png";
import Triangle12 from "../assets/images/triangle12.png";
import Triangle13 from "../assets/images/triangle13.png";
import Triangle14 from "../assets/images/triangle14.png";
import Triangle15 from "../assets/images/triangle15.png";
import Triangle16 from "../assets/images/triangle16.png";
import Triangle17 from "../assets/images/triangle17.png";
import TriangleImg2 from "../assets/images/triangleimg2.png";
import HomeImages from "../assets/images/home.png";
import JungleRule from "../assets/images/jungle-rules.svg";
import CustomSlider from "../components/CustomSlider";
import PressRelease from "../components/PressRelease";
import { useState } from "react";
import classNames from "classnames";
import { Dropdown } from "../components/Dropdown";
import { motion } from "framer-motion";
import Link from "next/link";
import { MusicWave } from "../components/MusicWave";

const montserrat = Montserrat({ subsets: ["latin"] });
({
  subsets: ["latin"],
  variable: "font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const studioPartners = [
  {
    id: 1,
    img: Moonjelly,
    url: "https://moonjelly.agency/",
  },

  {
    id: 2,
    img: Magiceden,
    url: "https://magiceden.io/",
  },
  {
    id: 3,
    img: Digiwaxx,
    url: "https://www.digiwaxx.com/",
  },
  {
    id: 4,
    img: Toolost,
    url: "https://toolost.com/",
  },
  {
    id: 5,
    img: Blockshimi,
    url: "https://blockshimi.com/",
  },
  {
    id: 6,
    img: SohoHouse,
    url: "https://www.sohohouse.com/houses/soho-beach-house",
  },
  {
    id: 7,
    img: Decentraland,
    url: "https://decentraland.org/",
    width: 80,
  },
];

const partnerArray = [
  { id: 1, img: Partner1, url: "https://warhodl.com/" },
  { id: 2, img: Partner2, url: "https://igniterecordings.com/" },
  { id: 3, img: Partner3, url: "https://wavwrld.com/" },
  { id: 4, img: Partner4, url: "https://www.goodkarmaclub.xyz/" },
  { id: 5, img: Partner5, url: "https://twitter.com/MadDistrictCo" },
  {
    id: 6,
    img: Partner6,
    url: "https://instagram.com/shivibhaiya?igshid=MWI4MTIyMDE=",
  },
  { id: 7, img: Partner7, url: "https://www.instagram.com/highfreqrec/" },
];

const pressReleases = [
  {
    id: 1,
    img: Web3,
    title: "VUZEC: A WEB3 SOLUTION TO THE MUSIC INDUSTRY’S AGE-OLD PROBLEM",
    des: "Our vision is bold. Read.",
    url: "https://www.influencive.com/vuzec-a-web3-solution-to-the-music-industrys-age-old-problem/",
    alt: "NFTt Music Industry",
  },
  {
    id: 2,
    img: WavWrld,
    title: "VUZEC x wavWRLD",
    des: "NFT NYC live music with web3’s biggest musicians & collectives. Jadyn Violet releases his collectors-only NFT NYC performance—the 1st of the 7 curated, intimate experiences to be minted as a live music performance video NFT.",
    url: "https://wavwrld.substack.com/p/wavwrld-presents-wavroom-feat-jadyn",
    alt: "Blockchain Music Streaming",
  },
];

const faqs = [
  {
    id: 1,
    ques: "What is Vuzec?",
    ans: "Vuzec is a decentralized label that allows artists to raise capital and share their royalties with their fans and service providers.",
  },
  {
    id: 2,
    ques: "How does it work?",
    ans:
      'Artists can raise capital by issuing "Notes", which represent a share in their future earnings. Fans and service providers can then purchase these tokens and earn a share of the artist' +
      "'s " +
      "royalties.",
  },
  {
    id: 3,
    ques: "When I purchase a note, what do I get?",
    ans: "When you purchase a note, you are effectively buying a share in an artist's future earnings. You will receive a share of the artist's royalties each time their music is streamed or sold.",
  },
  {
    id: 4,
    ques: "Where are notes stored?",
    ans: "Notes are stored on a decentralized platform, typically a blockchain like Solana. This ensures the security and transparency of the investment.",
  },
  {
    id: 5,
    ques: "How does Vuzec help Artists?",
    ans: "Vuzec provides artists with the access to funding and services they need to succeed, including branding, marketing, and music mastery. Additionally, the Collective's using Vuzec offer assistance with release strategy, track management, and more.",
  },
  {
    id: 6,
    ques: "Why is investing in music a good idea?",
    ans: "investing in music can be a unique and rewarding way to support your favorite artists and potentially earn returns on your investment.",
  },
  {
    id: 7,
    ques: "How can I sell my notes?",
    ans: "Notes can typically be sold on a decentralized exchange, allowing you to cash in on your investment.",
  },
  {
    id: 8,
    ques: "When can I expect royalty payments?",
    ans: "The frequency of royalty payments will depend on the terms of the investment, but they are typically paid out on a regular basis, such as monthly or quarterly.",
  },
  {
    id: 9,
    ques: "When can I expect royalty payments?",
    ans: "The frequency of royalty payments will depend on the terms of the investment, but they are typically paid out on a regular basis, such as monthly or quarterly.",
  },

  {
    id: 10,
    ques: "How does Vuzec ensure fair and transparent royalty distribution?",
    ans: "Vuzec uses decentralized technology and smart contracts to ensure that all royalty payments are made fairly and transparently. This helps to prevent any mismanagement or fraud and ensures that the rights of all parties are protected.",
  },
];

export default function Home() {
  const [more, setMore] = useState(false);
  return (
    <div className={`${montserrat.variable} bg-black w-full h-full`}>
      <Head>
        <meta charSet="UTF-8" />
        <title>
          Music NFT Marketplace | Earn with Music NFTs | Blockchain Music
          Streaming | Vuzec
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Vuzec is the NFT Music Platform. We offer a digital alternative to traditional record labels - giving control back to the artists. So create your first music NFTs with the NFT market for musicians."
        />
        <meta
          name="keywords"
          content="Music NFT Marketplace, Music Blockchain, Music Solana, Music NFT, Music Ownership, NFT Royalties, NFT Royalty, Music NFT, NFT Music Streaming, NFT Music Platform, NFT Musicians"
        />
        <meta
          property="og:title"
          content="Music NFT Marketplace | Earn with Music NFTs | Blockchain Music Streaming | Vuzec"
        />
        <meta
          property="og:description"
          content="Vuzec is the NFT Music Platform. We offer a digital alternative to traditional record labels - giving control back to the artists. So create your first music NFTs with the NFT market for musicians."
        />
        <meta property="og:type" content="event" />
        <meta property="og:url" content="https://www.vuzec.com/" />
        <meta
          name="twitter:title"
          content="Music NFT Marketplace | Earn with Music NFTs | Blockchain Music Streaming | Vuzec"
        />
        <meta
          name="twitter:description"
          content="Vuzec is the NFT Music Platform. We offer a digital alternative to traditional record labels - giving control back to the artists. So create your first music NFTs with the NFT market for musicians."
        />
      </Head>
      {/* <section className="bg-no-repeat bg-home bg-cover h-full pt-44 lg:pt-0 pb-20 lg:h-[1160px] w-full"> */}
      <section className="relative z-0 h-screen pt-44 lg:pt-0 pb-20  md:h-[1160px] w-full flex flex-col items-center">
        <div className="z-10">
          <Image
            src={HomeImages}
            style={{ zIndex: 0 }}
            fill
            className="object-cover"
          />
        </div>
        <div className="!z-30 absolute top-0 flex flex-col justify-center lg:flex-row lg:items-center h-full w-full px-5 md:px-14 max-w-[1500px] mx-auto">
          <div className="flex flex-col gap-8 md:ap-16">
            <div className="w-full max-w-[635px] lg:max-w-[725px] flex flex-col gap-3">
              <h1 className="font-bold text-4xl leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-[85px] text-white">
                INVEST IN THE MUSIC YOU LOVE
              </h1>
              <p className="font-bold text-xl md:text-2xl text-white">
                Don’t just listen to music, be an early supporter and claim the
                benefits along the way.
              </p>
            </div>
          </div>
          <div className="mt-20 lg:mt-[30rem] hidden md:block">
            <UpcomingDrop home />
            <div className="mr-3 mt-3 ">
              <Link href={"https://app.vuzec.com/"} target="_blank">
                <Button className="!text-black">explore</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#B71544] xs:px-7 px-2 sm:px-5 lg:px-0 py-8">
        <div className="flex flex-wrap justify-between max-w-4xl mx-auto font-extrabold text-xs sm:text-sm md:text-2xl lg:text-3xl text-white">
          <p className="cursor-pointer hover:underline underline-offset-8">
            stay tuned
          </p>
          <p>•</p>
          <Link target="_blank" href={"https://twitter.com/vuzecmx"}>
            <p className="cursor-pointer hover:underline underline-offset-8">
              TWITTER
            </p>
          </Link>
          <p>•</p>
          <Link target="_blank" href={"https://www.instagram.com/vuzecmx/"}>
            <p className="cursor-pointer hover:underline underline-offset-8">
              INSTAGRAM
            </p>
          </Link>
          <p>•</p>
          <Link href={"https://twitter.com/vuzecmx"} target="_blank">
            <p className="cursor-pointer hover:underline underline-offset-8">
              DISCORD
            </p>
          </Link>
        </div>
      </section>
      <section className="w-full py-12 md:py-20 xl:py-36">
        <div className="w-full px-5 max-w-7xl mx-auto">
          <div className="top">
            <div className="font-bold text-center sm:text-left text-4xl sm:text-5xl lg:text-6xl xl:text-7xl md:leading-tight xl:leading-tight leading-tight w-full max-w-5xl text-white">
              <p className="md:text-left">OWN THE MUSIC</p>
              <p className="md:text-right">THAT SETS YOUR </p>
              <p>HEART ON FIRE</p>
            </div>
            <p className="w-full text-center sm:text-left max-w-2xl font-bold text-xl md:text-2xl text-white">
              three steps • to get started •
            </p>
          </div>
          <div className="bottom flex w-full flex-wrap xl:flex-nowrap justify-between">
            <div className="left mt-12 flex flex-col gap-8 md:gap-16">
              <div>
                <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-[0.25em] text-[#B71544]">
                  ONE
                </h2>
                <p className="font-bold text-lg sm:text-xl md:text-2xl leading-7 text-white">
                  browse drops.
                </p>
              </div>
              <div>
                <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-[0.25em] text-[#B71544]">
                  TWO
                </h2>
                <p className="font-bold text-lg sm:text-xl md:text-2xl leading-7 text-white">
                  support an artist and buy a share of a
                  <span className="text-[#FC7BA1]"> song. </span>
                </p>
              </div>
              <div>
                <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-[0.25em] text-[#B71544]">
                  THREE
                </h2>
                <p className="font-bold text-lg sm:text-xl md:text-2xl leading-7 text-white">
                  listen, grow, and claim your benefits along the way.
                </p>
              </div>
            </div>
            <div className="flex md:hidden flex-col items-center gap-4 mt-10 mx-auto">
              <div className="1 grid grid-cols-3 gap-4">
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={TriangleImg1}
                    alt="NFT Music"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle2}
                    alt="Music NFT"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle3}
                    alt="NFT Musicians"
                  />
                </div>
              </div>
              <div className="2 grid grid-cols-4 gap-4">
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle4}
                    alt="NFT Music Crypto"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle5}
                    alt="Audius Tiktok"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle6}
                    alt="NFT in Music"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle7}
                    alt="NFT Royalties"
                  />
                </div>
              </div>
              <div className="3 grid grid-cols-5 gap-4">
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle8}
                    alt="img1"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle9}
                    alt="Buy NFT Music"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle10}
                    alt="Selling Music NFT"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle11}
                    alt="NFT Music Site"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle12}
                    alt="Audius NFT"
                  />
                </div>
              </div>
              <div className="4 grid grid-cols-6 gap-4">
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle13}
                    alt="Opensea Royalties"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle14}
                    alt="Music Blockchain"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle15}
                    alt="NFT Music Meaning"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle16}
                    alt="NFT Music Platform"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle17}
                    alt="NFT Music Streaming"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle10}
                    alt="NFT Music for Sale"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-8 justify-center">
                <div className="w-full max-w-[18rem] sm:max-w-[26rem] md:max-w-full self-center overflow-hidden">
                  <MusicWave />
                </div>
                <div className="w-f flex flex-col gap-4 items-center max-w-sm">
                  <div>
                    <Image
                      src={Story}
                      alt="NFT Musicians"
                      className="!rounded-[13px]"
                    />
                  </div>
                  <h1 className="font-bold text-4xl text-white">The Story</h1>
                  <p className="font-normal text-3xl text-white">Vuzec</p>
                  <div className="mt-4 w-full">
                    <Link
                      href={"https://app.vuzec.com/"}
                      className="flex justify-center"
                      target="_blank"
                    >
                      <Button className="!text-black">explore</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="right mx-auto xl:mx-0 mt-10 xl:-mt-20 hidden md:flex flex-col items-center gap-4">
              <div className="1 grid grid-cols-3 gap-4">
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={TriangleImg1}
                    alt="img1"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle2}
                    alt="img1"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle3}
                    alt="img1"
                  />
                </div>
              </div>
              <div className="2 grid grid-cols-4 gap-4">
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle4}
                    alt="NFT Music Crypto"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle5}
                    alt="Audius Tiktok"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle6}
                    alt="NFT in Music"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle7}
                    alt="NFT Royalties"
                  />
                </div>
              </div>
              <div className="3 flex gap-4 w-full">
                <div className="flex flex-col  lg:ml-9 xl:ml-0 gap-4">
                  <div className="flex gap-4 ml-28">
                    <div>
                      <Image
                        className="hover:scale-110 transition-all ease-in-out"
                        src={Triangle8}
                        alt="img1"
                      />
                    </div>
                    <div>
                      <Image
                        className="hover:scale-110 transition-all ease-in-out"
                        src={Triangle9}
                        alt="Buy NFT Music"
                      />
                    </div>
                    <div>
                      <Image
                        className="hover:scale-110 transition-all ease-in-out"
                        src={Triangle10}
                        alt="Selling Music NFT"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 ml-14">
                    <div>
                      <Image
                        className="hover:scale-110 transition-all ease-in-out"
                        src={Triangle11}
                        alt="NFT Music Site"
                      />
                    </div>
                    <div>
                      <Image
                        className="hover:scale-110 transition-all ease-in-out"
                        src={Triangle12}
                        alt="Audius NFT"
                      />
                    </div>
                    <div>
                      <Image
                        className="hover:scale-110 transition-all ease-in-out"
                        src={Triangle13}
                        alt="Opensea Royalties"
                      />
                    </div>
                    <div>
                      <Image
                        className="hover:scale-110 transition-all ease-in-out"
                        src={TriangleImg2}
                        alt="Audius Blockchain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-full ml-2 max-w-[215px]">
                  <div className="relative w-[215px] h-[215px]">
                    <Image
                      className="hover:scale-110 rounded-xl transition-all ease-in-out object-cover "
                      src={Story}
                      alt="NFT Musicians"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="5 grid grid-cols-7 w-full gap-4 xl:ml-[86px]">
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle15}
                    alt="NFT Music Meaning"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle16}
                    alt="NFT Music Platform"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle17}
                    alt="NFT Music Streaming"
                  />
                </div>
                <div>
                  <Image
                    className="hover:scale-110 transition-all ease-in-out"
                    src={Triangle14}
                    alt="Music Blockchain"
                  />
                </div>
                <div className="col-span-3 w-full flex flex-col gap-4 ml-2">
                  <h1 className="font-bold text-4xl text-white">The Story</h1>
                  <p className="font-normal text-3xl text-white">Vuzec</p>
                </div>
              </div>
              <div className=" grid grid-cols-8 w-full mr-[70px] gap-4">
                <div className="col-span-5 h-full relative self-center overflow-x-hidden ml-9 lg:ml-0">
                  <div className="">
                    <MusicWave animationStyle={"justify-end"} />
                  </div>
                </div>
                <div className="col-span-3">
                  <Link href={"https://app.vuzec.com/"} target="_blank">
                    <Button className="!text-black">explore</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative">
        <div className="relative h-[736px] w-full  bg-cover bg-no-repeat bg-[50%_60%]">
          {/* <div className="relative h-[736px] w-full bg-graceBg bg-cover bg-no-repeat bg-[50%_60%]"> */}
          <div className="absolute bottom-0 z-20 h-80 w-full" />
          <div className="relative z-30 mx-auto flex h-[736px] max-w-7xl flex-col justify-end p-8 pb-16 text-white md:pb-16">
            <p className="text-2xl">
              “Vuzec has <span className="font-semibold">changed</span> what it
              means to be an independent artist.”
            </p>
            <h2 className="mt-6 text-5xl font-semibold">Grace Weber</h2>
            <p className="mt-1 text-2xl text-gray-500">
              Best Rap Album at the 2017 GRAMMY® Awards
            </p>
            <motion.div
              className=" hidden h-[500px] w-[377px] rounded-[29px] bg-white p-9 shadow-[0_8px_50px_0_rgba(0,0,0,0.1)] lg:absolute lg:top-2/4 lg:right-4 lg:block "
              initial={{ y: 100, visibility: "hidden" }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ y: 0, visibility: "visible" }}
              transition={{ duration: 1 }}
            >
              <Image src={GraceCard} alt="Music Ownership" className="" />
              <div className="mt-6">
                <span className="text-3xl font-bold leading-9 text-black">
                  Played Yourself
                </span>
                <br />
                <span className="mt-3 font-normal leading-[30px] text-[25] text-black">
                  Grace Weber
                </span>
                <div className="mt-2 flex gap-2">
                  <button className="rounded-[99px] bg-[#F0F0F0] py-1 px-4 font-sans text-[16px] font-medium leading-5 text-[#1D1D1D] opacity-60">
                    Pop
                  </button>
                  <button className="rounded-[99px] bg-[#F0F0F0] py-1 px-4 font-sans text-[16px] font-medium leading-5 text-[#1D1D1D] opacity-60">
                    Single
                  </button>
                  <button className="rounded-[99px] bg-[#F0F0F0] py-2 px-4 font-sans text-[16px] font-medium leading-5 text-[#1D1D1D] opacity-60">
                    2020
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center px-3 xs:px-0">
          <div className="lg:hidden rounded-[29px] bg-white px-4 pt-4 shadow-[0_8px_50px_0_rgba(0,0,0,0.1)] relative -top-1/4">
            <Image src={GraceCard} alt="Music Ownership" className="" />
            <div className="mt-6">
              <span className="text-3xl font-bold leading-9 text-black">
                Played Yourself
              </span>
              <br />
              <span className="mt-3 font-normal leading-[30px] text-[25] text-black">
                Grace Weber
              </span>
              <div className="mt-2 flex gap-2">
                <button className="rounded-[99px] bg-[#F0F0F0] py-1 px-4 font-sans text-[16px] font-medium leading-5 text-[#1D1D1D] opacity-60">
                  Pop
                </button>
                <button className="rounded-[99px] bg-[#F0F0F0] py-1 px-4 font-sans text-[16px] font-medium leading-5 text-[#1D1D1D] opacity-60">
                  Single
                </button>
                <button className="rounded-[99px] bg-[#F0F0F0] py-2 px-4 font-sans text-[16px] font-medium leading-5 text-[#1D1D1D] opacity-60">
                  2020
                </button>
              </div>
            </div>
            <div className="mt-10 flex justify-end">
              {/* <div className="flex flex-col">
                <span className="text-sm font-normal text-black opacity-60">
                  Price
                </span>
                <span className="text-right text-[48px] font-bold leading-[58px] text-[#000000]">
                  $12.53
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 px-5 w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-14">
          <div className="relative w-full">
            <Image src={Studio} alt="studio" />
          </div>
          <div className="w-full max-w-4xl mx-auto font-bold text-center sm:text-left text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight text-[#9DBCE1]">
            <p className="text-left">PAIRING ARTISTS</p>
            <p className="text-right">
              WITH THE BEST <br /> TALENT.
            </p>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl text-white">
              Vuzec’s Studio offers a curated selection of services from
              industry professionals:
            </p>
          </div>
          <div className="w-full flex flex-col gap-8 max-w-md mx-auto font-semibold text-2xl md:text-3xl text-center text-white">
            <p>MARKETING</p>
            <p>BRANDING</p>
            <p>MIXING/MASTERING</p>
            <p>
              SOCIAL MEDIA <br /> MANAGEMENT
            </p>
            <p>PLAYLISTING</p>
            <div className={classNames(more ? "block" : "hidden")}>
              <p className="uppercase">Touring</p>
              <p className="uppercase">Content Creation</p>
            </div>
            <p className="cursor-pointer" onClick={() => setMore(!more)}>
              {!more ? "+" : "-"}
            </p>
          </div>
        </div>
      </section>
      <section className="partner-slider w-full mt-16 bg-white py-7">
        <CustomSlider partners={studioPartners} studiopartner />
      </section>
      <section className="w-full py-12 md:py-24">
        <div className="w-full flex flex-col gap-16">
          <div className="top px-5 w-full max-w-6xl flex flex-col gap-8 md:gap-16 mx-auto">
            <h1 className="font-bold md:text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
              COLLECTIVES
            </h1>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] md:text-right max-w-5xl text-white">
              Vuzec will ensure you have a dedicated and{" "}
              <br className="hidden md:block" /> experienced team on your side,
              helping you reach your <br className="hidden md:block" /> full
              potential as an artist.
            </p>
          </div>
          <div className="bottom mt-10 relative flex justify-center items-center">
            <div className="w-full bg-[#B71544] h-11"></div>
            <div className="collectives absolute w-full md:pl-6 -top-14 mx-auto">
              <CustomSlider partners={partnerArray} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-32 px-5">
        <div>
          <PressRelease pressReleases={pressReleases} />
        </div>
      </section>
      <section>
        <div className="max-w-screen-2xl w-full mx-auto sm:px-16 px-5 pt-6">
          <h1 className="uppercase text-center text-[#ffffff] text-[70px] leading-[85px] font-bold mb-8">
            faq
          </h1>
          {faqs.map((faq) => (
            <Dropdown
              key={faq.id}
              answer={faq.ans}
              quastion={faq.ques}
              textColor="white"
              border="white"
              open={faq.id === 2 ? true : false}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
