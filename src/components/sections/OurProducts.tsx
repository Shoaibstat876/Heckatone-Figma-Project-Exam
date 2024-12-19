import React from "react";
import Image from "next/image";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

// Array of product data
const products = [
  {
    id: 1,
    image: "/assets/images/Image-5.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "New",
    nameStyle: "text-lg font-[400] text-[#007580]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#029fae] hover:bg-teal-600",
    iconColor: "text-white",
  },
  {
    id: 2,
    image: "/assets/images/Image-6.png",
    name: "Library Stool Chair",
    price: "$30",
    badge: "Sale",
    originalPrice: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] font-[500] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 3,
    image: "/assets/images/Image-8.png",
    name: "Library Stool Chair",
    price: "$25",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] font-[500] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 4,
    image: "/assets/images/Image-9.png",
    name: "Library Stool Chair",
    price: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] font-[500] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 5,
    image: "/assets/images/Image-14.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "New",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] font-[500] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 6,
    image: "/assets/images/Image-24.png",
    name: "Library Stool Chair",
    price: "$30",
    badge: "Sale",
    originalPrice: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] font-[500] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 7,
    image: "/assets/images/Image-25.png",
    name: "Library Stool Chair",
    price: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] font-[500] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 8,
    image: "/assets/images/Image-5.png",
    name: "Library Stool Chair",
    price: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] font-[500] hover:bg-gray-600",
    iconColor: "text-black",
  },
];

const OurProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col min-h-[420px] h-auto"
            >
              {/* Product Image */}
              <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[280px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="responsive" // Using responsive layout for better scaling
                  width={500} // Adjusting width for responsiveness
                  height={500} // Adjusting height for responsiveness
                  className="rounded-md object-cover"
                  priority={product.id === 1}
                />
                {/* Badge */}
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${
                      product.badge === "New" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h3 className={`${product.nameStyle} mt-4 flex-grow`}>{product.name}</h3>

              {/* Product Price and Cart Button */}
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">
                  {product.id === 2 || product.id === 6 ? (
                    <>
                      <span className="text-black mr-2">
                        {product.originalPrice}
                      </span>
                      <span className="text-gray-500 font-[400] line-through">
                        {product.price}
                      </span>
                    </>
                  ) : (
                    <span className={product.priceStyle}>{product.price}</span>
                  )}
                </p>

                {/* Cart Button */}
                <button
                  className={`${product.cartColor} text-white p-2 rounded-full hover:bg-opacity-80`}
                  aria-label="Add to Cart"
                >
                  <PiShoppingCartSimpleLight
                    size={24}
                    className={product.iconColor}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
