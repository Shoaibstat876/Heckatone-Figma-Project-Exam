import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const product = {
  id: 1,
  image: '/assets/images/Image-6.png',
  name: 'Library Stool Chair',
  price: '$20.00 USD',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim, consectetur adipiscing.',
};

const featuredProducts = [
  { id: 2, image: '/assets/images/Image-1.png', name: 'Library Stool Chair', price: '$99' },
  { id: 3, image: '/assets/images/Image-5.png', name: 'Library Stool Chair', price: '$99' },
  { id: 4, image: '/assets/images/Image-17.png', name: 'Library Stool Chair', price: '$99' },
  { id: 5, image: '/assets/images/Image-8.png', name: 'Library Stool Chair', price: '$99' },
  { id: 6, image: '/assets/images/Image-14.png', name: 'Library Stool Chair', price: '$99' },
];

const SingleProductPage = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl text-teal-500 mt-4">{product.price}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h18l-1.68 9.43a2 2 0 01-1.99 1.57H6.67a2 2 0 01-1.99-1.57L3 3zm0 0l1.34 7.58M16 17.58a2 2 0 112 2 2 2 0 11-2-2m-8 0a2 2 0 112 2 2 2 11-2-2"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <Link href="/products" className="text-blue-900 hover:underline">
              View all
            </Link>
          </div>
          <div className="flex overflow-x-scroll space-x-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="min-w-[200px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={160}
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
                <h3 className="mt-4 text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SingleProductPage;
