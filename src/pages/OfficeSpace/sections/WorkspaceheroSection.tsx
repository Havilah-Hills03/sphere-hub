import React from 'react'
import heroBanner from '../../../assets/offiiceSpace.jpg'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '../../../components/Button'

export const HeroSection:React.FC = () => {
  return (
   <section
                     id="home" 
                     className="
                       h-[85vh] lg:h-screen
                       flex items-end justify-start
                       px-4 sm:px-6 md:px-20
                       text-white bg-cover bg-center
                       pb-10 lg:pb-[9em]
                     "
                     style={{
                       backgroundImage: `linear-gradient( rgba(41, 77, 88, 0.5), rgba(41, 77, 88, 0.5)), url(${heroBanner})`,
                     }}
                   >
                     <div className="max-w-[750px] space-y-4 sm:space-y-6 animate-fade-in-up">
                       
                       {/* Title */}
                       <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-[900] tracking-wide leading-tight lg:leading-18">
                         <span className="text-[#88CA4E]"> Work.</span>
                         <br />
                        Meet. <br /> Collaborate.
                       </h1>
       
                       {/* Subtitle */}
                       <p className="  lg:text-[24px] font-medium max-w-xl">
                        Discover the most inspiring coworking and meeting spaces for founders, creators, and teams in Port Harcourt.
                       </p>
       
                       {/* CTA Buttons */}
                       <div className="flex flex-wrap gap-6 sm:gap-10">
                         <Button
                           text={
                             <span className="flex items-center gap-2">
                              Book a Tour
                               <FaArrowRight />
                             </span>
                           }
                           className="inline-block bg-[#88CA4E] text-[#294D58]"
                         /> 
                       </div>
                     </div>
                   </section> 
  )
}
