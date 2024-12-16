import React from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      {/* Footer Container */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section: Logo & Description */}
        <div>
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/images/Logo Icon-1.png"
              alt="Comforty Logo"
              width={32}
              height={32}
            />
            <h1 className="text-lg font-bold text-gray-800">Comforty</h1> {/* Brand name */}
          </div>
          
          {/* Description Text */}
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {/* Individual Social Icon */}
            <a
              href="#"
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white cursor-pointer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white cursor-pointer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white cursor-pointer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white cursor-pointer"
              aria-label="Pinterest"
            >
              <i className="fab fa-pinterest"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white cursor-pointer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Center Section: Category Links */}
        <div>
          <h2 className="text-gray-800 font-semibold text-sm">CATEGORY</h2> {/* Section Title */}
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {/* Category Links */}
            <li>
              <Link href="/cart" className="hover:text-teal-500 cursor-pointer">
                Sofa
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-teal-500 cursor-pointer">
                Armchair
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-teal-500 cursor-pointer">
                Wing Chair
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-teal-500 cursor-pointer">
                Desk Chair
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-teal-500 cursor-pointer">
                Wooden Chair
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-teal-500 cursor-pointer">
                Park Bench
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-gray-800 font-semibold text-sm">SUPPORT</h2> {/* Section Title */}
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {/* Support Links */}
            <li className="hover:text-teal-500 cursor-pointer">Help & Support</li>
            <li className="hover:text-teal-500 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-teal-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-teal-500 cursor-pointer">Help</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-gray-800 font-semibold text-sm">NEWSLETTER</h2> {/* Section Title */}
          <div className="mt-4 flex items-center space-x-2">
            {/* Email Input Field */}
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
            {/* Subscribe Button */}
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 text-sm">
              Subscribe
            </button>
          </div>
          {/* Newsletter Description */}
          <p className="mt-4 text-xs text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
