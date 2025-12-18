import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../components/Button"; 


export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="w-full  bg-white lg:px-[7em]">
      <nav className="flex items-center justify-between px-6  py-2">

        {/* Logo */}
        <h4 className="text-xl font-bold text-[#016B83]">Logo</h4>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-[#222] font-medium">
          <li className="hover:text-[#016B83] cursor-pointer transition">Home</li>
          <li className="hover:text-[#016B83] cursor-pointer transition">
            <a href="/office-space"> Work Space </a>
          </li>
          <li className="hover:text-[#016B83] cursor-pointer transition">
               <a href=""> About Us</a>
          </li>
          <li className="hover:text-[#016B83] cursor-pointer transition">
               <a href=""> Community </a>
          </li>
          <li className="hover:text-[#016B83] cursor-pointer transition">
               <a href=""> Contact Us </a>
          </li>
        </ul>
         <Button
                    text={
                      <span className="hidden lg:flex items-center gap-2">
                        Get Started 
                      </span>
                    }
                    className="inline-block lg:bg-[#88CA4E] text-[#294D58]"
                  />

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer text-[#016B83]" onClick={toggleMenu}>
          {open ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-[300px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start space-y-4 px-6 text-[18px] font-medium text-[#222]">
          <li className="hover:text-[#016B83] transition">Home</li>
          <li className="hover:text-[#016B83] transition">About</li>
          <li className="hover:text-[#016B83] transition">
            <a href="/office-space"> Work Space</a>
          </li>
          <li className="hover:text-[#016B83] transition">Contact</li>
        </ul>
                 <Button   text={
                      <span className="flex items-center gap-2">
                        Get Started 
                      </span>
                    }
                    className="inline-block bg-[#88CA4E] text-[#294D58]"
                  />
      </div>
    </header>
  );
};
