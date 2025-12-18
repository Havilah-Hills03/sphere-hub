import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa'
import img1 from '../assets/event1.jpg'
import img2 from '../assets/event1.jpg'


export interface HeroSliderProps {
  Infinite?: boolean;
  Speed?: number;
  Fade?: boolean;
  Autoplay?: boolean;
  Arrows?: boolean;
  AutoplaySpeed?: number;
  Dots?: boolean;
} 

  const carouselSettings = {
    infinite: true,
    speed: 600,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 }},
      { breakpoint: 640, settings: { slidesToShow: 1 }},
    ]
  };

export const Whathappening: React.FC<HeroSliderProps> = () => {
  const content = [
    {
      id: 1,
      title: 'Summer Class',
      desc: 'Lorem ipsum dolor sit amet consectetur. Sit proin purus vel integer. Amet lorem ipsum consectetur quis quam. Odio suspendisse sit nullam eget ac ac senectus. Eget nibh bibendum vestibulum morbi tellus felis bibendum.',
      locationIcon: 'Location',
      Address: 'FutureSphere Hub',
      dateIcon: 'Start Date',
      date: '5th December, 2025',
      durationIcon: 'Duration',
      duration: '2 weeks',
      agerangeIcon: 'Age Range',
      ageRange: '6 - 14 years',
      cta: 'Enroll Now',
      img: img1
    },
     {
      id: 2,
      title: 'Tech Bootcamp',
      desc: 'Join our intensive hands-on technology training for kids & teens...',
      locationIcon: 'Location',
      Address: 'FutureSphere Hub',
      dateIcon: 'Start Date',
      date: '12th December, 2025',
      durationIcon: 'Duration',
      duration: '1 week',
      agerangeIcon: 'Age Range',
      ageRange: '10 - 18 years',
      cta: 'Register Now',
      img: img2
    }
  ]

  

  return (
    <section className="px-6 lg:px-32 py-12">
      
      {/* Section Title */}
      <h3 className="text-4xl text-center font-bold bg-linear-to-b from-[#016B83] to-[#00181D] bg-clip-text text-transparent mb-10 lg:mb-[2em]">
        What’s Happening
      </h3>

      {/* Events */}
      <Slider {...carouselSettings}>
        {content.map((item) => (
      <div> 
          <div
            key={item.id}
            className="bg-white rounded-xl flex flex-col md:flex-row items-center justify-center overflow-hidden lg:gap-16"
          >

                {/* Left Content */}
                <div className="p-6 flex  justify-between md:w-1/2">
                  
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-4">
                      {item.title}
                    </h3>

                    <p className="text-[#333333] text-lg mb-6">
                      {item.desc}
                    </p>

                    {/* Details List */}
                  {/* Details List */}
                    <ul className="space-y-4 my-8">

            {/* Location */}
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#88CA4E] text-lg" />

              <div className="flex flex-col md:flex-row md:justify-between w-full">
                <p className="text-lg font-medium text-[#333333]">{item.locationIcon}</p>
                <p className="text-lg font-medium text-[#333333]">{item.Address}</p>
              </div>
            </li>

            {/* Date */}
            <li className="flex items-start gap-3">
              <FaCalendarAlt className="text-[#88CA4E] text-lg" />

              <div className="flex flex-col md:flex-row md:justify-between w-full">
                <p className="text-lg font-medium text-[#333333]">{item.dateIcon}</p>
                <p className="text-lg font-medium text-[#333333]">{item.date}</p>
              </div>
            </li>

        {/* Duration */}
        <li className="flex items-start gap-3">
          <FaClock className="text-[#88CA4E] text-lg" />

          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <p className="text-lg font-medium text-[#333333]">{item.durationIcon}</p>
            <p className="text-lg font-medium text-[#333333]">{item.duration}</p>
          </div>
        </li>

        {/* Age Range */}
        <li className="flex items-start gap-3">
          <FaUser className="text-[#88CA4E] text-lg" />

          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <p className="text-lg font-medium text-[#333333]">{item.agerangeIcon}</p>
            <p className="text-lg font-medium text-[#333333]">{item.ageRange}</p>
          </div>
        </li>

            </ul>

                        {/* Button */}
                    <button className="mt-6 bg-[#88CA4E] text-[#294D58]   transition px-10 py-3 rounded-lg text-lg font-bold w-fit">
                      {item.cta}
                    </button>
                    </div>

                  
                  </div>

                  {/* Right Image */}
                  <div className="md:w-[40%] flex justify-end items-end">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-[578px] rounded-[50px] object-cover" 
                    />
                  </div>

                </div> 
      </div>
         ))}
      </Slider>
    </section>
  )
}
