import React from 'react'
import { Button } from '../components/Button'
import joinBanner from '../assets/joinBg.jpg'
import { FaArrowRight } from 'react-icons/fa'


export const JoinSection:React.FC = () => {
  return (
    <section className='relative h-[80vh] flex flex-col justify-center items-center text-center '
    
    style={{
        backgroundImage: `url(${joinBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
            <p className='text-[24px] font-[500] text-white relative z-999 mb-6 p-4'>
                Become part of a vibrant community of builders, founders, and professionals shaping the <br /> future of business in Nigeria.
            </p>
            <Button text={
            // '  Join for Free'
            <span className='flex items-center gap-2'>
              Join for Free
               <FaArrowRight />
            </span>
            }
            
            className='bg-[#88CA4E]  text-[#294D58] relative z-999' />

            <div className='bg-black/60 absolute inset-0'></div>
    </section>
  )
}
