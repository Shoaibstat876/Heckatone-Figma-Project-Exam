//src\pages\pages.js
import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout'; // Importing your existing layout for consistency

const PagesMenu = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Explore More Pages</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Us */}
          <Link
            href="/contact"
            className="block bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 mt-2">
              Reach out to us for assistance and inquiries.
            </p>
          </Link>
          {/* FAQs */}
          <Link
            href="/faq"
            className="block bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">FAQs</h2>
            <p className="text-gray-600 mt-2">
              Find answers to common questions.
            </p>
          </Link>
          {/* Terms & Conditions */}
          <Link
            href="/terms"
            className="block bg-yellow-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">Terms & Conditions</h2>
            <p className="text-gray-600 mt-2">
              Understand our policies and practices.
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PagesMenu;
