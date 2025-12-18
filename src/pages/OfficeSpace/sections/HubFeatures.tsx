import React from 'react'
import  { FaCar, FaPlug, FaWifi } from 'react-icons/fa'

 

export const HubFeatures:React.FC  = () => {

    const features =[
        {
            id: 1,
            feat_icon: <FaWifi className='text-[#88CA4E] text-2xl lg:text-4xl' />,
            feat_title: 'Fast Internet',
            feat_desc: 'High-speed internet access necessary for remote work, communication, and digital business operations.'
        },
        {
            id: 2,
            feat_icon: <FaPlug className='text-[#88CA4E] text-2xl lg:text-4xl' />,
            feat_title: '24/7 Power Supply',
            feat_desc: 'Continuous, reliable electricity around the clock, ensuring disruption to work.'
        },
        {
            id: 3,
            feat_icon: <FaCar className='text-[#88CA4E] text-2xl lg:text-4xl' />,
            feat_title: 'Car Park',
            feat_desc: 'Dedicated, safe area for vehicle parking, providing convenience for members and visitors.'
        },
    ]

  return (
    <section className='bg-[#F5F5F5] h-auto pt-16 lg:pt-24'>
        <h3 className="text-4xl text-center font-bold bg-linear-to-b from-[#016B83] to-[#00181D] bg-clip-text text-transparent mb-10 lg:mb-[1em]">
       Hub’s Features   
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-16 lg:pb-24 justify-items-center mb-10 lg:mx-[3em]"> 
        {
            features.map((item) => (
                <div key={item.id} 
                className="max-w-[325px] rounded-[15px] bg-[#FFFFFF] h-[297px] p-6 text-center flex justify-center items-center flex-col"
      style={
        {
            boxShadow: '0px 4px 4px 0px #00000040'
        }
      }>
                    <div className='flex justify-center items-center bg-black/10 p-4 w-20 h-20 mb-1 rounded-full mx-auto'>{item.feat_icon}</div>
                    <h4 className=' text-[#00181D] text-xl font-medium mb-4'>{item.feat_title}</h4>
                    <p className='text-[#333333] text-[16px] font-normal'>
                        {item.feat_desc}
                    </p>
                </div>
            ))
        }
      </div>
    </section>
  )
}
