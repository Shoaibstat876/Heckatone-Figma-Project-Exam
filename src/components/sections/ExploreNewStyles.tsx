import React from 'react'; // Importing React to use JSX

const ExploreNewStyles = () => {
  return (
    <section className="py-16"> {/* Main Section Wrapper */}
      {/* Container for Alignment and Layout */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Vertical Title */}
        <div className="w-full lg:w-1/4 text-center lg:text-left">
          {/* Title with Rotation for Desktop */}
          <h2 className="text-lg font-bold text-gray-800 rotate-90 lg:rotate-0 lg:-ml-4 lg:pl-4">
            Explore New and Popular Styles
          </h2>
          {/* 
            - On smaller screens (default), the title is rotated 90 degrees.
            - On larger screens (`lg:`), the title is unrotated and aligned to the left.
            - `-ml-4` and `pl-4` adjust spacing for proper alignment.
          */}
        </div>

        {/* Image Layout */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Large Image */}
          <div className="relative">
            <img
              src="/assets/images/Image-8.png" // Replace with the correct image path
              alt="Large Style"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* 
              - Large image spans the first column in the grid.
              - `rounded-lg` adds rounded corners for aesthetics.
              - `object-cover` ensures the image maintains aspect ratio while filling its container.
            */}
          </div>

          {/* Right Grid Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Small Image */}
            <img
              src="/assets/images/Image-9.png" // Replace with correct image path
              alt="Style 1"
              className="w-full h-36 object-cover rounded-lg"
            />
            {/* Second Small Image */}
            <img
              src="/assets/images/Image-24.png" // Replace with correct image path
              alt="Style 2"
              className="w-full h-36 object-cover rounded-lg"
            />
            {/* Third Small Image */}
            <img
              src="/assets/images/Image-24.png" // Replace with correct image path
              alt="Style 3"
              className="w-full h-36 object-cover rounded-lg"
            />
            {/* Fourth Small Image */}
            <img
              src="/assets/images/Image-5.png" // Replace with correct image path
              alt="Style 4"
              className="w-full h-36 object-cover rounded-lg"
            />
            {/* 
              - Each small image is placed in a 2x2 grid.
              - `h-36` ensures uniform height for all small images.
              - `gap-4` creates consistent spacing between images.
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreNewStyles; // Exporting the component for use in other parts of the app

