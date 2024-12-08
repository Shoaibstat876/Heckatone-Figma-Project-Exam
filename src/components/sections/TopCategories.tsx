import React from 'react'; // Import React for JSX

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
      {/* 
        Section Wrapper:
        - `py-16`: Adds vertical padding.
        - `bg-gray-50`: Light gray background for subtle contrast.
      */}
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Categories</h2>
        {/* 
          Title Styling:
          - `text-2xl`: Large font size for prominence.
          - `font-bold`: Bold text for emphasis.
          - `text-gray-800`: Dark gray color for contrast.
          - `mb-6`: Margin below the title for spacing.
        */}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 
            Grid Layout:
            - `grid-cols-1`: Single-column layout for mobile screens.
            - `sm:grid-cols-2`: Two-column layout for small-medium screens.
            - `lg:grid-cols-4`: Four-column layout for larger screens.
            - `gap-6`: Consistent spacing between grid items.
          */}
          {categories.map((category) => (
            <div
              key={category.id} // Unique key for each category
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              /* 
                Card Styling:
                - `relative`: Ensures child elements like overlays are positioned correctly.
                - `rounded-lg`: Adds rounded corners for a modern look.
                - `overflow-hidden`: Prevents content from overflowing outside the card.
                - `shadow`: Adds subtle shadow for depth.
                - `hover:shadow-lg`: Enhances shadow on hover for interactivity.
                - `transition`: Smooth animation for hover effects.
              */
            >
              {/* Category Image */}
              <img
                src={category.image} // Image source
                alt={category.name} // Alt text for accessibility
                className="w-full h-48 object-cover"
                /* 
                  Image Styling:
                  - `w-full`: Ensures the image fills the width of the container.
                  - `h-48`: Fixed height for consistent layout.
                  - `object-cover`: Maintains aspect ratio while covering the container.
                */
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                {/* 
                  Overlay Styling:
                  - `absolute inset-0`: Covers the entire card.
                  - `bg-black bg-opacity-30`: Adds a semi-transparent black overlay.
                  - `flex flex-col justify-end`: Positions content at the bottom.
                  - `p-4`: Adds padding for spacing.
                */}
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                {/* 
                  Category Name:
                  - `text-lg`: Slightly larger text for prominence.
                  - `font-bold`: Bold text for emphasis.
                  - `text-white`: White color for visibility against the overlay.
                */}
                <p className="text-sm text-gray-300">{category.products}</p>
                {/* 
                  Number of Products:
                  - `text-sm`: Smaller font size for subtle detail.
                  - `text-gray-300`: Light gray for contrast against the overlay.
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories; // Exporting the component for use in other parts of the app

