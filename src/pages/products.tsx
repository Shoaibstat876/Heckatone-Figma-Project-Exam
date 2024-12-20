import React from 'react';
import Image from 'next/image';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import Layout from '@/components/layout/Layout';

// Product data
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
    iconColor: 'text-white',
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
    iconColor: 'text-black',
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
    iconColor: 'text-black',
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
    iconColor: 'text-black',
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
    iconColor: 'text-black',
  },
  {
    id: 6,
    image: '/assets/images/Image-24.png',
    name: 'Library Stool Chair',
    price: '$30',
    badge: 'Sale',
    originalPrice: '$20',
    imageStyle: { width: 312, height: 312 },
    nameStyle: 'text-lg font-[400] text-[#000000]',
    priceStyle: 'text-[#000000] font-[400]',
    cartColor: 'bg-[#f0f2f3] font-[500] hover:bg-gray-600',
    iconColor: 'text-black',
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
    iconColor: 'text-black',
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
    iconColor: 'text-black',
  },
];

const ProductPage = () => {
  return (
    <Layout>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>

          {/* Products Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col min-h-[420px] h-auto"
                      >
                        {/* Product Image */}
                        <div className="relative w-full h-48 sm:h-56 lg:h-60">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={product.imageStyle.width}
                            height={product.imageStyle.height}
                            className="rounded-md object-cover"
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
                        <h3 className={`${product.nameStyle} mt-4 flex-grow`}>{product.name}</h3>
          
                        {/* Product Price and Add-to-Cart Button */}
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-gray-600">
                            {product.id === 2 || product.id === 6 ? (
                              <>
                                <span className="text-black mr-2">{product.originalPrice}</span>
                                <span className="text-gray-500 font-[400] line-through">{product.price}</span>
                              </>
                            ) : (
                              <span className={product.priceStyle}>{product.price}</span>
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

      {/* Newsletter Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Or Subscribe To The Newsletter
          </h2>
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Email Address..."
              className="px-4 py-2 w-full max-w-sm border rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-teal-500 text-white rounded-r hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="flex overflow-x-scroll space-x-4">
            {products.map((product) => (
              <div key={product.id} className="relative w-40 h-40">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
