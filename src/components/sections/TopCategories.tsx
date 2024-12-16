import React from 'react'; // Importing React for JSX
import Image from 'next/image'; // Importing Next.js Image for optimized image handling

// Array of category data
const categories = [
  { 
    id: 1, 
    image: '/assets/images/Image-19.png', 
    name: 'Wing Chair', 
    products: '3,648 Products',
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
];

const TopCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Top Categories</h2> {/* Left-aligned Heading */}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              {/* Category Image */}
              <div className="relative w-full h-72"> {/* Adjusted height to make it bigger */}
                <Image
                  src={category.image} // Image source
                  alt={category.name} // Alt text for accessibility
                  width={350} // Image width slightly increased
                  height={350} // Image height slightly increased
                  className="rounded-md object-cover" // Use object-cover to fill the container
                />
                {/* Dark Transparent Shadow Effect */}
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 h-20" /> {/* Darker transparent shadow */}
              </div>

              {/* Overlay with Text */}
              <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4"> {/* Reduced opacity for a soft shadow */}
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
