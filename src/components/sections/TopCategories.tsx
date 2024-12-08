import React from 'react'; // Import React for JSX
import Image from 'next/image'; // Import Next.js Image for optimized image handling

// Array of category data
const categories = [
  {
    id: 1,
    image: '/assets/images/Image-19.png', // Path to category image
    name: 'Wing Chair', // Category name
    products: '3,648 Products', // Number of products in this category
  },
  {
    id: 2,
    image: '/assets/images/Image-18.png',
    name: 'Wooden Chair',
    products: '157 Products',
  },
  {
    id: 3,
    image: '/assets/images/Image-17.png',
    name: 'Desk Chair',
    products: '154 Products',
  },
  {
    id: 4,
    image: '/assets/images/Image-33.png',
    name: 'Sofa Chair',
    products: '498 Products',
  },
];

const TopCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Categories</h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id} // Unique key for each category
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Category Image */}
              <div className="relative w-full h-48">
                <Image
                  src={category.image} // Image source
                  alt={category.name} // Alt text for accessibility
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                <p className="text-sm text-gray-300">{category.products}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories; // Exporting the component for use in other parts of the app
