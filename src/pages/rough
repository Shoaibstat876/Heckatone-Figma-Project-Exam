import React from 'react'; // Import React for JSX
import Layout from '@/components/layout/Layout'; // Import Layout for consistent page structure

// FAQ data
const faqs = [
  {
    question: 'What types of chairs do you offer?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    question: 'How can we get in touch with you?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    question: 'Do your chairs come with a warranty?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    question: 'What will be delivered? And When?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    question: 'Can I try a chair before purchasing?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
  {
    question: 'How do I clean and maintain my Comforty chair?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?',
  },
];

const FaqPage = () => {
  return (
    <Layout>
      {/* Title Section */}
      <section className="py-16 text-center">
        {/* 
          Section Styling:
          - `py-16`: Adds vertical padding for spacing.
          - `text-center`: Centers the text horizontally.
        */}
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Questions Looks Here</h1>
          {/* 
            Title Styling:
            - `text-3xl`: Large font size for prominence.
            - `font-bold`: Bold font for emphasis.
            - `text-gray-800`: Dark gray color for readability.
            - `mb-4`: Adds margin below the title for spacing.
          */}
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
          {/* Subheading text */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        {/* 
          Section Styling:
          - `py-10`: Adds vertical padding for spacing.
        */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 
            Grid Layout:
            - Single column (`grid-cols-1`) for small screens.
            - Two columns (`md:grid-cols-2`) for medium and larger screens.
            - `gap-6`: Adds spacing between grid items.
          */}
          {faqs.map((faq, index) => (
            <div
              key={index} // Unique key for each FAQ
              className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              /* 
                FAQ Card Styling:
                - `bg-gray-50`: Light gray background.
                - `border border-gray-200`: Adds a border with a subtle gray color.
                - `p-6`: Adds padding inside the card.
                - `rounded-lg`: Rounded corners for modern design.
                - `shadow-sm`: Subtle shadow for depth.
                - `hover:shadow-md`: Enhanced shadow on hover for interactivity.
                - `transition`: Smooth animation for hover effects.
              */
            >
              {/* Question and Icon */}
              <div className="flex items-center justify-between">
                {/* 
                  Layout:
                  - `flex`: Aligns question and icon side-by-side.
                  - `items-center`: Vertically aligns them.
                  - `justify-between`: Spreads content horizontally with space between.
                */}
                <h3 className="font-bold text-gray-800">{faq.question}</h3>
                {/* 
                  Question Styling:
                  - `font-bold`: Bold font for emphasis.
                  - `text-gray-800`: Dark gray color for readability.
                */}
                <span className="text-gray-600 text-xl font-bold">+</span>
                {/* 
                  Icon Styling:
                  - `text-gray-600`: Light gray color for subtlety.
                  - `text-xl`: Larger font size for visibility.
                  - `font-bold`: Bold weight for prominence.
                */}
              </div>
              {/* Answer */}
              <p className="text-gray-600 mt-4">{faq.answer}</p>
              {/* 
                Answer Styling:
                - `text-gray-600`: Light gray color for readability.
                - `mt-4`: Adds margin above the answer for spacing.
              */}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default FaqPage; // Exporting the FaqPage component
