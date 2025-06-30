import React, { useEffect, useState } from 'react'
import Container from "../Components/Container"
import Breadcrumb from '../Components/Breadcrumb'
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
    colors: ['Navy Blue', 'Black', 'White', 'Gray'],
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
      "https://via.placeholder.com/600x600/1e3a8a/ffffff?text=Shirt+Front",
      "https://via.placeholder.com/600x600/1e3a8a/ffffff?text=Shirt+Back",
      "https://via.placeholder.com/600x600/1e3a8a/ffffff?text=Shirt+Side",
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
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-auto object-contain rounded-md"
                style={{ height: '400px' }}
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto py-2">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 border rounded-md overflow-hidden ${selectedImage === index ? 'border-blue-500 border-2' : 'border-gray-200'}`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating} ({product.reviews.toLocaleString()})</span>
            </div>

            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <span className="ml-2 text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6">
              <p className="text-sm text-yellow-700">
                <span className="font-semibold">Promotion</span><br />
                {product.promotion}
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Available Color: {selectedColor}</h3>
              <div className="flex space-x-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 rounded-full text-xs border ${selectedColor === color ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 text-gray-700'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Select Size: {selectedSize}</h3>
              <div className="flex space-x-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md border ${selectedSize === size ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 text-gray-700'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  -
                </button>
                <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300 bg-white text-gray-900">
                  {quantity}
                </div>
                <button 
                  onClick={increaseQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition duration-150 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>
        </div>
    </Container>
    </div>
  )
}

export default ProductDetail
