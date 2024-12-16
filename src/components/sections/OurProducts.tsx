import React from 'react'; // Importing React for JSX
import Image from 'next/image'; // Importing Next.js Image for optimized image handling
import { PiShoppingCartSimpleLight } from 'react-icons/pi'; // Import the cart icon from Phosphor React

// Array of product data with independent styling for each product
const products = [
  { 
    id: 1, 
    image: '/assets/images/Image-5.png', 
    name: 'Library Stool Chair', 
    price: '$20', 
    badge: 'New',
    imageStyle: { width: 312, height: 312 },
    nameStyle: 'text-lg font-[400] text-[#007580]',
    priceStyle: 'text-[#000000] font-[400]',
    cartColor: 'bg-[#029fae] hover:bg-teal-600',
    iconColor: 'text-white'
  },
  { 
    id: 2, 
    image: '/assets/images/Image-6.png', 
    name: 'Library Stool Chair', 
    price: '$30', 
    badge: 'Sale', 
    originalPrice: '$20',
    imageStyle: { width: 312, height: 312 },
    nameStyle: 'text-lg font-[400] text-[#000000]',  
    priceStyle: 'text-[#000000] font-[400]',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', 
    iconColor: 'text-black'
  },
  { 
    id: 3, 
    image: '/assets/images/Image-8.png', 
    name: 'Library Stool Chair', 
    price: '$25', 
    imageStyle: { width: 312, height: 312 },
    nameStyle: 'text-lg font-[400] text-[#000000]',
    priceStyle: 'text-[#000000] font-[400]',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', 
    iconColor: 'text-black'
  },
  { 
    id: 4, 
    image: '/assets/images/Image-9.png', 
    name: 'Library Stool Chair', 
    price: '$20', 
    imageStyle: { width: 312, height: 312 },
    nameStyle: 'text-lg font-[400] text-[#000000]',
    priceStyle: 'text-[#000000] font-[400]',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', 
    iconColor: 'text-black'
  },
  { 
    id: 5, 
    image: '/assets/images/Image-14.png', 
    name: 'Library Stool Chair', 
    price: '$20', 
    badge: 'New',
    imageStyle: { width: 312, height: 312 },
    nameStyle: 'text-lg font-[400] text-[#000000]',
    priceStyle: 'text-[#000000] font-[400]',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', 
    iconColor: 'text-black'
  },
  { 
    id: 6, 
    image: '/assets/images/Image-24.png', 
    name: 'Library Stool Chair', 
    price: '$30', 
    badge: 'Sale', 
    originalPrice: '$50',
    imageStyle: { width: 312, height: 312 },
    nameStyle: 'text-lg font-[400] text-[#000000]',
    priceStyle: 'text-[#000000] font-[400]',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', 
    iconColor: 'text-black'
  },
  { 
    id: 7, 
    image: '/assets/images/Image-25.png', 
    name: 'Library Stool Chair', 
    price: '$20', 
    imageStyle: { width: 312, height: 312 },
    nameStyle: 'text-lg font-[400] text-[#000000]',
    priceStyle: 'text-[#000000] font-[400]',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', 
    iconColor: 'text-black'
  },
  { 
    id: 8, 
    image: '/assets/images/Image-5.png', 
    name: 'Library Stool Chair', 
    price: '$20', 
    imageStyle: { width: 312, height: 312 },
    nameStyle: 'text-lg font-[400] text-[#000000]',
    priceStyle: 'text-[#000000] font-[400]',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', 
    iconColor: 'text-black'
  },
];

const OurProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Products</h2> {/* Centered Heading */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="relative w-full h-60"> {/* Adjusted height for card size */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={product.imageStyle.width}
                  height={product.imageStyle.height}
                  className={`rounded-md`}
                />
                {/* Badge for New or Sale */}
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${
                      product.badge === 'New' ? 'bg-green-500' : 'bg-orange-500'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h3 className={`${product.nameStyle} mt-4 text-gray-800`}>
                {product.name}
              </h3>

              {/* Product Price and Add-to-Cart Button */}
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">
                  {/* Display sale price for product with id 2 and id 6 */}
                  {product.id === 2 || product.id === 6 ? (
                    <>
                      <span className="text-black mr-2">{product.originalPrice}</span> {/* Original price */}
                      <span className="text-gray-500 font-[400] line-through">{product.price}</span> {/* Strike-through sale price */}
                    </>
                  ) : (
                    <span className={product.priceStyle}>{product.price}</span> // Normal price for other products
                  )}
                </p>

                {/* Cart Icon Button */}
                <button
                  className={`${product.cartColor} text-white p-2 rounded-full hover:bg-opacity-80`} 
                  aria-label="Add to Cart"
                >
                  <PiShoppingCartSimpleLight size={24} className={product.iconColor} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
