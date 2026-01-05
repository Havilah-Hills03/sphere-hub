import React from "react";
import { slideData } from "../util/heroSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../components/Button";
import { FaArrowRight } from "react-icons/fa";

export interface HeroSliderProps {
  Infinite?: boolean;
  Speed?: number;
  Fade?: boolean;
  Autoplay?: boolean;
  Arrows?: boolean;
  AutoplaySpeed?: number;
  Dots?: boolean;
}

const HeroSlider: React.FC<HeroSliderProps> = () => {
  const heroSettings = {
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    dots: true,
  };
  

  return (
    <div className="relative">
      <Slider {...heroSettings}>
        {slideData.map((slide, i) => (
          <div key={i}>
            <section
              id="home"
              aria-label={slide.title}
              className="
                h-[85vh] lg:h-screen
                flex items-end justify-start
                px-4 sm:px-6 md:px-20
                text-white bg-cover bg-center
                pb-16 lg:pb-[7.3em] lg:pl-[7em]
              "
              style={{
                backgroundImage: `linear-gradient( rgba(41, 77, 88, 0.5), rgba(41, 77, 88, 0.5)), url(${slide.img})`,
              }}
            >
              <div className="max-w-[700px] space-y-4 sm:space-y-6 animate-fade-in-up">
                
                {/* Title */}
                <h1 className="text-2xl lg:text-[64px] font-[900] tracking-wide leading-tight lg:leading-[70px]">
                  <span className="text-[#88CA4E]">{slide.span}</span>
                  <br className="hidden lg:block" />
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className=" text-lg lg:text-[24px] text-[#F5F5F5] leading-8 font-medium max-w-xl">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-6 sm:gap-10">
                  <Button
                    text={
                      <span className="flex items-center gap-2">
                        Get Started
                        <FaArrowRight />
                      </span>
                    }
                    className="lg:inline-block w-full bg-[#88CA4E] text-[#294D58] flex flex-col justify-center items-center"
                  />

                  <Button
                    text="Join the Community"
                    className="border border-[#88CA4E] border-[4px] text-[#88CA4E] hover:bg-white  lg:w-[300px] w-full flex flex-col justify-center items-center "
                  />
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
