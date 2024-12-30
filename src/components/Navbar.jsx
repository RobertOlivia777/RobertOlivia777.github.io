import { div, link, ul } from 'framer-motion/client';
import React, {useEffect, useState} from 'react';
import {FaInstagram, FaLinkedin, FaTimes} from "react-icons/fa"
import { FaBars } from 'react-icons/fa6';
import { Links } from '../constants';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState (false);

  const NavigationMenu = () => {
    const navigate = useNavigate();
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if(targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",        
      })
    }
    setIsMenuOpen(false);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);


  return (
    
    <nav className="flex justify-between items-center max-w-full px-4">
      
        <div className="flex justify-between text-white font-semibold uppercase">
          <a href="/" aria-label="Home">
            robert</a>
        </div>

        <div className="m-8 flex items-center justify-between gap-4 text-xl">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener    noreferrer" aria-label="Instagram">
          <FaInstagram/>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin/>
          </a>  
        </div>

        <div className="relative items-center z-30 right-0 top-0">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="flex justify-between rounded-md p-2" aria-label=
          {isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? (
              <FaTimes className="m-2 h-6 w-6"/>
            ) : (
              <FaBars className="m-2 h-6 w-6"/>
            )}
          </button>
        </div>
      

      {isMenuOpen && (      
        <div className="fixed top-0 right-0 h-full w-50 z-20 flex-col items-center  bg-slate-700/20 backdrop-blur-lg">      
          <ul className="mt-20 p-6 flex flex-col gap-4">
          {Links.map ((item, index) => (
            <li key={link.href}>
              <a className="text-2xl font-semibold uppercase bg-gradient-to-r from-stone-300 to-stone-700 bg-clip-text text-transparent hover:text-slate-500 hover:cursor-pointer" href={link.href}  onClick= {(e) => handleLinkClick(e, item.href)} rel="noopener noreferrer"> 
              {item.link}
              </a>
            </li> 
          ))}
          </ul>
        </div>       
      )}      
    </nav>
  )
}

export default Navbar


