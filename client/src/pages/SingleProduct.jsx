import React, { useEffect, useState } from "react";
import axios from "../Components/api/axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../Components/redux/cartSlice";
import Containar from "../Components/Container";
import Breadcrumb from "../Components/Breadcrumb";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import promobg from "../assets/product/Group 1010108454.png";
import color2 from "../assets/product/Frame 48098693.png";
import agentlogo from "../assets/icons/Frame 1618873879.png";
import packagseM from "../assets/product/packagemoving.png";
import { PiPackage } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "swiper/css";
import {
  fakeProduct,
  descriptionText,
  specificationItems,
} from "../Components/data/fakeProduct";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const SingleProduct = () => {
  const [realproduct, setRealproduct] = useState(null);
  const [selectedImageApi, setSelectedImageApi] = useState("");
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullSpecification, setShowFullSpecification] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Navy Blue");
  const [selectedSize, setSelectedSize] = useState("XS");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("/product/iphone-15-plus");
      const productData = res.data.data;
      setRealproduct(productData);

      if (productData.variations && productData.variations.length > 0) {
        const firstVariation = productData.variations[0];
        setSelectedVariation(firstVariation);
        setSelectedImageApi(firstVariation.image);
      } else {
 
        setSelectedImageApi(productData.image["1"]?.url || "");
      }
    };
    fetchProduct();
  }, []);

  const handleVariationSelect = (variation) => {
    setSelectedVariation(variation);
    setSelectedImageApi(variation.image);
  };

  const handleAddToCart = () => {
    if (!selectedVariation) return alert("Please select a variation");
    dispatch(
      addToCart({
        id: selectedVariation.id,
        name: realproduct.name,
        image: selectedImageApi,
        price: selectedVariation.discount_price,
        quantity,
        variation: selectedVariation.variation_attributes,
      })
    );
    toast.success("Product added to cart successfully!");
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="bg-[#F1F5F9]">
       <ToastContainer position="top-right" autoClose={2000} />
      <Containar>
       <Breadcrumb items={['Home', 'Tops', 'T-Shirts']} />
      </Containar>
      <div className="bg-white md:px-0 px-5 ">
        <Containar>
          <div className="flex flex-col md:flex-row  gap-8 py-6 ">
  
            <div className="w-full md:w-[30%]">
              <div className="bg-white rounded-lg mx mb-4">
            
                <img
                  src={selectedImageApi}
                  alt="Main"
                  className="md:w-[380px] w-full h-auto object-contain rounded-md cursor-pointer"
                  onClick={() => setLightboxOpen(true)}
                />

        
                <div className="flex space-x-2 overflow-x-auto mt-4">
                  <Swiper
                    spaceBetween={8}
                    slidesPerView={"auto"}
                    autoplay={{ delay: 2000, disableOnInteraction: true }}
                    loop={true}
                  >
                    {realproduct?.variations.map((v) => (
                      <SwiperSlide
                        key={v.id}
                        style={{ width: "68px", height: "64px" }}
                      >
                        <button
                          onClick={() => handleVariationSelect(v)}
                          className="flex-shrink-0 w-[68px] h-16 rounded-[5px] overflow-hidden"
                        >
                          <img
                            src={v.image}
                            alt="Var Thumb"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={[
                  { src: selectedImageApi },
                  ...(Array.isArray(realproduct?.variations)
                    ? realproduct.variations
                        .filter((v) => v.image !== selectedImageApi)
                        .map((v) => ({ src: v.image }))
                    : []),
                ]}
              />
            </div>


            <div className="w-full md:w-[40%]">
              <h1 className="text-2xl font-medium text-[#0F172A]  ">
                {realproduct?.name}
              </h1>

              <div className="flex text-base items-center mt-2 ">
                <div className="flex items-center justify-between w-full">
                  <div>
                    <div className="flex items-center gap-x-[2px] mr-2.5">
                      <span className=" text-[#475569] mr-2.5">
                        {fakeProduct.rating}{" "}
                      </span>
                      {[...Array(5)].map((_, i) => (
                        <FaStar className="text-[#EAB308] " />
                      ))}

                      <span className="flex items-center ml-2.5">
                        2,254 <IoIosArrowDown className="ml-2.5" />
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-x-7.5 ">
                    <GrFavorite className="text-[#64748B]" size={30} />
                    <IoShareSocialOutline
                      className="text-[#64748B]"
                      size={30}
                    />
                  </div>
                </div>
              </div>

              <div className="flex mt-[5px] mb-[11px]">
                <span className="text-2xl font-semibold text-[#00A788] flex items-center leading-[32px]">
                  <FaBangladeshiTakaSign />
                  {selectedVariation
                    ? selectedVariation?.discount_price
                    : fakeProduct.product_detail?.discount_price}
                </span>
                <span className="ml-4 text-base text-[#94A3B8] line-through  flex items-center">
                  <FaBangladeshiTakaSign size={12} />
                  {selectedVariation
                    ? selectedVariation?.discount_price
                    : fakeProduct.product_detail?.discount_price}
                </span>
              </div>

              <div className=" flex items-center  mb-[27px]">
                <p className=" font-medium text-sm text-[#475569] mr-[5px]">
                  Promotion
                </p>
                <img src={promobg} alt="promobg" />
              </div>
         

              <div className="mb-4">
                <h3 className="text-base font-medium  text-[#475569] mb-2">
                  Available Color:{" "}
                  <span className="text-[#171717]">{selectedColor}</span>
                </h3>
                <div className="flex space-x-2">
                  {fakeProduct.colors.map((color) => (
                    <button
                      key={color2}
                      onClick={() => setSelectedColor(color)}
                      className={`  text-xs border ${
                        selectedColor === color
                          ? "border-[#00A788] rounded-sm "
                          : "!border-transparent "
                      }`}
                    >
                      <img src={color2} alt="" />
                    </button>
                  ))}
                </div>
              </div>

  
              <div className="mb-4">
                <h3 className="text-base font-medium text-[#475569] mb-2">
                  Select Size:{" "}
                  <span className="text-[#171717]">{selectedSize}</span>
                </h3>
                <div className="flex space-x-3 mt-2">
                  {fakeProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 text-base font h-10 flex items-center justify-center rounded-md border ${
                        selectedSize === size
                          ? "border-[#00A788] "
                          : "border-[#CBD5E1] text-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>


              <div className="mb-8">
                <h3 className="text-base font-Poppins font-medium  text-[#171717] mb-2">
                  Quantity
                </h3>
                <div className="flex items-center  relative z-[3] ">
                  <div className="w-[195px] bg-transparent z-[-1] absolute top-0 left-[-5px] border border-[#E2E8F0] h-full rounded-full"></div>
                  <button
                    onClick={decreaseQuantity}
                    className="w-[33px] h-[33px] rounded-full flex text-2xl font-medium items-center justify-center bg-[#F1F5F9]    text-[#64748B] hover:bg-gray-200"
                  >
                    -
                  </button>
                  <div className="  w-[120px] border-[#E2E8F0] h-10 flex items-center justify-center  text-base font-medium text-[#252B42]">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="w-[33px] h-[33px] rounded-full flex text-2xl font-medium items-center justify-center bg-[#F1F5F9]  text-[#64748B] hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>


              <button
                onClick={handleAddToCart}
                className="w-full md:w-[412px] bg-[#00A788] hover:bg-[rgb(7,126,104)] text-white py-3 px-4 rounded-sm font-medium transition duration-150 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
            <div className=" w-full md:w-[25%]">
              <div className="py-3 px-4 border border-[#E2E8F0] rounded-xl">
                <h2 className="text-[18px] font-medium text-[#475569]">
                  Delivery Options{" "}
                </h2>
                <div className="flex gap-x-2 mt-3">
                  <PiPackage size={24} className="text-[#00B795]" />

                  <div>
                    <p className="text-base font-medium text-[#334155]">
                      Regular
                    </p>
                    <p className="text-[#475569] mt-1">
                      Delivery within 2-3 days
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2 mt-4">
                  <picture>
                    <img src={packagseM} alt="packagseM" />
                  </picture>
                  <div>
                    <p className="text-base font-medium text-[#CBD5E1]">
                      Express
                    </p>
                    <p className="text-[#CBD5E1] mt-1">
                      Delivery within 24 Hours.
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-3 px-4 border border-[#E2E8F0] rounded-xl mt-4">
                <h2 className="text-xs font-medium text-[#475569] mb-2">
                  Sold by{" "}
                </h2>
                <picture>
                  <img src={agentlogo} alt="agentlogo" />
                </picture>
                <div className="flex gap-x-3 mt-4 pb-3 border-[#E2E8F0]  border-b">
                  <button className="bg-[#E6F8F4] cursor-pointer text-sm font-medium text-[#00A788] flex items-center gap-x-2 px-5.5 py-1.5 rounded-sm">
                    <IoChatbubbleEllipsesOutline size={16} />
                    Chat Now{" "}
                  </button>
                  <button className="bg-[#F1F5F9] cursor-pointer text-sm font-medium text-[#475569] flex items-center gap-x-2 px-5.5 py-1.5 rounded-sm">
                    View Shop{" "}
                  </button>
                </div>
                <div className="flex items-center gap-x-5.5">
                  <div>
                    <h2 className="text-xs font-medium text-[#475569] mb-3 mt-4">
                      Ship on Time
                    </h2>
                    <p className="text-[28px] text-[#475569]">100%</p>
                  </div>
                  <div>
                    <h2 className="text-xs font-medium text-[#475569] mb-3 mt-4">
                      Chat Response
                    </h2>
                    <p className="text-[28px] text-[#475569]">90%</p>
                  </div>
                  <div>
                    <h2 className="text-xs font-medium text-[#475569] mb-3 mt-4">
                      Shop Rating
                    </h2>
                    <p className="text-[28px] text-[#475569]">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Containar>
        <div className="bg-[#F1F5F9] md:pb-[105px] pb-[50px] pt-[15px]">
          <Containar>

            <div className="mb-3.5   rounded-sm bg-white py-[22px] px-[27px]  max-w-[995px]">
              <h2 className="text-2xl font-semibold text-[#252B42] mb-4">
                Description
              </h2>
              <div className="relative">
                <p
                  className={`text-gray-700  text-base leading-[28px] whitespace-pre-line transition-all duration-500 ease-in-out overflow-hidden ${
                    showFullDescription ? "max-h-[1000px]" : "max-h-[255px]"
                  }`}
                >
                  {descriptionText}
                </p>
                {!showFullDescription && (
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                )}
              </div>
              <div className="text-center">
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-[#0F172A] hover:text-[#0F172A] text-base font-medium  transition duration-300 mt-3"
                >
                  {showFullDescription ? (
                    <>
                      <div className="flex items-center">
                        <p className="text-[#0F172A]">See Less </p>{" "}
                        <IoIosArrowUp className="ml-1" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center">
                        <p className="text-[#0F172A]"> See More</p>{" "}
                        <IoIosArrowDown className="ml-1" />
                      </div>
                    </>
                  )}
                </button>
              </div>
            </div>


            <div className="bg-white rounded-sm py-[22px] px-[27px] max-w-[995px]">
              <h2 className="text-2xl font-semibold text-[#252B42] mb-4">
                Specification
              </h2>
              <h3 className="text-lg font-medium text-[#252B42] mb-3">
                Sharp FP-J30E-B Air Purifier
              </h3>

              <div className="relative">
                <ul
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    showFullSpecification ? "max-h-[1000px]" : "max-h-[128px]"
                  } space-y-2`}
                >
                  {specificationItems.map((item, index) => (
                    <li key={index} className="text-[#475569] flex items-start">
                      <span className="inline-block w-[4px] h-[4px] rounded-full bg-[#475569] mt-2 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                {!showFullSpecification && (
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                )}
              </div>
              <div className="text-center">
                <button
                  onClick={() =>
                    setShowFullSpecification(!showFullSpecification)
                  }
                  className="text-[#0F172A] hover:text-[#0F172A] text-base font-medium  transition duration-300 mt-3"
                >
                  {showFullSpecification ? (
                    <>
                      <div className="flex items-center">
                        <p className="text-[#0F172A]">See Less </p>{" "}
                        <IoIosArrowUp className="ml-1" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center">
                        <p className="text-[#0F172A]"> See More</p>{" "}
                        <IoIosArrowDown className="ml-1" />
                      </div>
                    </>
                  )}
                </button>
              </div>
            </div>
          </Containar>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
