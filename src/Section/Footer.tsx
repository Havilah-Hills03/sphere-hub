import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiSend } from "react-icons/fi"; 
import logo from "../assets/future-sphere-logo.png"

export const Footer: React.FC = () => {
  return (
    <footer
      className="text-white px-6 lg:px-32 py-12"
      style={{
        background:
          "linear-gradient(279.33deg, #88CA4E 35.78%, rgba(69, 155, 105, 0.9) 76.11%, #294D58 97.65%)"
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* Logo + Text */}
        <div>
             <a href="/">
       <img src={logo} alt="" />
     </a>

          <p className="max-w-sm">
            Futuresphere Business & Innovation Hub helps individuals, startups,
            and MSMEs gain the skills, tools, and community they need to thrive
            in today’s digital economy.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#294D58]">Services</h4>
          <ul className="space-y-2 text-white font-medium">
            <li>Digital Skills Training</li>
            <li>Start Up Incubation</li>
            <li>MSME Digitalisation</li>
            <li>
              <a href="/office-space" className="hover:underline">
                Spaces
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#294D58]">Contact Us</h4>
          <p className="mb-2 text-white font-medium">Call: <br /> +23480554799</p>
          <p className="text-white font-medium">Email:  <br /> help@futuresphere.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#294D58]">Be the first to hear of our news</h4>

          {/* Input + Send Icon */}
          <div className="relative w-full">
           

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 pl-10 rounded-md text-black focus:outline-none border border-white text-white"
            />
             <FiSend className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg text-white " />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="p-2 bg-[#294D58] rounded-full hover:bg-white/30 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 bg-[#294D58] rounded-full hover:bg-white/30 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-2 bg-[#294D58] rounded-full hover:bg-white/30 transition">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/30 pt-6 text-sm text-white/80 text-center">
        &copy; {new Date().getFullYear()} Futuresphere Business & Innovation Hub. All rights reserved.
      </div>
    </footer>
  );
};
