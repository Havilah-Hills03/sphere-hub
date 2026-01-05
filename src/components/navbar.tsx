import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../components/Button"; 
import logo from "../assets/future-sphere-logo.png"
import { Link } from "react-router-dom";


export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="w-full  bg-white lg:px-[7em]">
      <nav className="flex items-center justify-between px-6  py-2">

        {/* Logo */}
     <a href="/">
       <img src={logo} className="w-[130px]" alt="" />
     </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-[#222] font-medium">
          <li className="hover:text-[#016B83] cursor-pointer transition">
               <Link to="/">
              Home
            </Link>
          </li>
          <li className="hover:text-[#016B83] cursor-pointer transition"> 
            <Link to="/office-space">
                Office Space
            </Link>
          </li>
          <li className="hover:text-[#016B83] cursor-pointer transition">
                 <Link to="/">
              About Us
            </Link>
          </li>
          <li className="hover:text-[#016B83] cursor-pointer transition"> 
                 <Link to="/">
              Community
            </Link>
          </li>
          <li className="hover:text-[#016B83] cursor-pointer transition"> 
                 <Link to="/">
              Contact Us 
            </Link>
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
        className={`md:hidden bg-white overflow-hidden transition-all duration-300  ${
          open ? "max-h-[300px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start space-y-4 justify-center px-6 text-[18px] font-medium text-[#222]">
          <li className="hover:text-[#016B83] transition">
             <Link to="/">
             Home 
            </Link>
          </li>
          <li className="hover:text-[#016B83] transition">
             <Link to="/">
             About Us  
            </Link>
          </li>
          <li className="hover:text-[#016B83] transition"> 
             <Link to="/office-space">
             Office
            </Link> 
          </li>
          <li className="hover:text-[#016B83] transition">
             <Link to="/office-space">
             Contact
            </Link> 
          </li>
        </ul>
                 <Button   text={
                      <span className="flex items-center gap-2 w-full">
                        Get Started 
                      </span>
                    }
                    className="inline-block bg-[#88CA4E] text-[#294D58]"
                  />
      </div>
    </header>
  );
};
