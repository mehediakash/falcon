import React from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="text-sm py-4" aria-label="Breadcrumb">
      <ul className="flex flex-wrap text-sm items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <Link to={"/"}>
          <li key={index} className="flex items-center cursor-pointer">
            {index !== 0 && (
              <HiOutlineChevronRight className={`text-[#64748B] ${index === 1 ? 'mx-1' : ''}`} size={16} />
            )}
            <span className={
              index === items.length - 1 
                ? "text-[#475569]" 
                : "text-[#0F172A]"
            }>
              {item}
            </span>
          </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
