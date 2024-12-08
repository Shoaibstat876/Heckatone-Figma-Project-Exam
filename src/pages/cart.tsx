import React from 'react'; // Import React for JSX
import Layout from '@/components/layout/Layout'; // Import Layout for consistent page structure

// Cart items array
const cartItems = [
  {
    id: 1,
    image: '/assets/images/product-4.jpg', // Path to product image
    name: 'Library Stool Chair', // Product name
    details: 'Ashen Slate/Cobalt Bliss', // Additional details
    size: 'L', // Product size
    quantity: 1, // Quantity
    price: '$99', // Price
  },
  {
    id: 2,
    image: '/assets/images/product-5.jpg',
    name: 'Library Stool Chair',
    details: 'Ashen Slate/Cobalt Bliss',
    size: 'L',
    quantity: 1,
    price: '$99',
  },
];

const CartPage = () => {
  const subtotal = 198.0; // Calculate subtotal for cart items

  return (
    <Layout>
      {/* Cart Page Section */}
      <section className="py-16">
        {/* 
          Section Styling:
          - `py-16`: Adds vertical padding.
        */}
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 
            Grid Layout:
            - Single column (`grid-cols-1`) for smaller screens.
            - Three columns (`lg:grid-cols-3`) for larger screens.
            - `gap-10`: Adds space between grid items.
          */}

          {/* Bag Section */}
          <div className="lg:col-span-2">
            {/* 
              Spans two columns on large screens.
            */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Bag</h1>
            {/* 
              Title Styling:
              - `text-3xl`: Large font size for prominence.
              - `font-bold`: Bold text for emphasis.
              - `mb-6`: Adds margin below the title.
            */}
            <div className="space-y-6">
              {/* 
                Renders cart items dynamically from the `cartItems` array.
                - `space-y-6`: Adds space between cart items.
              */}
              {cartItems.map((item) => (
                <div
                  key={item.id} // Unique key for each cart item
                  className="flex items-center justify-between border-b pb-4"
                  /* 
                    Styling:
                    - `flex`: Aligns product info and actions side-by-side.
                    - `border-b`: Adds a bottom border for separation.
                    - `pb-4`: Padding below the item content.
                  */
                >
                  {/* Product Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image} // Product image source
                      alt={item.name} // Alt text for accessibility
                      className="w-24 h-24 rounded-md object-cover"
                      /* 
                        Image Styling:
                        - `w-24 h-24`: Fixed width and height.
                        - `rounded-md`: Adds rounded corners.
                        - `object-cover`: Maintains aspect ratio while covering the container.
                      */
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                      {/* Product Name */}
                      <p className="text-sm text-gray-600">{item.details}</p>
                      {/* Additional Details */}
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      {/* Product Size */}
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      {/* Product Quantity */}
                    </div>
                  </div>

                  {/* Product Actions */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">{item.price}</p>
                    {/* Product Price */}
                    <div className="flex items-center justify-end space-x-2 mt-2">
                      <button className="text-gray-500 hover:text-gray-800">❤️</button>
                      {/* Wishlist Icon */}
                      <button className="text-gray-500 hover:text-gray-800">🗑️</button>
                      {/* Delete Icon */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            {/* 
              Styling:
              - `bg-gray-50`: Light gray background.
              - `p-6`: Padding inside the container.
              - `rounded-lg`: Rounded corners for a modern look.
              - `shadow-lg`: Adds shadow for depth.
            */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>
            {/* 
              Title Styling:
              - `text-2xl`: Large font size for prominence.
              - `font-bold`: Bold text for emphasis.
              - `mb-4`: Margin below the title.
            */}
            <div className="space-y-4">
              {/* 
                Space between summary rows.
              */}
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-bold text-gray-800">${subtotal.toFixed(2)}</p>
                {/* Display subtotal */}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Estimated Delivery & Handling</p>
                <p className="font-bold text-gray-800">Free</p>
                {/* Display delivery charges */}
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <p className="text-lg font-bold text-gray-800">Total</p>
                <p className="text-lg font-bold text-gray-800">
                  ${subtotal.toFixed(2)}
                </p>
                {/* Display total */}
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                {/* 
                  Checkout Button:
                  - `w-full`: Full-width button.
                  - `mt-6`: Margin above the button.
                  - `px-6 py-3`: Padding for size.
                  - `bg-teal-500`: Teal background color.
                  - `text-white`: White text for contrast.
                  - `rounded-lg`: Rounded corners.
                  - `hover:bg-teal-600`: Slightly darker teal on hover.
                */}
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage; // Exporting the CartPage component
