import React from 'react';

const HeaderBanner = () => {
  return (
    <div className="w-full bg-[#565de4] border-b border-[#d3d4ff] sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between text-sm text-white">
        
        {/* Left: Message */}
        <p className="text-center sm:text-left mb-2 sm:mb-0 text-white">
          We’d love to hear about your business needs and see how Salesforce can help you scale faster, smarter.
        </p>

        {/* Right: Let’s Talk Salesforce CTA */}
        <a
          href="#"
          className="text-white border border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-[#565de4] transition flex items-center gap-2"
        >
          {/* Icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10m-7 4h.01M4 21h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Let’s Talk Salesforce
        </a>
      </div>
    </div>
  );
};

export default HeaderBanner;
