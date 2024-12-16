import React from 'react';
import Image from 'next/image';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';

// Sample product data
const products = [
  {
    id: 1,
    image: '/assets/images/Image-5.png',
    name: 'Library Stool Chair',
    price: '$20',
    badge: 'New',
    priceStyle: 'text-black font-[400]',
    nameStyle: 'text-lg font-medium text-[#007580] font-[400]',
    cartColor: 'bg-[#029fae] font-[400] hover:bg-teal-600',
    iconColor: 'text-white',
  },
  {
    id: 2,
    image: '/assets/images/Image-6.png',
    name: 'Library Stool Chair',
    price: '$30',
    badge: 'Sale',
    originalPrice: '$20',
    priceStyle: 'text-black font-[400]',
    nameStyle: 'text-lg font-medium font-[400]',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600',
    iconColor: 'text-black',
  },
  {
    id: 3,
    image: '/assets/images/Image-8.png',
    name: 'Library Stool Chair',
    price: '$25',
    priceStyle: 'text-black font-[400]',
    nameStyle: 'text-lg font-medium',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600',
    iconColor: 'text-black',
  },
  {
    id: 4,
    image: '/assets/images/Image-9.png',
    name: 'Library Stool Chair',
    price: '$50',
    priceStyle: 'text-black font-[400]',
    nameStyle: 'text-lg font-medium',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600',
    iconColor: 'text-black',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col min-h-[440px] h-auto"
            >
              {/* Image */}
              <div className="relative w-full h-40 sm:h-48 lg:h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={312}
                  height={312}
                  className="rounded-md object-cover"
                />
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${
                      product.badge === 'New' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className={`${product.nameStyle} mt-4 flex-grow`}>{product.name}</h3>

              {/* Price */}
              <div className="mt-2">
                <p className={product.priceStyle}>
                  {product.id === 2 ? (
                    <>
                      <span className="mr-2">{product.originalPrice}</span>
                      <span className="line-through text-gray-500">{product.price}</span>
                    </>
                  ) : (
                    product.price
                  )}
                </p>
              </div>

              {/* Cart Button */}
              <div className="mt-4 flex justify-end">
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

export default FeaturedProducts;
