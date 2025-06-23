import React from 'react';

export default function OfferingsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-20 text-center">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Our Offerings
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1: Marketing Cloud */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl text-left cursor-pointer">
          <div className="h-40 w-full mb-4 overflow-hidden rounded-md">
            <img
              src="/pb-hp-product-smb_icon-3.jpg"
              alt="Marketing Cloud"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Marketing Cloud</h3>
          <p className="text-gray-600 text-sm">
            Deliver personalized, data-driven campaigns across email, social, web, and more. Engage customers at the right moment with AI-powered automation.
          </p>
        </div>

        {/* Card 2: Service Cloud */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl text-left cursor-pointer">
          <div className="h-40 w-full mb-4 overflow-hidden rounded-md">
            <img
              src="/pb-hp-product-smb_icon-2.jpg"
              alt="Service Cloud"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Service Cloud</h3>
          <p className="text-gray-600 text-sm">
            Provide intelligent customer support across every channel. Use automation, AI, and knowledge sharing to enhance agent efficiency and delight your customers.
          </p>
        </div>

        {/* Card 3: Data Cloud */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl text-left cursor-pointer">
          <div className="h-40 w-full mb-4 overflow-hidden rounded-md">
            <img
              src="/pb-hp-product-smb_icon-4.jpg"
              alt="Data Cloud"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Data Cloud</h3>
          <p className="text-gray-600 text-sm">
            Break down data silos and unify customer information from every source to deliver hyper-personalized, AI-powered customer experiences in real time.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <a
          href="#"
          className="inline-block px-6 py-3 text-white font-medium rounded-lg transition"
          style={{ backgroundColor: '#6465F1' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#5757d9')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#6465F1')}
        >
          View More Products
        </a>
      </div>
    </section>
  );
}
