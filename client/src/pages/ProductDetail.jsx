import React, { useEffect, useRef, useState } from 'react'
import Container from "../Components/Container"
import Breadcrumb from '../Components/Breadcrumb'
import productimg1 from "../assets/product/image 540.png"
import productimg2 from "../assets/product/image 541.png"
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import promobg from "../assets/product/Group 1010108454.png"
import color1 from "../assets/product/Frame 48098691.png"
import color2 from "../assets/product/Frame 48098693.png"
import agentlogo from "../assets/icons/Frame 1618873879.png"
import packagse from "../assets/icons/package.svg"; 
import packagseM from "../assets/product/packagemoving.png"; 
import { PiPackage } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = () => {
    const [selectedColor, setSelectedColor] = useState('Navy Blue');
  const [selectedSize, setSelectedSize] = useState('XS');
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullSpecification, setShowFullSpecification] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const product = {
    name: "Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt",
    rating: 4.7,
    reviews: 2254,
    price: 1139.33,
    originalPrice: 1500,
    promotion: "Min. spans: $450",
    colors: ['Navy Blue', "green", 'White', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: "Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything.",
    specifications: [
      "GMP Cosmetic Good Manufacturing Practice",
      "Cruelty Free",
      "No Animal Testing",
      "Zempla Global Standard",
      "Comply with Global Standard"
    ],
    images: [
      "productimg2",
      "productimg2",
      "productimg2",
      "productimg2",
      "https://via.placeholder.com/600x600/1e3a8a/ffffff?text=Detail"
    ]
  };

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = () => {
    const newItem = {
      id: `${product.name}-${selectedColor}-${selectedSize}`,
      name: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: product.price,
      image: product.images[0]
    };
    
    setCartItems([...cartItems, newItem]);
    alert('Item added to cart!');
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };



  const descRef = useRef(null);
  const specRef = useRef(null);
  const [descHeight, setDescHeight] = useState(0);
  const [specHeight, setSpecHeight] = useState(0);

  useEffect(() => {
    if (descRef.current) {
      setDescHeight(descRef.current.scrollHeight);
    }
    if (specRef.current) {
      setSpecHeight(specRef.current.scrollHeight);
    }
  }, []);
  const descriptionText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima voluptas eos ipsa corrupti explicabo? Sed nobis eum facilis recusandae sit nostrum itaque non odit, quas quae voluptas, corrupti omnis explicabo dolorum ab temporibus voluptatum. Eaque suscipit nulla rem commodi odio enim reprehenderit. Qui odio voluptates esse deleniti molestias soluta dolor cumque ipsa officiis nostrum id saepe eius voluptas repudiandae nam quae corporis exercitationem ad hic dolorum iusto, omnis quam perspiciatis minima! Aliquam, vitae, officiis cupiditate doloribus animi beatae at enim laborum adipisci dolore commodi perspiciatis iure deleniti nihil nam voluptate totam deserunt modi? Aliquid deserunt quae modi non ab, veritatis mollitia quo, ut iusto cupiditate excepturi quidem dolores consequatur velit molestiae saepe itaque minima, hic adipisci voluptate quis! Consectetur consequuntur laboriosam nihil. Animi nobis asperiores itaque iste molestiae deleniti minus maiores ullam, tempora ex suscipit excepturi similique a blanditiis consequuntur adipisci quia doloremque hic sapiente magni dolorem nam, nemo minima voluptate. Id magni nisi labore et facilis non tempore ratione, officia eos ex minus quibusdam recusandae eius aspernatur tempora laborum? Praesentium quo perferendis deleniti facilis amet saepe itaque. Soluta inventore magni aperiam voluptatum, voluptatibus eos. Sapiente harum perspiciatis dolorum assumenda consectetur provident quod voluptatibus eos vel nulla nihil repellendus unde beatae, amet officiis quae eius. Maiores facere rem veniam fugiat suscipit reiciendis voluptatum cumque odit a, dolore ullam repellat possimus voluptatibus rerum deleniti ea fuga minus ipsum tenetur commodi sint explicabo. Maxime dolorum enim aperiam qui. Porro consequatur, itaque, sint voluptates, delectus odio molestias fugit ratione laboriosam explicabo amet nulla maxime quas quia? Dolorum minima explicabo blanditiis possimus dolores fugit? Sit quas inventore in. Non rerum accusantium sit maiores commodi aut in, mollitia provident aliquam impedit praesentium animi veritatis, rem atque eius asperiores ex! Eveniet recusandae eum placeat fugit. Nemo cum ad officia vel assumenda accusantium velit nisi molestiae impedit explicabo dolorem obcaecati quidem, amet quo fugiat. Rem, et neque facere officiis temporibus illum nesciunt illo corporis ut. Facere, eveniet natus? Autem, praesentium deserunt culpa exercitationem quisquam maxime odio magnam doloremque tempora ipsam eveniet. Sint quidem nihil delectus totam dolor rerum autem quos eos, quae perferendis blanditiis eum, odit, doloremque earum. Neque, reprehenderit aut? Accusantium nobis omnis ex. Suscipit possimus obcaecati quod laboriosam. Vel mollitia libero voluptatibus ipsam rem. Fugiat corporis non totam nemo! Laboriosam voluptates nihil nostrum, nobis nulla, veritatis, ratione repudiandae assumenda repellendus doloremque quaerat consectetur totam sed distinctio incidunt exercitationem asperiores at autem eum provident excepturi! Reprehenderit fugit beatae incidunt aliquam voluptatibus, culpa dignissimos optio sint non, itaque modi reiciendis aliquid ratione iusto excepturi repudiandae necessitatibus. Delectus, quas modi? Optio accusantium quia, aspernatur necessitatibus ipsa nihil praesentium minus numquam fugiat excepturi, quas provident adipisci vero deleniti veniam laboriosam! Quos harum, aut libero possimus consequuntur ipsum deleniti dolore necessitatibus repudiandae numquam similique ullam laboriosam aliquid eum molestiae, sapiente minima nostrum eligendi voluptatum rem eaque. Expedita ea est doloremque facilis aspernatur quae aliquid cupiditate unde dicta, consequatur recusandae eveniet quidem dolorum culpa ipsa. Velit nemo aut nisi dolore recusandae voluptate nostrum cumque odit veritatis consequuntur. Repellat, adipisci consequuntur!`;

  const specificationItems = [
    "GMP Cosmetic Good Manufacturing Practice",
    "Cruelty Free",
    "No Animal Testing",
    "Zempia Global Standard",
    "Comply with Global Standard"
  ];

  return (
    <div className='bg-[#F1F5F9]'>
    <Container>
      <Breadcrumb></Breadcrumb>
    </Container>
      <div className="bg-white md:px-0 px-5 ">
            <Container>
        <div className="flex flex-col md:flex-row  gap-8 py-6 ">
          {/* Product Images */}
          <div className="w-full md:w-[30%]">
            <div className="bg-white rounded-lg mx  mb-4">
              <img 
                src={productimg1} 
                alt={product.name} 
                className="md:w-[380px] w-full h-auto object-contain rounded-md"
               
              />
               <div className="flex space-x-2 overflow-x-auto mt-4 ">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-[68px] h-16  rounded-[5px] overflow-hidden `}
                >
                  <img 
                    src={productimg2} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            </div>
           
          </div>

          {/* Product Info */}
          <div className="w-full md:w-[40%]">
            <h1 className="text-2xl font-medium text-[#0F172A]  ">{product.name}</h1>
            
            <div className="flex text-base items-center mt-2 ">
              <div className='flex items-center justify-between w-full'>
                <div>

              
              <div className="flex items-center gap-x-[2px] mr-2.5">
              <span className=" text-[#475569] mr-2.5">{product.rating} </span>
                {[...Array(5)].map((_, i) => (
                <FaStar className='text-[#EAB308] '/>
                ))}
           
              <span className='flex items-center ml-2.5'>2,254 <IoIosArrowDown  className='ml-2.5' /></span>
              </div>
                </div>
              <div className='flex gap-x-7.5 '>
                <GrFavorite className='text-[#64748B]' size={30}/>
                 <IoShareSocialOutline className='text-[#64748B]' size={30}/>
              </div>
          

              </div>
            </div>

            <div className="flex mt-[5px] mb-[11px]">
              <span className="text-2xl font-semibold text-[#00A788] flex items-center leading-[32px]"><FaBangladeshiTakaSign />{product.price.toFixed(2)}</span>
              <span className="ml-4 text-base text-[#94A3B8] line-through  flex items-center"><FaBangladeshiTakaSign size={12} />{product.originalPrice}</span>
            </div>

            <div className=" flex items-center  mb-[27px]">
              <p className=" font-medium text-sm text-[#475569] mr-[5px]">Promotion</p>
              <img src={promobg} alt="promobg" />
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <h3 className="text-base font-medium  text-[#475569] mb-2">Available Color: <span className='text-[#171717]'>{selectedColor}</span></h3>
              <div className="flex space-x-2">
                {product.colors.map(color => (
                  <button
                    key={color2}
                    onClick={() => setSelectedColor(color)}
                    className={`  text-xs border ${selectedColor === color ? 'border-[#00A788] rounded-sm ' : '!border-transparent '}`}
                  >
                   <img src={color2} alt="" /> 
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <h3 className="text-base font-medium text-[#475569] mb-2">Select Size: <span className='text-[#171717]'>{selectedSize}</span></h3>
              <div className="flex space-x-3 mt-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 text-base font h-10 flex items-center justify-center rounded-md border ${selectedSize === size ? 'border-[#00A788] ' : 'border-[#CBD5E1] text-gray-700'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-base font-Poppins font-medium  text-[#171717] mb-2">Quantity</h3>
              <div className="flex items-center  relative z-[3] ">
                <div className='w-[195px] bg-transparent z-[-1] absolute top-0 left-[-5px] border border-[#E2E8F0] h-full rounded-full'></div>
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

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="w-full md:w-[412px] bg-[#00A788] hover:bg-[rgb(7,126,104)] text-white py-3 px-4 rounded-sm font-medium transition duration-150 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
          <div className=' w-full md:w-[25%]'>
            <div className='py-3 px-4 border border-[#E2E8F0] rounded-xl'>

          
           <h2 className='text-[18px] font-medium text-[#475569]'>Delivery Options </h2> 
           <div className='flex gap-x-2 mt-3'>
            <PiPackage size={24}  className='text-[#00B795]'/>

            <div>
              <p className='text-base font-medium text-[#334155]'>
              Regular 
              </p>
               <p className='text-[#475569] mt-1'>Delivery within 2-3 days</p>
             </div>
           </div>
           <div className='flex gap-x-2 mt-4'>
            <picture>
              <img src={packagseM} alt="packagseM" />
            </picture>
            <div>
              <p className='text-base font-medium text-[#CBD5E1]'>
              Express 
              </p>
               <p className='text-[#CBD5E1] mt-1'>Delivery within 24 Hours.</p>
             </div>
           </div>
             </div>
            <div className='py-3 px-4 border border-[#E2E8F0] rounded-xl mt-4'>

          
           <h2 className='text-xs font-medium text-[#475569] mb-2'>Sold by </h2> 
           <picture >
            <img src={agentlogo} alt="agentlogo" />
           </picture>
           <div className='flex gap-x-3 mt-4 pb-3 border-[#E2E8F0]  border-b'>
          
          <button className='bg-[#E6F8F4] cursor-pointer text-sm font-medium text-[#00A788] flex items-center gap-x-2 px-5.5 py-1.5 rounded-sm'><IoChatbubbleEllipsesOutline size={16} />
Chat Now </button>
          <button className='bg-[#F1F5F9] cursor-pointer text-sm font-medium text-[#475569] flex items-center gap-x-2 px-5.5 py-1.5 rounded-sm'>View Shop  </button>
           </div>
           <div className='flex items-center gap-x-5.5'>
           <div >
            <h2 className='text-xs font-medium text-[#475569] mb-3 mt-4'>Ship on Time</h2>
            <p className='text-[28px] text-[#475569]'>100%</p>
           </div>
           <div>
            <h2 className='text-xs font-medium text-[#475569] mb-3 mt-4'>Chat Response</h2>
            <p className='text-[28px] text-[#475569]'>90%</p>
           </div>
           <div>
            <h2 className='text-xs font-medium text-[#475569] mb-3 mt-4'>Shop Rating</h2>
            <p className='text-[28px] text-[#475569]'>99.8%</p>
           </div>
            </div>
             </div>
          </div>
        </div>
        </Container>
<div className='bg-[#F1F5F9] md:pb-[105px] pb-[50px] pt-[15px]'>
  <Container>



      {/* Description */}
      <div className="mb-3.5   rounded-sm bg-white py-[22px] px-[27px]  max-w-[995px]">
        <h2 className="text-2xl font-semibold text-[#252B42] mb-4">Description</h2>
        <div className="relative">
          <p
            className={`text-gray-700  text-base leading-[28px] whitespace-pre-line transition-all duration-500 ease-in-out overflow-hidden ${
              showFullDescription ? 'max-h-[1000px]' : 'max-h-[255px]'
            }`}
          >
            {descriptionText}
          </p>
          {!showFullDescription && (
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>
        <div className='text-center'>
       
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-[#0F172A] hover:text-[#0F172A] text-base font-medium  transition duration-300 mt-3"
        >
          {showFullDescription ? (
    <>
    <div className='flex items-center'>

     <p className='text-[#0F172A]'>See Less </p> <IoIosArrowUp className="ml-1" />
    </div>
    </>
  ) : (
    <>
     <div className='flex items-center'>
     <p className='text-[#0F172A]'> See More</p> <IoIosArrowDown className="ml-1" />
      </div>
    </>
  )}
        </button>
           
        </div>
      </div>

      

      {/* Specification */}
      <div className='bg-white rounded-sm py-[22px] px-[27px] max-w-[995px]'>
        <h2 className="text-2xl font-semibold text-[#252B42] mb-4">Specification</h2>
        <h3 className="text-lg font-medium text-[#252B42] mb-3">Sharp FP-J30E-B Air Purifier</h3>

        <div className="relative">
          <ul
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              showFullSpecification ? 'max-h-[1000px]' : 'max-h-[128px]'
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
        <div className='text-center'>
    
         <button
          onClick={() => setShowFullSpecification(!showFullSpecification)}
          className="text-[#0F172A] hover:text-[#0F172A] text-base font-medium  transition duration-300 mt-3"
        >
          {showFullSpecification ? (
    <>
    <div className='flex items-center'>

     <p className='text-[#0F172A]'>See Less </p> <IoIosArrowUp className="ml-1" />
    </div>
    </>
  ) : (
    <>
     <div className='flex items-center'>
     <p className='text-[#0F172A]'> See More</p> <IoIosArrowDown className="ml-1" />
      </div>
    </>
  )}
        </button>
        </div>
      </div>
      </Container>
    </div>
      </div>

    </div>
  )
}

export default ProductDetail
