import React from 'react'; // Import React for JSX
import Layout from '@/components/layout/Layout'; // Import Layout for consistent page structure

const ContactPage = () => {
  return (
    <Layout>
      {/* Contact Section */}
      <section className="py-16">
        {/* 
          Section Styling:
          - `py-16`: Adds vertical padding for spacing.
        */}
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {/* 
            Grid Layout:
            - Single column (`grid-cols-1`) for small screens.
            - Two columns (`lg:grid-cols-2`) for larger screens.
            - `gap-10`: Adds spacing between the two sections.
          */}

          {/* Contact Information */}
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Get In Touch With Us</h1>
            {/* 
              Title Styling:
              - `text-3xl`: Large font size for prominence.
              - `font-bold`: Bold weight for emphasis.
              - `text-gray-800`: Dark gray color for readability.
            */}
            <p className="text-gray-600">
              For more information about our product & services, please feel free to drop us an email. Our staff will
              always be there to help you out. Do not hesitate!
            </p>
            {/* Contact Details */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-900 text-2xl">📍</span>
                <div>
                  <h3 className="font-bold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-900 text-2xl">📞</span>
                <div>
                  <h3 className="font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                  <p className="text-gray-600">Hotline: (+84) 456-6789</p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex items-start space-x-4">
                <span className="text-blue-900 text-2xl">🕒</span>
                <div>
                  <h3 className="font-bold text-gray-800">Working Time</h3>
                  <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              {/* Form Fields */}
              <div>
                <label htmlFor="name" className="block text-gray-600 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  /* 
                    Styling:
                    - `w-full`: Full width of the container.
                    - `px-4 py-2`: Padding for size.
                    - `border`: Adds a border.
                    - `rounded-md`: Rounded corners.
                    - `focus:ring-2`: Blue outline on focus.
                  */
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-600 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-600 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-600 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about..."
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-green-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-gray-50">
        {/* 
          Section Styling:
          - `py-10`: Adds vertical padding.
          - `bg-gray-50`: Light gray background.
        */}
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* 
            Layout:
            - Single column for small screens.
            - Row layout (`lg:flex-row`) for larger screens.
            - `space-y-6`: Adds spacing for small screens.
          */}
          <div className="flex items-center space-x-4">
            <span className="text-blue-900 text-2xl">✅</span>
            <p className="text-gray-800">High Quality <br /> crafted from top materials</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-blue-900 text-2xl">🛡️</span>
            <p className="text-gray-800">Warranty Protection <br /> Over 2 years</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-blue-900 text-2xl">💬</span>
            <p className="text-gray-800">24/7 Support <br /> Dedicated support</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage; // Exporting the ContactPage component
