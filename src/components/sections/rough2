import React from "react";
import Image from "next/image";

const ExploreNewStyles = () => {
  return (
    <section className="py-8 bg-white w-full relative">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Horizontal Heading for Small Screens */}
        <h2 className="block lg:hidden text-center text-xl font-semibold text-gray-800 mb-6">
          EXPLORE NEW AND POPULAR STYLES
        </h2>

        {/* Vertical Heading - Outside Large Image */}
        <h2 className="absolute hidden lg:block -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-xl lg:text-2xl font-semibold text-gray-800 whitespace-nowrap">
          EXPLORE NEW AND POPULAR STYLES
        </h2>

        {/* Layout Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 ml-20">
          {/* Large Image Section */}
          <div className="w-full lg:w-[50%] h-[250px] sm:h-[300px] lg:h-[400px] relative">
            <Image
              src="/assets/images/Image-16.png"
              alt="Large Image"
              fill
              className="rounded-lg object-cover shadow-lg"
              priority
            />
          </div>

          {/* Smaller Images Section */}
          <div className="w-full lg:w-[50%] grid grid-cols-2 gap-4 sm:gap-6">
            {/* Image 1 */}
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[190px] relative">
              <Image
                src="/assets/images/Image-9.png"
                alt="Image 1"
                fill
                className="rounded-lg object-cover shadow-md"
                priority
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[190px] relative">
              <Image
                src="/assets/images/Image-5.png"
                alt="Image 2"
                fill
                className="rounded-lg object-cover shadow-md"
                priority
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[195px] relative">
              <Image
                src="/assets/images/Image-11.png"
                alt="Image 3"
                fill
                className="rounded-lg object-cover shadow-md"
                priority
              />
            </div>

            {/* Image 4 */}
            <div className="w-full h-[120px] sm:h-[140px] lg:h-[190px] relative">
              <Image
                src="/assets/images/Image-5.png"
                alt="Image 4"
                fill
                className="rounded-lg object-cover shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreNewStyles;