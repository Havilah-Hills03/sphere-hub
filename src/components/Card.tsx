import React from 'react'


interface cardProps {
    image: string,
    cardTitle?: string,
    cardDesc: string,
    className: string,
    text: string,
    btnClassname: string,
    cardClass: string 

}


export const Card:React.FC<cardProps > = ({image , cardTitle , cardDesc , className , text , cardClass , btnClassname}) => {
  return (
    <div className={`max-w-[560px] h-auto  card ${cardClass}`} 
    >
        <div className="cardImg rounded-4xl">
            <img src={image} alt="" className="rounded-t-4xl  h-[246px] w-full object-cover" />
        </div>
        <div className={`cardBody ${className} rounded-b-4xl`}>
            <h4 className='text-[#294D58] text-2xl font-bold'>{cardTitle}</h4>
            <p className='text-[18px] font-[400] text-[#333333]  mb-4'>{cardDesc}</p>
             <button className={`${btnClassname}  bg-[#88CA4E] text-[#294D58] hover:bg-white transition px-4 py-2  rounded-lg text-lg lg:px-10 font-bold`}>
                 {text}
             </button>
        </div>
    </div>
  )
}
