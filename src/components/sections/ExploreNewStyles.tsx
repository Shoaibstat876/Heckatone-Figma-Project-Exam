import React from 'react';
import Image from 'next/image';

const ExploreNewStyles = () => {
  return (
    <section className="py-16"> {/* Main Section Wrapper */}
      {/* Container for Alignment and Layout */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Vertical Title */}
        <div className="w-full lg:w-1/4 text-center lg:text-left">
          {/* Title with Rotation for Small Screens */}
          <h2 className="text-lg font-bold text-gray-800 transform rotate-90 lg:rotate-0 lg:translate-x-0 lg:translate-y-0 lg:-ml-4 lg:pl-4">
            Explore New and Popular Styles
          </h2>
          {/* 
            - On smaller screens (default), the title is rotated 90 degrees (`rotate-90`).
            - On larger screens (`lg:`), the rotation is reset (`rotate-0`), and the title is aligned to the left (`text-left`).
            - `-ml-4` and `pl-4` are added for proper alignment on larger screens.
          */}
        </div>

        {/* Image Layout */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Large Image */}
          <div className="relative col-span-1">
            <Image
              src="/assets/images/Image-8.png" // Replace with the correct image path
              alt="Large Style"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Right Grid Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Small Image */}
            <div className="relative w-full aspect-w-1 aspect-h-1">
              <Image
                src="/assets/images/Image-9.png"
                alt="Style 1"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
            {/* Second Small Image */}
            <div className="relative w-full aspect-w-1 aspect-h-1">
              <Image
                src="/assets/images/Image-24.png"
                alt="Style 2"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
            {/* Third Small Image */}
            <div className="relative w-full aspect-w-1 aspect-h-1">
              <Image
                src="/assets/images/Image-24.png"
                alt="Style 3"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
            {/* Fourth Small Image */}
            <div className="relative w-full aspect-w-1 aspect-h-1">
              <Image
                src="/assets/images/Image-5.png"
                alt="Style 4"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreNewStyles;
