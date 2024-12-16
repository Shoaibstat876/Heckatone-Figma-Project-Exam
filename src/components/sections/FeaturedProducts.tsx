import React from 'react'; // Importing React for JSX
import Image from 'next/image'; // Import Next.js Image for optimized image handling
import { PiShoppingCartSimpleLight } from "react-icons/pi"; // Import the icon from react-icons/pi

// Sample product data
const products = [
  {
    id: 1,
    image: '/assets/images/Image-5.png',
    name: 'Library Stool Chair',
    price: '$20',
    badge: 'New',
    priceStyle: 'text-[#000000] font-[400]', // Custom style for price
    nameStyle: 'text-lg font-medium text-[#007580] font-[400]', // Custom name style
    cartColor: 'bg-[#029fae] font-[400] hover:bg-teal-600', // Cart icon color for product 1
    iconColor: 'text-white', // Cart icon color for product 1
  },
  {
    id: 2,
    image: '/assets/images/Image-6.png',
    name: 'Library Stool Chair',
    price: '$30',
    badge: 'Sale',
    originalPrice: '$20', // Original price
    priceStyle: 'text-[#000000] font-[400]', // Custom style for price
    nameStyle: 'text-lg font-medium font-[400]', // Custom name style
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', // Cart button color for product 2 (grey background)
    iconColor: 'text-black', // Cart icon color for product 2 (black)
  },
  {
    id: 3,
    image: '/assets/images/Image-8.png',
    name: 'Library Stool Chair',
    price: '$25',
    priceStyle: 'text-[#000000] font-[400]', // Custom style for price
    nameStyle: 'text-lg font-medium', // Custom name style
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', // Cart button color for product 3 (grey background)
    iconColor: 'text-black', // Cart icon color for product 3 (black)
  },
  {
    id: 4,
    image: '/assets/images/Image-9.png',
    name: 'Library Stool Chair',
    price: '$50',
    priceStyle: 'text-[#000000] font-[400]', // Custom style for price
    nameStyle: 'text-lg font-medium', // Custom name style
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600', // Cart button color for product 4 (grey background)
    iconColor: 'text-black', // Cart icon color for product 4 (black)
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Title of the Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>

        {/* Grid to display products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Loop through each product */}
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="relative w-full h-60">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={312} // Custom width for image
                  height={312} // Custom height for image
                  className="rounded-md object-contain"
                />
                
                {/* Display Badge if available */}
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${product.badge === 'New' ? 'bg-green-500' : 'bg-red-500'}`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Name with custom style */}
              <h3 className={`${product.nameStyle} mt-4 text-gray-800`}>
                {product.name}
              </h3>

              {/* Product Price with custom style */}
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">
                  {/* Only for product with id 2, show original price first, then strike-through sale price */}
                  {product.id === 2 && (
                    <>
                      <span className="text-black mr-2">{product.originalPrice}</span>
                      <span className="text-gray-500 font-[400] line-through">{product.price}</span>
                    </>
                  )}

                  {/* For other products, show the price normally */}
                  {product.id !== 2 && <span className={product.priceStyle}>{product.price}</span>}
                </p>

                {/* Cart Button with icon */}
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

export default FeaturedProducts; // Exporting the component for use
