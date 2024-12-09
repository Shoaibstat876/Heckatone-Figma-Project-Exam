import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';

// Cart items array
const cartItems = [
  {
    id: 1,
    image: '/assets/images/Image-2.png', // Path to product image
    name: 'Library Stool Chair', // Product name
    details: 'Ashen Slate/Cobalt Bliss', // Additional details
    size: 'L', // Product size
    quantity: 1, // Quantity
    price: '$99', // Price
  },
  {
    id: 2,
    image: '/assets/images/Image-27.png',
    name: 'Library Stool Chair',
    details: 'Ashen Slate/Cobalt Bliss',
    size: 'L',
    quantity: 1,
    price: '$99',
  },
];

const CartPage = () => {
  const subtotal = 198.0; // Calculate subtotal for cart items

  return (
    <Layout>
      {/* Cart Page Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Bag Section */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Bag</h1>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  {/* Product Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.details}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>

                  {/* Product Actions */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">{item.price}</p>
                    <div className="flex items-center justify-end space-x-2 mt-2">
                      <button className="text-gray-500 hover:text-gray-800">❤️</button>
                      <button className="text-gray-500 hover:text-gray-800">🗑️</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-bold text-gray-800">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Estimated Delivery & Handling</p>
                <p className="font-bold text-gray-800">Free</p>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <p className="text-lg font-bold text-gray-800">Total</p>
                <p className="text-lg font-bold text-gray-800">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;
