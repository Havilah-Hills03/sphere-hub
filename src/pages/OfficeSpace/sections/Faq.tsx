import React from 'react'
import { Faq_card } from '../../../components/FaqCard' 

export const Faq:React.FC = () => {
const Access_faq_data = [
  {
    id: 1,
    faq_headTxt: 'What are the hub’s standard operating hours?',
    faq_txt:
      'Our standard operating hours are from 8:00 AM to 6:00 PM, Monday through Friday. Access outside these hours is currently unavailable.'
  },
  {
    id: 2,
    faq_headTxt: 'If I leave during the day, can I return before the day runs out?',
    faq_txt:
      'Yes. Members are allowed to leave and return within the same day, provided it is within the hub’s operating hours.'
  },
  {
    id: 3,
    faq_headTxt: 'Is the hub space open overnight or for late-night access?',
    faq_txt:
      'No. At this time, the hub does not offer overnight or late-night access. All activities must take place within regular operating hours.'
  },
  {
    id: 4,
    faq_headTxt: 'Do you operate on weekends (Saturday and Sunday)?',
    faq_txt:
      'Currently, the hub does not operate on weekends. Our services are available from Monday to Friday only.'
  },
];

const technology_faq_data = [
  {
    id: 1,
    faq_headTxt: 'How reliable and stable is the internet connection?',
    faq_txt:
      'The hub provides a high-speed and stable internet connection designed to support remote work, meetings, and digital collaboration.'
  },
  {
    id: 2,
    faq_headTxt: 'How is the electricity supply managed?',
    faq_txt:
      'We maintain a reliable power supply through a combination of public electricity and backup power solutions to ensure minimal disruption.'
  },
];

const community_faq_data = [
  {
    id: 1,
    faq_headTxt: 'Can I network and socialize with other hub members?',
    faq_txt:
      'Yes. The hub encourages collaboration, networking, and social interaction through shared spaces, events, and community activities.'
  },
];


  return ( 
       <section className=" px-6 lg:px-[130px] md:pb-[80px] bg-[#F2F2F2] pb-10 faq py-11">
      <div className="lg:px-12 lg:pb-20 pb-10 md:pb-4"> 
      <h2 className="text-center  lg:text-[40px] font-bold bg-gradient-to-b from-[#016B83] to-[#00181D] bg-clip-text text-transparent mb-6">Frequently Asked Questions</h2>
    <p className="lg:text-[24px] font-medium  text-center mb-2 text-[#333333] leading-4">
        Answers to your Space Questions
    </p>
      </div>
  <div className='lg:flex  justify-between items-start border border-[#88CA4E] rounded-[15px] p-5'>
        <div className="text-center mb-10     ">
        <h6 className="text-[24px] font-[500]  text-center lg:text-left text-[#333333]">Access and Availability</h6> 
    <div className=' text-center lg:text-left'>
          
    </div>
      </div>

      <div className="space-y-4 max-w-[606px]  lg:mx-end ">
        {Access_faq_data.map((item) => (
          <Faq_card
            key={item.id}
            faq_headText={item.faq_headTxt}
            faq_content_text={item.faq_txt}
          />
        ))}
      </div>
  </div>


  <div className='lg:flex  justify-between items-start border border-[#88CA4E] rounded-[15px] p-5 my-6'>
        <div className="text-center mb-10     ">
        <h6 className="text-[24px] font-[500]  text-center lg:text-left text-[#333333]"> Technology & Infrastructure</h6> 
    <div className=' text-center lg:text-left'>
          
    </div>
      </div>

      <div className="space-y-4 max-w-[606px]  lg:mx-end ">
        {technology_faq_data.map((item) => (
          <Faq_card
            key={item.id}
            faq_headText={item.faq_headTxt}
            faq_content_text={item.faq_txt}
          />
        ))}
      </div>
  </div>


  <div className='lg:flex  justify-between items-start border border-[#88CA4E] rounded-[15px] p-5'>
        <div className="text-center mb-10     ">
        <h6 className="text-[24px] font-[500]  text-center lg:text-left text-[#333333]">Community & Networking</h6> 
    <div className=' text-center lg:text-left'>
          
    </div>
      </div>

      <div className="space-y-4 max-w-[606px]  lg:mx-end ">
        {community_faq_data.map((item) => (
          <Faq_card
            key={item.id}
            faq_headText={item.faq_headTxt}
            faq_content_text={item.faq_txt}
          />
        ))}
      </div>
  </div>
    </section>
  )
}
