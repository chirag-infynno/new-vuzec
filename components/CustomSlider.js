import Image from 'next/image'
import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Link from 'next/link'

const CustomSlider = ({ partners, studiopartner }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    dots: false,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1730,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="w-full">
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id}>
            <Link href={partner.url} target="_blank">
              {studiopartner ? (
                <div className="!flex !justify-center h-16">
                  <Image
                    src={partner.img}
                    height={partner.height || 64}
                    width={partner.width || 'auto'}
                    alt="partner"
                  />
                </div>
              ) : (
                <Image src={partner.img} alt="partner" />
              )}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CustomSlider
