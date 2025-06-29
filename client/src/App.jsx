import { useState, useEffect } from 'react';

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState('Navy Blue');
  const [selectedSize, setSelectedSize] = useState('XS');
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showFullSpecification, setShowFullSpecification] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Product data
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">FALCON</h1>
              <div className="ml-8 hidden md:flex items-center space-x-1">
                <input 
                  type="text" 
                  placeholder="Search for anything..." 
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                />
                <button className="p-2 bg-blue-600 text-white rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-blue-600">Electronics</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Home Appliances</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Mother & Baby</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Automotive</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Sports Gear</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">TRACK ORDER</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">HELP CENTER</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">SELL WITH US</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm text-gray-600">
        <span>Home</span> &gt; <span>Tops</span> &gt; <span>T-Shirts</span>
      </div>

      {/* Product Section */}
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

        {/* Description & Specification */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Description</h2>
            <p className="text-gray-600 mb-4">
              {showFullDescription ? product.description : `${product.description.substring(0, 200)}...`}
            </p>
            <button 
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              {showFullDescription ? 'See Less ▲' : 'See More ▼'}
            </button>
          </div>

          {/* Specification */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Specification</h2>
            <h3 className="text-md font-medium text-gray-700 mb-3">Sharp FP-J30E-B Air Purifier</h3>
            <ul className="text-gray-600 mb-4 space-y-2">
              {(showFullSpecification ? product.specifications : product.specifications.slice(0, 3)).map((spec, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {spec}
                </li>
              ))}
            </ul>
            {product.specifications.length > 3 && (
              <button 
                onClick={() => setShowFullSpecification(!showFullSpecification)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {showFullSpecification ? 'See Less ▲' : 'See More ▼'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FALCON</h3>
              <p className="text-gray-400 mb-4">Experience our new platform & Enjoy great deals and offers on your day to day</p>
              <p className="text-gray-400">House #64, Road13, ASA Center, Uttera, Dhaka-1402</p>
              <p className="text-gray-400">01729-1497201</p>
              <p className="text-gray-400">falcon@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">ABOUT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cancellation & Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">HELP</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Payments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">My Orders</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Need Support?</h3>
              <p className="text-gray-400 mb-6">10724-78140X</p>
              
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">DOWNLOAD APP</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-md">
                  <div className="mr-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">GET FOR</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </a>
                <a href="#" className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-md">
                  <div className="mr-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </a>
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-wider mt-6 mb-4">PAYMENTS ACCEPTED</h3>
              <div className="flex items-center">
                <svg className="w-10 h-6" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.805 5.769H21.11V4.142H18.43v1.627h-1.697v1.627h1.697v1.627h2.68V7.396h1.695V5.769h.001zM9.486 5.769H7.79V4.142H5.11v1.627H3.415v1.627h1.695v1.627h2.68V7.396h1.696V5.769zM23.5 0h-23C.225 0 0 .225 0 .5v15c0 .275.225.5.5.5h23c.275 0 .5-.225.5-.5V.5c0-.275-.225-.5-.5-.5zM7.79 10.232H5.11v1.627H3.415v1.627h1.695v1.627h2.68v-1.627h1.696v-1.627H7.79v-1.627zm13.32 3.254h-1.695v1.627h-2.68v-1.627h-1.697v-1.627h1.697v-1.627h2.68v1.627h1.695v1.627z" fill="#1A1F71"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;