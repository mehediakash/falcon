import React, { useState, useEffect, useRef } from "react";
import axios from "./api/axios";
import Container from "./Container";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegUser, FaTimes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Store from "../assets/icons/Animation - 1751095353491 1.svg";
import customer from "../assets/icons/customer-support.svg";
import packagse from "../assets/icons/package.svg";
import logo from "../assets/logo/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { selectTotalCartQuantity } from "./redux/cartSlice";
import { useSelector } from "react-redux";
import {fakeCategories} from './data/fakeProduct'


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const megaMenuRef = useRef(null);
  const totalQuantity = useSelector(selectTotalCartQuantity);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setShowMegaMenu(false);
        setHoveredCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    axios
      .get("/categories")
      .then((res) => setCategories(res.data.data || fakeCategories))
      .catch((err) => {
        console.error("Category API error:", err);
        setCategories(fakeCategories);
      });
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCategoryClick = () => {
    setShowMegaMenu(!showMegaMenu);
    setHoveredCategory(null);
  };

  return (
    <>
      <nav
        className={`bg-[#0F172A] text-white sticky top-0 z-50 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <Container>
          <div className="flex justify-between items-center py-4">
            <div className="md:w-[10%] w-full">
              <Link to={"/"}>
                <picture>
                  <img src={logo} alt="logo" className="max-w-full" />
                </picture>
              </Link>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex w-[60%] relative bg-white text-[#475569] rounded-sm">
              <input
                placeholder="Search for anything...."
                className="w-full p-3 focus:outline-none focus:ring-0"
                type="text"
              />
              <div className="bg-[#00B795] text-white flex items-center justify-center absolute p-2.5 top-0 right-0 rounded-r-sm">
                <IoSearchOutline size={28} />
              </div>
            </div>

            <div className="flex flex-row-reverse items-center gap-x-5 md:gap-x-[20px] md:w-[10%]">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <RxHamburgerMenu size={24} />
              </button>

              <div className="hidden md:flex flex-row-reverse gap-x-[20px] items-center">
                <FaRegUser size={22} />
                <Link to={"/cart"}>
                  <div className="relative">
                    <PiShoppingCart size={28} />
                    <p className="absolute bg-[#EF4444] w-[20px] h-[20px] p-[2px] rounded-full text-xs text-center top-[-7px] right-[-8px]">
                      {totalQuantity}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Mobile Icons */}
              <div className="flex md:hidden gap-x-4">
                <FaRegUser size={20} />
                <Link to={"/cart"}>
                  <div className="relative">
                    <PiShoppingCart size={22} />
                    <p className="absolute bg-[#EF4444] w-[18px] h-[18px] p-[2px] rounded-full text-[10px] text-center top-[-6px] right-[-6px]">
                      {totalQuantity}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden px-4 py-2 bg-[#0F172A]">
        <div className="flex w-full relative z-10 bg-white text-[#475569] rounded-sm">
          <input
            placeholder="Search for anything...."
            className="w-full p-2 text-sm focus:outline-none focus:ring-0"
            type="text"
          />
          <div className="bg-[#00B795] text-white flex items-center justify-center absolute p-2 top-0 right-0 rounded-r-sm">
            <IoSearchOutline size={20} />
          </div>
        </div>
      </div>

      {/* category section */}
      <div className="bg-white drop-shadow-sm py-2 hidden md:block relative">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between">
              <div
                className="pr-[43px] border-r border-[#E2E8F0] mr-[24px] relative "
                ref={megaMenuRef}
              >
                <button
                  onClick={handleCategoryClick}
                  className="text-[#0F172A] text-base font-medium flex items-center gap-x-2"
                >
                  <RxHamburgerMenu className="text-[#00A788]" size={24} />
                  Categories
                </button>

                {/* Mega Menu Panel */}
                {showMegaMenu && (
                  <div
                    ref={megaMenuRef}
                    className="absolute  top-full left-0 mt-2 w-[800px] bg-white shadow-lg z-[9999] p-5 rounded-md border border-gray-200 flex gap-6"
                  >
                    {/* Left side - Categories */}
                    <div className="w-[35%] h-[400px] border-gray-200 overflow-y-auto border-r  pr-4">
                      <ul className="space-y-2">
                        {categories.map((category) => (
                          <li
                            key={category.id}
                            onMouseEnter={() => setHoveredCategory(category)}
                            className={`cursor-pointer text-sm px-2 py-1 rounded hover:bg-gray-100 ${
                              hoveredCategory?.id === category.id
                                ? "bg-gray-100 text-[#00A788]"
                                : ""
                            }`}
                          >
                            {category.name}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right side - Subcategories */}
                    <div className="w-[65%] md:h-[400px] bg-white overflow-y-auto">
                      {hoveredCategory &&
                      hoveredCategory.subcategories?.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4">
                          {hoveredCategory.subcategories.map((sub) => (
                            <div key={sub.id}>
                              <h4 className="text-[#0F172A] font-semibold text-sm mb-1">
                                {sub.name}
                              </h4>
                              <ul className="space-y-1 text-sm text-gray-700">
                                {sub.subchilds?.map((child) => (
                                  <li
                                    key={child.id}
                                    className="cursor-pointer hover:text-[#00A788] transition-colors duration-200"
                                  >
                                    {child.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-400">
                          Hover over a category to see subcategories
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* First 5 categories */}
              <ul className="flex fristCategroy items-center text-sm gap-x-8">
                {categories.slice(0, 4).map((cat) => (
                  <li
                    key={cat.id}
                    className="text-[#0F172A] hover:text-[#00A788] cursor-pointer"
                  >
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="flex flex-row-reverse items-center text-xs font-medium gap-x-6 text-[#475569]">
                <li className="flex items-center gap-x-2">
                  <img src={Store} alt="customer" />
                  SELL WITH US
                </li>
                <li className="flex items-center gap-x-2">
                  <img src={customer} alt="customer" />
                  HELP CENTER
                </li>
                <li className="flex items-center gap-x-2">
                  <img src={packagse} alt="packagse" />
                  TRACK ORDER
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 md:hidden"
              onClick={toggleMobileMenu}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: "easeInOut" }}
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
                <button className="w-full text-[#0F172A] text-base font-medium flex items-center gap-x-2 py-3">
                  <RxHamburgerMenu className="text-[#00A788]" size={24} />
                  Categories
                </button>

                <ul className="space-y-4 mt-6">
                  {categories.slice(0, 4).map((cat) => (
                    <li key={cat.id} className="text-gray-700 font-medium">
                      {cat.name}
                    </li>
                  ))}
                </ul>

                <ul className="mt-8 space-y-4 text-sm font-medium text-[#475569]">
                  <li className="flex items-center gap-x-2">
                    <img src={Store} alt="customer" className="w-5" />
                    SELL WITH US
                  </li>
                  <li className="flex items-center gap-x-2">
                    <img src={customer} alt="customer" className="w-5" />
                    HELP CENTER
                  </li>
                  <li className="flex items-center gap-x-2">
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
  );
};

export default Navbar;
