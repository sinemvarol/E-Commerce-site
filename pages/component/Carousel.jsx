import Image from "next/image";
import React from "react";
import Title from "pages/component/layout/UserInterface/Title";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 30000,
        appenDots: (dots) => (
          <div>
            <ul>{dots}</ul>
          </div>
        ),
        customPaging: (i) => (
          <div className="w-3 h-3 border bg-secondary rounded-full mt-10"></div>
        ),
      };
    return (
        <div className="h-screen w-full container mx-auto -mt-[88px]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="relative h-full w-full">
              <Image
                src="/images/arkaplan3.png"
                alt=""
                fill
                priority
                style={{objectFit:"cover"}}
              />
            </div>
          </div>
          <Slider {...settings}>
        <div>
          <div className="mt-48  text-secondary flex flex-col items-start gap-y-10">
            <Title addClass="text-4xl">Discover the Art of Delicious Food</Title>
            <p className="text-sm sm:w-2/5 w-full">
            Discover the convenience of ordering your favorite meals from the comfort of your own home or office. With our user-friendly interface, you can effortlessly browse through our menu, explore tempting options, and customize your orders to suit your preferences. Our online platform is available 24/7, bringing you the joys of dining out without leaving your doorstep.
            </p>
            <button className="btn-primary">Choose Your Feast</button>
          </div>
        </div>
        <div>
          <div className="relative text-secondary top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-4xl">Delicious tastes are waiting you.</Title>
            <p className="text-sm sm:w-2/5 w-full">
            Quality and freshness are at the heart of everything we do. We source the finest ingredients from trusted suppliers and prioritize sustainable practices to ensure that every bite is a celebration of taste and ethics.
            </p>
            <button className="btn-primary">Choose Your Feast</button>
          </div>
        </div>
      </Slider>
        </div>
      );
  };

export default Carousel;