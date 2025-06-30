import React from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-sm  py-4 " aria-label="Breadcrumb">
      <ul className="flex flex-wrap text-sm items-center space-x-1 md:space-x-2">
        <li className='text-[#0F172A]'>Home</li>
        
        <li  className="flex items-center text-[#0F172A]"><HiOutlineChevronRight className="mx-1 text-[#64748B]" size={16} />Tops</li>

        <li className="flex items-center text-[#475569]"> <HiOutlineChevronRight className="mx-1 text-[#64748B]" size={16} />T-Shirts</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
