import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Breadcrumb from "../Components/Breadcrumb";
import { RxContainer } from "react-icons/rx";
import Containar from "../Components/Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import CustomCheckbox from "../Components/CustomCheckbox";
import sotor from "../assets/icons/store-01.png";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  selectCartItems,
} from "../Components/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const toggleItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const toggleAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const handleClearAll = () => {
    setSelectedItems([]);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="bg-[#f5f9fc]">
        <Containar>
          <Breadcrumb items={["Home", "My cart"]} />

          <div className=" min-h-screen pb-52 md:pb-0">
            <div className=" mx-auto grid md:grid-cols-3 gap-6">
              {/* Left side: Cart Items */}
              <div className="md:col-span-2 bg-white rounded-lg shadow-sm ">
                <div className="flex items-center flex-col md:flex-row mx-5 py-[26px] justify-between border-b border-[#D9D9D9]">
                  <h2 className="text-2xl font-semibold text-[#0F172A] ">
                    {" "}
                    My Cart ({cartItems.length})
                  </h2>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mt-5 md:mt-0">
                    <label className="flex items-center gap-2  cursor-pointer text-[#475569] text-base">
                      <CustomCheckbox
                        checked={selectedItems.length === cartItems.length}
                        onChange={toggleAll}
                      />
                      Select All
                    </label>
                    <button
                      button
                      className="text-[#475569] cursor-pointer text-base"
                      onClick={handleClearAll}
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4 mt-[21px] ml-5 bg-[#F1F5F9]  py-2">
                  <div className="flex items-center gap-2 px-3 ">
                    <CustomCheckbox checked={true} />
                    <span className="font-medium flex items-center gap-x-2 text-[#334155] text-sm">
                      <picture>
                        <img src={sotor} alt="store" />
                      </picture>
                      BD FASHION HOUSE
                    </span>
                    <MdKeyboardArrowRight
                      size={16}
                      className="text-[#64748B]"
                    />
                  </div>
                </div>

                {/* Product Items */}
                {cartItems.map((item) => (
                  
                  <div
                    key={item.id}
                    className="flex md:flex-row md:flex-nowrap md:justify-start justify-center flex-wrap items-start gap-4 py-4 px-[32px] "
                  >
                    {console.log(item)}
                    <CustomCheckbox
                      className="!w-[16px] !h-[16px]"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleItem(item.id)}
                    />
                    <img
                      src={item.image}
                      alt="Product"
                      className="md:w-[100px] w-[200px] h-[200px] md:h-[100px] object-cover rounded-[5px]"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-base text-[#0F172A]">
                        {item.name}
                      </h4>
                      <p className=" text-[#475569] text-base md:text-start text-center mt-2.5 md:mb-[11px]">
                        Color: {item.variation.color || "no"}; Size: {item.variation.size || "no"}
                      </p>
                      <div className="text-right justify-center  flex md:hidden items-center gap-x-2">
                        <p className="text-[#0F172A] font-bold text-[20px] flex items-center">
                          <FaBangladeshiTakaSign /> {item.price}
                        </p>
                        <p className="text-base line-through text-[#475569]  flex items-center">
                          <FaBangladeshiTakaSign /> 1539
                        </p>
                      </div>
                      <div className="flex justify-center md:justify-start items-center  gap-6">
                        <div className="flex items-center   relative z-[3] ">
                          <div className="w-[161px] bg-transparent z-[-1] absolute top-0 left-[-5px] border border-[#E2E8F0] h-full rounded-full"></div>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity: Math.max(1, item.quantity - 1),
                                })
                              )
                            }
                            className="w-[33px] h-[33px] rounded-full flex text-base font-bold items-center justify-center bg-[#F1F5F9]    text-[#64748B] hover:bg-gray-200"
                          >
                            -
                          </button>
                          <div className="  w-[86px] border-[#E2E8F0] h-10 flex items-center justify-center  text-base font-medium text-[#252B42]">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity: item.quantity + 1,
                                })
                              )
                            }
                            className="w-[33px] h-[33px] rounded-full text-base flex  font-bold items-center justify-center bg-[#F1F5F9]  text-[#64748B] hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-[#94A3B8] cursor-pointer text-base"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                    <div className="text-right  hidden md:flex items-center gap-x-2">
                      <p className="text-[#0F172A] font-bold text-[20px] flex items-center">
                        <FaBangladeshiTakaSign /> {item.price}
                      </p>
                      <p className="text-base line-through text-[#475569]  flex items-center">
                        <FaBangladeshiTakaSign /> 1539
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right side: Order Summary */}
              <div className="bg-white relative max-h-[331px] rounded-lg shadow-sm py-[13px] px-6">
                <h3 className="text-[24px] font-medium text-[#475569] mb-4">
                  Order summary
                </h3>
                <div className="flex justify-between text-base font-medium mb-3">
                  <span className="text-[#475569]">
                    Price ({cartItems.length} items)
                  </span>
                  <span className="text-[#0F172A] font-normal">
                    ৳ {subtotal}
                  </span>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-600">Shipping fee</span>
                  <a
                    href="#"
                    className="text-[#3B82F6] hover:underline text-sm"
                  >
                    To be added
                  </a>
                </div>

                <div className="flex items-center mb-4 border-b border-[#CBD5E1] pb-5 border-dotted">
                  <input
                    type="text"
                    placeholder="Store / Falcon coupon"
                    className="border border-gray-300 rounded-l px-4 py-2 w-full"
                  />
                  <button className="bg-[#00B795] border border-[#00B795] text-white px-4 py-2 rounded-r">
                    Apply
                  </button>
                </div>

                <div className="flex justify-between   mb-4  ">
                  <span className="text-[#334155] font-medium text-[18px]">
                    Sub Total
                  </span>
                  <span className="text-[#171717] text-[20px] font-semibold">
                    ৳ {subtotal}
                  </span>
                </div>
                <Link to={"/"}>
                  <button className="w-full bg-[#00B795] hover:bg-[#00B795] text-white font-semibold py-3 rounded">
                    Proceed to Checkout
                  </button>
                </Link>

                <div className="flex absolute md:bottom-[-57px] bottom-[-80px]  items-start mt-4 gap-2 text-sm text-gray-600 ">
                  <div>
                    <CustomCheckbox
                      checked={agreeTerms}
                      onChange={() => setAgreeTerms(!agreeTerms)}
                    />
                  </div>
                  <p>
                    I have read and agree to the{" "}
                    <a href="#" className="text-blue-500 underline">
                      Terms and Conditions
                    </a>
                    ,
                    <a href="#" className="text-blue-500 underline">
                      {" "}
                      Privacy Policy
                    </a>{" "}
                    and
                    <a href="#" className="text-blue-500 underline">
                      {" "}
                      Refund and Return Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Containar>
      </div>
    </>
  );
};

export default Cart;
