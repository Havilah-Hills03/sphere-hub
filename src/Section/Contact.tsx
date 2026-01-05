import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export const Contact: React.FC = () => {
  return (
    <section
      className="min-h-[90vh] px-6 lg:px-32 py-12 text-center"
      style={{
        background: "linear-gradient(180deg, #016B83 0%, #00181D 100%)"
      }}
    >
      {/* Header Text */}
      <h3 className="text-4xl font-bold text-white mb-3">Contact Us</h3>
      <p className="text-white text-[18px] max-w-3xl mx-auto mb-10 lg:mb-[4em]">
        Have questions about our programs, services, or spaces? We’d love to hear from you.
      </p>

      {/* Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Form Section */}
        <form className="border border-[#88CA4E] p-6 rounded-xl lg:min-w-10/14 ">
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 rounded-md bg-white text-[#00181D] font-[400]  text-[18px]"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-md bg-white  text-[#00181D] font-[400] text-[18px]"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full mb-4 p-3 rounded-md bg-white  text-[#00181D] font-[400]  text-[18px]"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full mb-6 p-3 rounded-md bg-white  text-[#00181D] font-[400]  text-[18px]"
          ></textarea>

         <div className='flex justify-start'>
           <button
            type="submit"
            className="bg-[#88CA4E] text-[#294D58] hover:bg-white transition px-10 py-2 rounded-lg text-lg font-bold"
          >
            Send
          </button>
         </div>
        </form>

        {/* Contact Details */}
        <div className="space-y-6">

          {/* Address */}
          <div className="border border-[#88CA4E] p-6 rounded-xl text-center flex justify-center items-center gap-3"> 
            <div className='flex justify-center items-center flex-col'>
            <FaMapMarkerAlt className="text-[#88CA4E] text-2xl mt-1" />
              <p className="text-[24px] font-[500] text-white my-3">Our Address</p>
              <p className="text-white lg:px-22">
                Futuresphere BIHub, 2nd Floor, Matoris Place, Chief G U Ake Road,
                Eliozu, Port Harcourt 500021
              </p>
            </div>
          </div>

         <div className='flex gap-4'>
             {/* Call Us */}
          <div className="border border-[#88CA4E] w-1/2  p-6 rounded-xl lg:h-[250px]  text-center  flex justify-center items-center gap-3"> 
            <div className='flex flex-col gap-4'>
                <FaPhoneAlt className="text-[#88CA4E] text-2xl mt-1 mx-auto" />
              <p className="text-[24px] font-[500] text-white mb-2">Call Us</p>
              <p className="text-white font-[400]">+23485225874</p>
              <p className="text-white font-[400]">+23485225874</p>
              <p className="text-white font-[400]">+23485225874</p>
            </div>
          </div>

          {/* Email */}
          <div className="border border-[#88CA4E] w-1/2  p-6 rounded-xl lg:h-[250px]  text-center  flex justify-center items-center gap-3"> 
            <div className='flex flex-col gap-4'>
              <FaEnvelope className="text-[#88CA4E] text-2xl mt-1 mx-auto" />
              <p className="text-[24px] font-[500] text-white mb-2">Email</p>
              <p className="text-white  font-[400]">help@future <br />sphere.com</p>
              <p className="text-white font-[400]">support@future  <br />sphere.com</p>
            </div>
          </div>

          
         </div>

        </div>
      </div>
    </section>
  )
}
