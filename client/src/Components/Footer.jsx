import React from 'react'
import logo from "../assets/logo/footerlogo.png"
import mage_instagram from "../assets/icons/mage_instagram-circle.png"
import facebook from "../assets/icons/ic_baseline-facebook.png"
import support from "../assets/icons/content.png"
import twiter from "../assets/icons/Vector (1).png"
import google from "../assets/icons/Google.png"
import apple from "../assets/icons/apple.png"
import payment from "../assets/icons/Frame 1618874028.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from 'react-icons/io';
import Containar from './Container'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-[65px] ">
        <Containar>
          <div className="flex md:flex-row flex-col justify-between">
            <div className='md:w-[22%] w-full'>
              <picture className=''>
                <img src={logo} alt="logo" />
              </picture>
              <p className="text-[#F1F5F9] text-[14px] mb-4 mt-4">Experience our new platform & Enjoy great deals and offers on your day to day</p>
              <div>
                 <div className='flex gap-x-2 items-center'>
                <div>
                  <div className='bg-white w-[30px]  flex items-center justify-center  h-[30px] rounded-full text-center'>
                   <FaLocationDot className='text-black'  size={16} />
                   </div>
                </div>
                <p className="text-[#F1F5F9] text-sm"> 
                House #64, Road13, ASA Center, Uttera, Dhaka-1402</p>
                </div>
              </div>
              <div className='mt-4'>
                 <div className='flex items-center gap-x-2'>
                <div>
                  <div className='bg-white w-[30px]  flex items-center justify-center  h-[30px] rounded-full text-center'>
                   <FaPhoneAlt  className='text-black'  size={16} />
                   </div>
                </div>
                <p className="text-[#F1F5F9] text-sm"> 
               01729-1497201</p>
                </div>
              </div>
              <div className='mt-4'>
                 <div className='flex items-center gap-x-2'>
                <div>
                  <div className='bg-white w-[30px]  flex items-center justify-center  h-[30px] rounded-full text-center'>
                   <IoMdMail className='text-black'  size={16} />
                   </div>
                </div>
                <p className="text-[#F1F5F9] text-sm"> 
                  falcon@gmail.com</p>
                </div>
              </div>
             
           
            </div>



            <div>
              <h3 className="text-[18px] font-medium uppercase tracking-wider text-[#94A3B8] mb-3 md:mt-0 mt-5">ABOUT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[white] text-base font-medium hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-[white] text-base font-medium hover:text-white">About Us</a></li>
                <li><a href="#" className="text-[white] text-base font-medium hover:text-white">Careers</a></li>
                <li><a href="#" className="text-[white] text-base font-medium hover:text-white">Press</a></li>
                <li><a href="#" className="text-[white] text-base font-medium hover:text-white">Cancellation & Returns</a></li>
                <li><a href="#" className="text-[white] text-base font-medium hover:text-white">Terms of Use</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] font-medium uppercase tracking-wider text-[#94A3B8] md:mt-0 mt-5 mb-3">HELP</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#F1F5F9] text-base font-medium hover:text-white">Payments</a></li>
                <li><a href="#" className="text-[#F1F5F9] text-base font-medium hover:text-white">Shipping</a></li>
                <li><a href="#" className="text-[#F1F5F9] text-base font-medium hover:text-white">My Orders</a></li>
                <li><a href="#" className="text-[#F1F5F9] text-base font-medium hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-[#F1F5F9] text-base font-medium hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="text-[#F1F5F9] text-base font-medium hover:text-white">Security</a></li>
                <li><a href="#" className="text-[#F1F5F9] text-base font-medium hover:text-white">Privacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] font-medium uppercase tracking-wider text-[#94A3B8] mb-3 md:mt-0 mt-5">Need Support?</h3>
              <div className='flex items-center gap-x-[10px] border rounded-sm border-[#F1F5F9] py-2 px-4 mb-[34px] md:w-full w-[180px]'>
                <picture>
                <img src={support} alt="support" />
                </picture>
                <p className="text-white font-medium text-base ">10724-7814XX</p>
              </div>

              
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">DOWNLOAD APP</h3>
              <div className="space-y-3">
               
                  <div className="mr-2">
                   <picture>
                    <img src={google} alt="google" />
                   </picture>
                  </div>
                 
        
             
                  <div className="mr-2">
                    <picture>
                    <img src={apple} alt="google" />
                   </picture>
                  </div>
                  
            
              </div>

            </div>
          </div>
          <div className='flex md:flex-row flex-col  items-center justify-between mt-[32px]'>
               <div className="flex items-center space-x-[18px] ">
                <p className='text-base text-[#F1F5F9]'>Follow us on</p>
                <a href="#" className="text-[#F1F5F9] hover:text-white">
                 <picture>
                  <img src={facebook} alt="mage_instagram" />
                 </picture>
                </a>
                <a href="#" className="text-[#F1F5F9] hover:text-white">
                  <picture>
                  <img src={mage_instagram} alt="mage_instagram" />
                 </picture>
                </a>
                <a href="#" className="text-[#F1F5F9] hover:text-white">
                  <picture>
                  <img src={twiter} alt="twiter" />
                 </picture>
                </a>
              </div>
            <div className='flex md:flex-row flex-col md:mt-0 mt-5 items-center'>
              <h3 className="text-[18px] font-medium  uppercase tracking-wider text-[#94A3B8] ">PAYMENTS ACCEPTED</h3>
              <div className="flex items-center ">
                <picture>
                  <img src={payment} alt="payment" />
                </picture>
            </div>
              </div>
          </div>
       </Containar>
       <p className='text-sm pt-[30px] pb-[23px] font-normal text-center text-white mt-[37px] border border-[rgba(217,217,217,19%)]'>Falcon ©2025. Design by xyz</p>
      </footer>
  )
}

export default Footer
