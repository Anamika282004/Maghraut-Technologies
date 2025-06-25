import React, { useState, useEffect, useRef } from 'react';

const HeaderWithNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const services = {
    'Salesforce Services': [
      'CRM Consulting',
      'Implementation',
      'Custom Development',
      'Managed Services',
      'AppExchange Development',
      'Data & Integration',
      'Ai & Automation',
      'Training and development',
    ],
  };

  const products = [
    'Agentforce',
    'Data Cloud',
    'Sales Cloud',
    'Service Cloud',
    'Marketing Cloud',
    'Account Engagement (Pardot)',
  ];

  const otherLinks = ['Industries', 'Partner', 'Resources', 'Company'];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* HEADER BANNER */}
      <div
        className="w-full h-[64px] bg-[#565de4] border-b border-[#d3d4ff] sticky top-0 z-50"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-white gap-3 sm:gap-0 min-h-[64px]">
          <p className="text-center sm:text-left text-sm sm:text-base w-full sm:w-auto">
            We’d love to hear about your business needs and see how Salesforce can help you scale faster, smarter.
          </p>
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

      {/* NAVBAR */}
      <nav
        className="bg-white w-full sticky top-[64px] z-40 border-b border-gray-200 shadow-sm"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="w-full py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4">
            <a href="/" className="flex items-center space-x-1">
              <img src="/logo.jpg" className="h-12" alt="Logo" />
              <span className="text-xl font-bold text-black whitespace-nowrap">Maghraut Technologies</span>
            </a>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex justify-center flex-1 gap-4 text-[17px]">
            <a href="#" className="px-2 py-2 text-black rounded-md hover:ring-1 ring-[#565de4]">Home</a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-2 py-2 text-black rounded-md hover:ring-1 ring-[#565de4] flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                ref={dropdownRef}
                className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 w-[380px] flex text-sm transition-all duration-300 transform ${
                  activeDropdown === 'services' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                {Object.entries(services).map(([title, items], idx) => (
                  <div key={idx} className="w-full">
                    <h4 className="mb-2 text-sm">{title}</h4>
                    <ul className="divide-y divide-gray-200">
                      {items.map((item, i) => (
                        <li key={i} className="py-2 px-3 cursor-pointer hover:ring hover:ring-[#565de4] rounded-md">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 text-black rounded-md hover:ring-1 ring-[#565de4] flex items-center">
                Products
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 w-[340px] flex text-sm transition-all duration-300 transform ${
                  activeDropdown === 'products' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                <div className="w-1/2 pr-2">
                  <ul className="divide-y divide-gray-200">
                    {products.slice(0, 3).map((item, i) => (
                      <li key={i} className="py-2 px-3 hover:ring hover:ring-[#565de4] rounded-md">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 pl-2">
                  <ul className="divide-y divide-gray-200">
                    {products.slice(3).map((item, i) => (
                      <li key={i} className="py-2 px-3 hover:ring hover:ring-[#565de4] rounded-md">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Static Links */}
            {otherLinks.map((link, idx) => (
              <a key={idx} href="#" className="px-3 py-2 text-black rounded-md hover:ring-1 ring-[#565de4]">
                {link}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2 mr-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-4 py-2 w-64 rounded-full border-2 border-gray-500 focus:ring-2 focus:ring-[#565de4]"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10.5 3a7.5 7.5 0 016.15 13.65z" />
              </svg>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 mr-4" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 py-4 border-t border-gray-200 shadow z-40">
            <a href="#" className="block py-2 text-black">Home</a>
            <div className="mt-4">
              <p className="font-semibold mb-2">Services</p>
              {Object.entries(services).map(([title, items], idx) => (
                <div key={idx}>
                  <p className="text-sm text-gray-600 mb-1">{title}</p>
                  <ul className="mb-2">
                    {items.map((item, i) => (
                      <li key={i} className="py-1 px-2 hover:bg-gray-100 rounded-md">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-semibold mb-2">Products</p>
              <ul>
                {products.map((product, i) => (
                  <li key={i} className="py-1 px-2 hover:bg-gray-100 rounded-md">{product}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              {otherLinks.map((link, idx) => (
                <a key={idx} href="#" className="block py-2 hover:bg-gray-100 rounded-md">{link}</a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="mt-[128px] p-4">
        <h1 className="text-3xl font-bold">Welcome to Maghraut Technologies</h1>
        <p className="mt-2 text-gray-700">This is your main content area.</p>
      </div>
    </>
  );
};

export default HeaderWithNavbar;
