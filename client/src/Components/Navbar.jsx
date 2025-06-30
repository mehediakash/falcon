import React, { useState, useEffect } from 'react';
import Container from "./Container"
import { PiShoppingCart } from "react-icons/pi";
import { FaRegUser, FaTimes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Store from "../assets/icons/Animation - 1751095353491 1.svg";
import customer from "../assets/icons/customer-support.svg";
import packagse from "../assets/icons/package.svg";
import logo from "../assets/logo/logo.png"
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`bg-[#0F172A] text-white sticky top-0 z-50 md:px-0 px-5 ${isScrolled ? 'shadow-lg' : ''}`}>
        <Container>
          <div className='flex justify-between items-center py-4'>
            <div className='md:w-[10%] w-full'>
              <picture>
                <img src={logo} alt="logo" className="max-w-full" />
              </picture>
            </div>
            
            {/* Desktop Search - Hidden on mobile */}
            <div className='hidden md:flex w-[60%] relative bg-white text-[#475569] rounded-sm'>
              <input 
                placeholder='Search for anything....' 
                className='w-full p-3' 
                type="text" 
              />
              <div className='bg-[#00B795] text-white flex items-center justify-center absolute p-2.5 top-0 right-0 rounded-r-sm'>
                <IoSearchOutline size={28} />
              </div>
            </div>
            
            <div className='flex flex-row-reverse items-center gap-x-5 md:gap-x-[20px] md:w-[10%]'>
              {/* Mobile Menu Button - Hidden on desktop */}
              <button 
                className="md:hidden text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <RxHamburgerMenu size={24} />
              </button>
              
              <div className='hidden md:flex flex-row-reverse gap-x-[20px] items-center'>
                <FaRegUser size={22} />
                <div className='relative'>
                  <PiShoppingCart size={28} />
                  <p className='absolute bg-[#EF4444] w-[20px] h-[20px] p-[2px] rounded-full text-xs text-center top-[-7px] right-[-8px]'>12</p>
                </div>
              </div>
              
              {/* Mobile Icons - Hidden on desktop */}
              <div className='flex md:hidden gap-x-4'>
                <FaRegUser size={20} />
                <div className='relative'>
                  <PiShoppingCart size={22} />
                  <p className='absolute bg-[#EF4444] w-[18px] h-[18px] p-[2px] rounded-full text-[10px] text-center top-[-6px] right-[-6px]'>12</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Search - Hidden on desktop */}
      <div className='md:hidden px-4 py-2 bg-[#0F172A]'>
        <div className='flex w-full relative bg-white text-[#475569] rounded-sm'>
          <input 
            placeholder='Search for anything....' 
            className='w-full p-2 text-sm' 
            type="text" 
          />
          <div className='bg-[#00B795] text-white flex items-center justify-center absolute p-2 top-0 right-0 rounded-r-sm'>
            <IoSearchOutline size={20} />
          </div>
        </div>
      </div>

      {/* category section */}
      <div className='bg-white drop-shadow-sm py-2 hidden md:block'>
        <Container>
          <div className='flex items-center justify-between'>
            <button className='w-[10%] text-[#0F172A] text-base font-medium flex items-center gap-x-2 mr-[64px]'>
              <RxHamburgerMenu className='text-[#00A788]' size={24}/>
              Categories
            </button>
            <div className='w-[50%]'>
              <ul className='flex items-center text-sm gap-x-8'>
                <li>Electronics</li>
                <li>Home Appliances</li>
                <li>Mother & Baby</li>
                <li>Automotive</li>
                <li>Automotive</li>
              </ul>
            </div>
            <div className='w-[30%]'>
              <ul className='flex flex-row-reverse text-xs font-medium gap-x-6 text-[#475569]'>
                <li className='flex items-center gap-x-2'><img src={Store} alt="customer" />SELL WITH US</li>
                <li className='flex items-center gap-x-2'><img src={customer} alt="customer" />HELP CENTER</li>
                <li className='flex items-center gap-x-2'><img src={packagse} alt="packagse" />TRACK ORDER</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 md:hidden"
              onClick={toggleMobileMenu}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: 'easeInOut' }}
              className="fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-xl md:hidden"
            >
              <div className="flex justify-between items-center p-4 border-b bg-[#0F172A]">
                <img src={logo} alt="logo" className="h-8" />
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="p-4">
                <button className='w-full text-[#0F172A] text-base font-medium flex items-center gap-x-2 py-3'>
                  <RxHamburgerMenu className='text-[#00A788]' size={24}/>
                  Categories
                </button>
                
                <ul className='space-y-4 mt-6'>
                  <li className='text-gray-700 font-medium'>Electronics</li>
                  <li className='text-gray-700 font-medium'>Home Appliances</li>
                  <li className='text-gray-700 font-medium'>Mother & Baby</li>
                  <li className='text-gray-700 font-medium'>Automotive</li>
                </ul>
                
                <ul className='mt-8 space-y-4 text-sm font-medium text-[#475569]'>
                  <li className='flex items-center gap-x-2'>
                    <img src={Store} alt="customer" className="w-5" />
                    SELL WITH US
                  </li>
                  <li className='flex items-center gap-x-2'>
                    <img src={customer} alt="customer" className="w-5" />
                    HELP CENTER
                  </li>
                  <li className='flex items-center gap-x-2'>
                    <img src={packagse} alt="packagse" className="w-5" />
                    TRACK ORDER
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar