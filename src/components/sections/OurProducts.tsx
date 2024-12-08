import React from 'react'; // Import React for JSX
import Image from 'next/image'; // Import Next.js Image for optimized image handling

// Array of product data
const products = [
  { id: 1, image: '/assets/images/Image-5.png', name: 'Library Stool Chair', price: '$20', badge: 'New' },
  { id: 2, image: '/assets/images/Image-6.png', name: 'Library Stool Chair', price: '$20', badge: 'Sale', originalPrice: '$50' },
  { id: 3, image: '/assets/images/Image-8.png', name: 'Library Stool Chair', price: '$20' },
  { id: 4, image: '/assets/images/Image-9.png', name: 'Library Stool Chair', price: '$20' },
  { id: 5, image: '/assets/images/Image-27.png', name: 'Library Stool Chair', price: '$20' },
  { id: 6, image: '/assets/images/Image-9.png', name: 'Library Stool Chair', price: '$20' },
  { id: 7, image: '/assets/images/Image-28.png', name: 'Library Stool Chair', price: '$20', badge: 'New' },
  { id: 8, image: '/assets/images/Image-17.png', name: 'Library Stool Chair', price: '$20' },
];

const OurProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                {/* Badge for New or Sale */}
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

              {/* Product Name */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              {/* Product Price and Add-to-Cart Button */}
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">
                  {product.badge === 'Sale' && (
                    <span className="line-through text-gray-400 mr-2">
                      {product.originalPrice}
                    </span>
                  )}
                  {product.price}
                </p>
                {/* Cart Icon Button */}
                <button
                  className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600"
                  aria-label="Add to Cart"
                >
                  <i className="fas fa-shopping-cart"></i>
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
