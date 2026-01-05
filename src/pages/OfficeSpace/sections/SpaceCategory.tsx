import React from "react";
import { FaCheck  } from "react-icons/fa";
import hotdesk from "../../../assets/hotdesk.jpg"
import dedicatedDesk from "../../../assets/dedicatedDesk.jpg"
import conferenceRoom from "../../../assets/conferenceRoom.jpg"
import trainingRoom from "../../../assets/trainingRoom.jpg"
import officeOf2 from "../../../assets/officeOf2.jpg"
import officeOf4 from "../../../assets/officeOf4.jpg" 


interface catProps{
  Link? : boolean
}

export const SpaceCategory: React.FC<catProps> = () => {
  const categories = [
    {
      image: hotdesk,
      title: "Hotdesk (Co-working Space)",
      desc: ["Desk and Chair", "Free WIFI", "Steady Power Supply", "Security"],
      price: "₦5,000/Day - ₦55,000/Month",
      buttonText: "Book Now",
    },
    {
      image: dedicatedDesk,
      title: "Dedicated Desk",
      desc: ["Desk and Chair", "Free WIFI", "Steady Power Supply", "Security"],
      price: "₦7,000/Day - ₦65,000/Month",
      buttonText: "Book Now",
    },
    {
      image: officeOf2,
      title: "Private Room(2 Person)",
      desc: ["Desk and Chair", "Free WIFI", "Steady Power Supply", "Security"],
      price: "₦75,000/Month",
      buttonText: "Book Now",
    },
    {
      image: officeOf4,
      title: "Private Room(4 Person)",
      desc: ["Desk and Chair", "Free WIFI", "Steady Power Supply", "Security"],
      price: "₦140,000/Month",
      buttonText: "Book Now",
    },
    {
      image: trainingRoom,
      title: "Training Room",
      desc: ["Screen for Projecting", "Free WIFI", "Steady Power Supply", "Security"],
      price: "₦15,000/Hour",
      buttonText: "Book Now",
    },
    {
      image: conferenceRoom,
      title: "Conference Room",
      desc: ["Screen for Projecting", "Free WIFI", "Steady Power Supply", "Security"],
      price: "₦10,000/Hour",
      buttonText: "Book Now",
    },
  ];

  return (
    <section className="px-6 lg:px-20 py-12 bg-[#F5F5F5]">
      <h3 className="text-4xl text-center font-bold bg-gradient-to-b from-[#016B83] to-[#00181D] bg-clip-text text-transparent mb-10">
        Space Categories
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="max-w-[560px] w-full card rounded-4xl shadow-lg hover:shadow-2xl transition duration-300 bg-white"
          >
            {/* Image Section */}
            <div className="cardImg rounded-t-4xl overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="h-[246px] w-full object-cover"
              />
            </div>

            {/* Body Section */}
            <div className="cardBody px-6 py-6 rounded-b-4xl">
              <h5 className="text-[#333333] text-[18px] font-[600] mb-3">
                {category.title}
              </h5>

              <ul className="space-y-4 mb-4">
                {category.desc?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#333]">
                   <div className="w-[23px] h-[23px] bg-[#88CA4E] text-[18px] font-[400] flex justify-center items-center shrink-0">
                     <FaCheck  className="text-white mt-1 text-[16px] font-medium" />
                     </div>
                    <span className="text-[16px] font-[400]">{item}</span>
                  </li>
                ))}
              </ul>

              <h5 className="text-[18px] font-semibold text-[#294D58] mb-5">
                {category.price}
              </h5>

              <button className="w-full bg-[#88CA4E] w-full hover:bg-white border border-[#88CA4E] transition px-10 py-1 rounded-lg text-[16px] font-semibold" style={{color: '#294D58',  }}>
                 {category.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
