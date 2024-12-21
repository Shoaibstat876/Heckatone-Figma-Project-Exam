//src\pages\term.tsx
import React from 'react';
import Layout from '@/components/layout/Layout'; // Importing the Layout component for consistent structure

const TermsAndConditions = () => {
  return (
    <Layout>
      {/* Terms and Conditions Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
          <div className="space-y-8">
            {/* Introduction */}
            <p className="text-gray-600">
              Welcome to Comforty. By using our website, you agree to the following terms and conditions. Please read
              them carefully. If you do not agree with any part of these terms, you must not use this website.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">1. Intellectual Property</h2>
              <p className="text-gray-600">
                All content, including images, text, and layout, is the intellectual property of Comforty. Unauthorized
                reproduction or distribution of any content is strictly prohibited.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">2. User Responsibilities</h2>
              <p className="text-gray-600">
                Users must comply with all applicable laws and refrain from engaging in harmful activities on this
                website, including hacking, fraud, or spamming.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">3. Limitation of Liability</h2>
              <p className="text-gray-600">
                Comforty is not liable for any damages arising from the use or inability to use our website or services.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">4. Modifications to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to update these terms at any time without prior notice. Your continued use of the
                website signifies your acceptance of the updated terms.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">5. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions or concerns, feel free to reach out to us at{' '}
                <a href="mailto:support@comforty.com" className="text-blue-600 hover:underline">
                  support@comforty.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;
