import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define a type for the navLinks
interface NavLink {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Define the navLinks with proper types
  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product/1' },
    { name: 'Pages', path: '/pages' },
  ];

  return (
    <header>
      {/* Layer 1: Purple Background */}
      <div className="bg-[#272343] text-white text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Free Shipping Info */}
          <div className="flex items-center gap-2 opacity-70 font-inter">
            <span className="text-white" aria-hidden="true">✔</span>
            <p>Free Shipping On All Orders Over $50</p>
          </div>
          {/* Dropdown and Help Links */}
          <div className="hidden sm:flex items-center space-x-6">
            <span className="cursor-pointer">Eng ▾</span>
            <Link href="/faq" className="hover:underline">FAQs</Link>
            <div className="flex items-center gap-2">
              <span className="bg-white text-purple-900 rounded-full h-6 w-6 flex items-center justify-center opacity-70" aria-hidden="true">!</span>
              <p>Need Help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2: Grey Background */}
      <div className="bg-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/Logo Icon-1.png"
              alt="Comforty Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-black">Comforty</h1>
          </div>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <div className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Shopping Cart"
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
            <button
              className="sm:hidden text-purple-900 focus:outline-none"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-100 py-4">
          <nav className="space-y-2 px-6 text-gray-700">
            {navLinks.map(({ name, path }, index) => (
              <Link
                href={path}
                key={index}
                className="block hover:text-purple-900 cursor-pointer"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Layer 3: Links and Contact */}
      <div className="hidden sm:flex py-4 border-b border-gray-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Navigation Links */}
          <nav className="flex space-x-6 text-gray-700">
            {navLinks.map(({ name, path }, index) => (
              <Link
                href={path}
                key={index}
                className={`hover:text-purple-900 ${
                  name === 'Home' ? 'text-teal-500 font-semibold' : ''
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
          {/* Contact Info */}
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
