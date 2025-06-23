import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services does Maghraut Technologies offer?',
      answer:
        'We offer a wide range of services including Salesforce Consulting, Marketing Cloud, Data Cloud integration, Service Cloud customization, and more.',
    },
    {
      question: 'How do I get in touch with your team?',
      answer:
        'You can contact us via the "Contact" page on our website or email us directly at support@maghrauttech.com.',
    },
    {
      question: 'Do you provide ongoing support after project delivery?',
      answer:
        'Yes, we offer flexible post-delivery support packages tailored to your business needs.',
    },
    {
      question: 'Are your solutions suitable for small businesses?',
      answer:
        'Absolutely. Our scalable services are designed for both enterprises and SMBs.',
    },
    {
      question: 'What is your typical project timeline?',
      answer:
        'It depends on project complexity, but most engagements range from 4 to 12 weeks.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 pt-6 pb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
