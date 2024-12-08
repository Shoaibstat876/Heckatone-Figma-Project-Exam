import React from 'react'; // Importing React for JSX
import Image from 'next/image'; // Importing Next.js Image for optimized image handling

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      {/* Main section */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Welcome to Chairy
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Best Furniture Collection For Your Interior.
          </h1>
          <p className="mt-4 text-gray-600">
            Discover our exclusive collection of furniture designed for comfort and elegance.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/assets/images/Product Image.png" // Path to the hero image
            alt="Hero Chair" // Alt text for accessibility
            width={600} // Adjust the width as needed
            height={400} // Adjust the height as needed
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
