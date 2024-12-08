import React from 'react'; // Importing React for JSX

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      {/* 
        Main section with:
        - `bg-gray-50`: Light gray background for subtle contrast.
        - `py-16`: Vertical padding to create spacing around the section.
      */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* 
          Flex container for layout:
          - `flex-col-reverse`: Stacks text and image vertically on smaller screens, with text below the image.
          - `lg:flex-row`: Arranges text and image side-by-side on larger screens.
          - `items-center`: Vertically centers the content within the flex container.
        */}

        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left px-6">
          {/* 
            Text container:
            - `lg:w-1/2`: Takes up half the width on large screens.
            - `text-center`: Centers text on small screens.
            - `lg:text-left`: Aligns text to the left on large screens.
            - `px-6`: Horizontal padding for spacing.
          */}
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Welcome to Chairy {/* Tagline text in uppercase */}
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Best Furniture Collection For Your Interior.
          </h1>
          {/* 
            Main heading:
            - `text-4xl`: Large font size for prominence.
            - `font-extrabold`: Bold weight for emphasis.
            - `leading-tight`: Reduces line height for a tighter look.
          */}
          <p className="mt-4 text-gray-600">
            Discover our exclusive collection of furniture designed for comfort and elegance.
          </p>
          {/* 
            Subheading:
            - `mt-4`: Top margin for spacing from the heading.
            - `text-gray-600`: Softer gray color for contrast.
          */}
          <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-white-800">
            Shop Now
          </button>
          {/* 
            Call-to-action button:
            - `mt-6`: Top margin for spacing from the text.
            - `px-6 py-3`: Padding for size and clickability.
            - `bg-blue-900`: Dark blue background.
            - `text-white`: White text for contrast.
            - `rounded-lg`: Rounded corners for modern design.
            - `shadow`: Adds a shadow for depth.
            - `hover:bg-blue-800`: Slightly lighter blue on hover.
          */}
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          {/* 
            Image container:
            - `lg:w-1/2`: Takes up half the width on large screens.
            - `flex justify-center`: Centers the image horizontally.
          */}
          <img
            src="/assets/images/Product Image.png" // Path to the hero image
            alt="Hero Chair" // Alt text for accessibility
            className="max-w-full h-auto"
            /* 
              Image styling:
              - `max-w-full`: Ensures the image doesn’t exceed its container width.
              - `h-auto`: Maintains aspect ratio.
            */
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; // Exporting the component for use

