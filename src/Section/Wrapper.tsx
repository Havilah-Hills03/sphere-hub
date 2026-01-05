import React from 'react'

export const Wrapper:React.FC = () => {
    const stat = [
        {id:1, number: '2000+', text: 'Trained professionals'},
        {id:2, number: '150+', text: 'Startups supported'},
        {id:3, number: '500+', text: 'MSMEs digitized'},
        {id:4, number: '90%', text: 'Job placement rate'},
    ]
  return (
    <section className='h-auto p-6 lg:p-14 text-center flex flex-col text-white justify-center items-center ' 
    style={{
        background: 'linear-gradient(180deg, #016B83 0%, #00181D 100%)'
    }}
    >
        <h3 className=' lg:text-[40px]'>Why Futuresphere</h3>
        <p className='text-[18px] font-[400] my-4'>
            We exist to help every business — from startups to family-run MSMEs — build capacity, digitize, and scale sustainably
        </p>
        <div className='grid lg:grid-cols-4 grid-cols-2 my-4 lg:gap-14 gap-6'>
            {
                stat.map((item) => (
                    <div key={item.id} className="text-center">
                        <h3 className='text-[#88CA4E] leading-6'>{item.number}</h3>
                        <p className='lg:text-[16px] text-[14px]'>{item.text}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
