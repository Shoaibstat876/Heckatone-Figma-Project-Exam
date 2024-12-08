import React from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';

const features = [
  {
    icon: '🚚',
    title: 'Next day as standard',
    description: 'Order before 2pm and get your order the next day as standard',
  },
  {
    icon: '🎨',
    title: 'Made by true artisans',
    description: 'Handmade crafted goods made with real passion and craftsmanship',
  },
  {
    icon: '💰',
    title: 'Unbeatable prices',
    description: 'For our materials and quality you won’t find better prices anywhere',
  },
  {
    icon: '♻️',
    title: 'Recycled packaging',
    description: 'We use 100% recycled to ensure our footprint is more manageable',
  },
];

const products = [
  { id: 1, image: '/assets/images/sofa big.png', name: 'The Poplar suede sofa', price: '$99.00' },
  { id: 2, image: '/assets/images/Dandy.png', name: 'The Dandy chair', price: '$99.00' },
  { id: 3, image: '/assets/images/lonely.png', name: 'Lonely Chair', price: '$99.00' },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div className="bg-teal-700 text-white p-10 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">About Us - Comforty</h1>
            <p>
              At Comforty, we believe that the right chair can transform your space and elevate your comfort.
              Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-gray-100">
              View collection
            </button>
          </div>

          {/* Right Column */}
          <div>
            <Image
              src="/assets/images/Image-5.png"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">What Makes Our Brand Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 font-bold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Our Popular Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
