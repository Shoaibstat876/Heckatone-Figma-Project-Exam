import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      {/* Layer 1: Purple Background */}
      <div className="bg-purple-900 text-white text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Left Section: Free Shipping Info */}
          <div className="flex items-center space-x-2">
            <span className="text-white">✔</span> {/* White Tick Icon */}
            <p>Free Shipping On All Orders Over $50</p>
          </div>
          {/* Right Section: Dropdown and Help Links */}
          <div className="flex items-center space-x-6">
            <span className="cursor-pointer">Eng ▾</span>
            <Link href="/faq" className="hover:underline">
              FAQs
            </Link>
            <div className="flex items-center space-x-1">
              <span className="bg-white text-purple-900 rounded-full h-6 w-6 flex items-center justify-center">!</span>
              <p>Need Help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2: Grey Background */}
      <div className="bg-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Left Section: Logo and Brand Name */}
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/images/Logo Icon-1.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-black">Comforty</h1>
          </div>
          {/* Right Section: Cart */}
          <div className="relative flex items-center">
            <div className="bg-gray-200 px-4 py-2 rounded-lg flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-900"
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
              <span className="bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1">
                2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: Links, Contact Info, and Grey Line */}
      <div className="py-4 border-b border-gray-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Left Section: Navigation Links */}
          <nav className="flex space-x-6 text-gray-700">
            <Link href="/" className="text-green-500 hover:text-green-600 font-semibold">
              Home
            </Link>
            <Link href="/products" className="hover:text-purple-900">
              Shop
            </Link>
            <Link href="/about" className="hover:text-purple-900">
              About
            </Link>
            <Link href="/product/1" className="hover:text-purple-900">
              Product
            </Link>
            <Link href="/pages" className="hover:text-purple-900">
              Pages
            </Link>
          </nav>
          {/* Right Section: Contact Info */}
          <div className="text-gray-700">
            <p>
              Contact: <span className="font-bold">(808) 555-0111</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
