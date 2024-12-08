import React from 'react'; // Import React for JSX
import Layout from '@/components/layout/Layout'; // Importing the layout for consistent page structure

// Product details for the single product
const product = {
  id: 1,
  image: '/assets/images/Image-6.png', // Path to product image
  name: 'Library Stool Chair', // Product name
  price: '$20.00 USD', // Product price
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim, consectetur adipiscing.', // Product description
};

// Array of featured products
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
      {/* Product Details Section */}
      <section className="py-16">
        {/* 
          Section Wrapper:
          - `py-16`: Vertical padding for spacing.
        */}
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 
            Grid Layout:
            - Single column (`grid-cols-1`) on smaller screens.
            - Two columns (`lg:grid-cols-2`) on larger screens.
            - `gap-10`: Adds spacing between columns.
          */}

          {/* Product Image */}
          <div>
            <img
              src={product.image} // Image source
              alt={product.name} // Alt text for accessibility
              className="w-full h-auto rounded-lg shadow-lg"
              /* 
                Image Styling:
                - `w-full`: Full width of the container.
                - `h-auto`: Maintains aspect ratio.
                - `rounded-lg`: Adds rounded corners for modern design.
                - `shadow-lg`: Adds shadow for depth.
              */
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            {/* 
              Product Name:
              - `text-3xl`: Large font size for prominence.
              - `font-bold`: Bold font weight.
              - `text-gray-800`: Dark gray color for readability.
            */}
            <p className="text-2xl text-teal-500 mt-4">{product.price}</p>
            {/* 
              Product Price:
              - `text-2xl`: Large font size for emphasis.
              - `text-green-600`: Green color to indicate price positively.
              - `mt-4`: Adds top margin for spacing.
            */}
            <p className="text-gray-600 mt-4">{product.description}</p>
            {/* 
              Product Description:
              - `text-gray-600`: Lighter gray for secondary text.
              - `mt-4`: Adds spacing from the price.
            */}
            <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-white-800 flex items-center">
              {/* 
                Add-to-Cart Button:
                - `mt-6`: Adds margin from the description.
                - `px-6 py-3`: Padding for size and clickability.
                - `bg-blue-900`: Dark blue background.
                - `text-white`: White text for contrast.
                - `rounded-lg`: Rounded corners for aesthetics.
                - `hover:bg-blue-800`: Slightly lighter blue on hover.
                - `flex items-center`: Aligns button content horizontally.
              */}
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
              Add to Cart {/* Button text */}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        {/* 
          Section Wrapper:
          - `py-16`: Adds vertical padding.
          - `bg-gray-50`: Light gray background for contrast.
        */}
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <a href="/products" className="text-blue-900 hover:underline">
              View all
            </a>
            {/* 
              "View All" Link:
              - `text-blue-900`: Blue text for visibility.
              - `hover:underline`: Underline on hover for interactivity.
            */}
          </div>

          {/* Featured Products Carousel */}
          <div className="flex overflow-x-scroll space-x-4">
            {/* 
              Horizontal Scroll:
              - `flex overflow-x-scroll`: Enables horizontal scrolling for products.
              - `space-x-4`: Adds spacing between product cards.
            */}
            {featuredProducts.map((product) => (
              <div key={product.id} className="min-w-[200px]">
                {/* 
                  Product Card:
                  - `min-w-[200px]`: Sets a minimum width for the card to fit in the carousel.
                */}
                <img
                  src={product.image} // Product image
                  alt={product.name} // Alt text for accessibility
                  className="w-full h-40 object-cover rounded-md"
                  /* 
                    Image Styling:
                    - `w-full`: Full width of the container.
                    - `h-40`: Fixed height for consistency.
                    - `object-cover`: Maintains aspect ratio while filling the container.
                    - `rounded-md`: Adds rounded corners.
                  */
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

export default SingleProductPage; // Exporting the page component

