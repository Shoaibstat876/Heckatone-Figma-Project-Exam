import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout'; // Import Layout for consistent page structure

// Product data
const products = [
  { id: 1, image: '/assets/images/Image-5.png', name: 'Library Stool Chair', price: '$20', badge: 'New' },
  { id: 2, image: '/assets/images/Image-6.png', name: 'Library Stool Chair', price: '$20', badge: 'Sale', originalPrice: '$50' },
  { id: 3, image: '/assets/images/Image-8.png', name: 'Library Stool Chair', price: '$20' },
  { id: 4, image: '/assets/images/Image-9.png', name: 'Library Stool Chair', price: '$20' },
  { id: 5, image: '/assets/images/Image-18.png', name: 'Library Stool Chair', price: '$20' },
  { id: 6, image: '/assets/images/Image-24.png', name: 'Library Stool Chair', price: '$20' },
  { id: 7, image: '/assets/images/Image-12.png', name: 'Library Stool Chair', price: '$20', badge: 'New' },
  { id: 8, image: '/assets/images/Image-5.png', name: 'Library Stool Chair', price: '$20' },
];

const ProductPage = () => {
  return (
    <Layout>
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-6">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="object-cover rounded-md"
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
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">
                {product.badge === 'Sale' && (
                  <span className="line-through text-gray-400 mr-2">
                    {product.originalPrice}
                  </span>
                )}
                {product.price}
              </p>
              {/* Cart Icon Button */}
              <button
                className="mt-4 p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
                aria-label="Add to Cart"
              >
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          ))}
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
              className="px-6 py-2 bg-teal-500 text-white rounded-r hover:bg-teal-500"
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
                  layout="fill"
                  className="object-cover rounded-md"
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
