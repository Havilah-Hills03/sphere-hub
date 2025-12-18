import React from 'react'
import { Card } from '../components/Card'
import img1 from '../assets/digitalSkill.jpeg'
import img2 from '../assets/startup.jpeg'
import img3 from '../assets/sme.jpg'
import img4 from '../assets/dedicatedDesk.jpg'



export const ChoosePath:React.FC = () => {
  const cardData = [
    {id: 1, 
    img: img1, 
    title: 'Digital Skills Training', 
    desc: 'Build in-demand digital skills through hands-on training programs designed for entrepreneurs, professionals, and young talents. Learn practical tools that improve productivity, employability, and business growth in today’s digital economy.',
    buttonText: 'Enroll Now',
    classname: 'hover:bg-[#88CA4E] border border-[#88CA4E] cursor-pointer p-6'
  },
   {id: 2, 
    img: img2, 
    title: 'Start Up Incubation', 
    desc: 'Turn your idea into a scalable business with structured incubation support. Get access to mentorship, resources, guidance, and a supportive community to help you validate, build, and grow your startup from concept to market.',
    buttonText: 'Enroll Now',
        classname: 'border border-[#88CA4E] hover:bg-[#88CA4E]  cursor-pointer p-6'
  },
   {id: 3, 
    img: img3, 
    title: 'MSME Digitalisation', 
    desc: 'We help micro, small, and medium enterprises adopt digital tools that streamline operations and increase visibility. From online presence to digital payments and workflow automation, we support your transition into the digital space.',
    buttonText: 'Book a Consultation',
        classname: 'border border-[#88CA4E] hover:bg-[#88CA4E]  cursor-pointer p-6'
  },
   {id: 4, 
    img: img4, 
    title: 'Office Spaces', 
    desc: 'Access flexible and well-equipped workspaces designed for productivity, collaboration, and innovation. Whether you need a desk, meeting room, or shared space, our hub provides a professional environment to support your work.',
    buttonText: 'Book Now',
        classname: 'border border-[#88CA4E] hover:bg-[#88CA4E]  cursor-pointer p-6'
  },
  ]
  return (
    <section className=' flex flex-col justify-center items-center lg:my-[4em] my-6'>
        <h3 className=' bg-linear-to-b from-[#016B83] to-[#00181D] bg-clip-text  text-transparent mb-2.5'>Choose your Path</h3>
        <p className='text-[#333333] text-lg mb-10 font-bold'>Our Services</p>

        {/* card container  */}

        <div className='grid lg:grid-cols-2 justify-center items-center lg:space-x-6 gap-y-6 p-2'>
          {
             cardData.map((item) => (
              <div key={item.id}  className='rounded-4xl'>
                  <Card 
                  image={item.img}
                  cardTitle={item.title}
                  text={item.buttonText}
                  cardDesc={item.desc}
                  className={item.classname}
                  btnClassname=''
                  cardClass="rounded-4xl"
                  />
              </div>
             ))
          }
        </div>
    </section>
  )
}
