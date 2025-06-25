import React from 'react';

const HeaderBanner = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div
  className="w-full h-[64px] bg-[#565de4] border-b border-[#d3d4ff] sticky top-0 z-40"
  style={{ fontFamily: "'Poppins', sans-serif" }}
>

        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-white gap-3 sm:gap-0 min-h-[64px]">
          
          {/* Message */}
          <p className="text-center sm:text-left text-sm sm:text-base leading-snug sm:leading-normal w-full sm:w-auto">
            We’d love to hear about your business needs and see how Salesforce can help you scale faster, smarter.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-[#565de4] transition flex items-center gap-2 whitespace-nowrap"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
    </>
  );
};

export default HeaderBanner;
