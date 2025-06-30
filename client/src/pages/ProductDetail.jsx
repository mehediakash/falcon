import React, { useEffect, useState } from 'react'
import Container from "../Components/Container"
import Breadcrumb from '../Components/Breadcrumb'
import productimg1 from "../assets/product/image 540.png"
import productimg2 from "../assets/product/image 541.png"
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import promobg from "../assets/product/Group 1010108454.png"
import color1 from "../assets/product/Frame 48098691.png"
import color2 from "../assets/product/Frame 48098693.png"


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

  return (
    <div className='bg-[#F1F5F9]'>
    <Container>
      <Breadcrumb></Breadcrumb>
    </Container>
      <div className="bg-white ">
            <Container>
        <div className="flex flex-col md:flex-row gap-8 py-6 ">
          {/* Product Images */}
          <div className="w-full md:w-[30%]">
            <div className="bg-white rounded-lg  mb-4">
              <img 
                src={productimg1} 
                alt={product.name} 
                className="w-[380px] h-auto object-contain rounded-md"
               
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
            <h1 className="text-2xl font-semibold text-[#0F172A]  ">{product.name}</h1>
            
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
              className="w-full md:w-[412px] bg-[#00A788] hover:bg-[rgb(7,126,104)] text-white py-3 px-4 rounded-md font-medium transition duration-150 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
          <div className=' w-full md:w-[25%]'>
            Delivery Options
          </div>
        </div>
        </Container>
      </div>

    </div>
  )
}

export default ProductDetail
