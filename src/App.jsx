import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
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
      {/* Add Google Fonts link for Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <nav
        ref={dropdownRef}
        style={{ fontFamily: "'Poppins', sans-serif" }}
        className="bg-white w-full sticky top-[60px] sm:top-[48px] z-40 border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-screen-xl mx-auto px-2 md:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <a href="/" className="flex items-center space-x-1">
              <img src="/logo.jpg" className="h-12" alt="Logo" />
              <span className="text-xl font-bold text-black whitespace-nowrap">
                MaghrautTechnology
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center items-center gap-4 text-[17px]">
            <a
              href="#"
              className="px-2 py-2 text-black rounded-md hover:ring-1 ring-[#565de4] transition text-center"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-2 py-2 text-black rounded-md hover:ring-1 ring-[#565de4] transition flex items-center text-center">
                Services
                <svg
                  className="ml-1 w-4 h-4"
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

              <div
                className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 w-[380px] flex text-sm transition-all duration-300 transform ${
                  activeDropdown === 'services'
                    ? 'opacity-100 scale-100 visible'
                    : 'opacity-0 scale-95 invisible'
                }`}
              >
                {Object.entries(services).map(([title, items], idx) => (
                  <div key={idx} className="w-full">
                    <h4 className="mb-2 text-sm">{title}</h4>
                    <ul className="divide-y divide-gray-200">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className="py-2 px-3 text-sm cursor-pointer hover:ring hover:ring-[#565de4] hover:shadow-sm rounded-md transition"
                        >
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
              <button className="px-3 py-2 text-black rounded-md hover:ring-1 ring-[#565de4] transition flex items-center text-center">
                Products
                <svg
                  className="ml-1 w-4 h-4"
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

              <div
                className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 w-[340px] flex text-sm transition-all duration-300 transform ${
                  activeDropdown === 'products'
                    ? 'opacity-100 scale-100 visible'
                    : 'opacity-0 scale-95 invisible'
                }`}
              >
                <div className="w-1/2 pr-2">
                  <ul className="divide-y divide-gray-200">
                    {products.slice(0, 3).map((item, i) => (
                      <li
                        key={i}
                        className="py-2 px-3 text-sm cursor-pointer hover:ring hover:ring-[#565de4] hover:shadow-sm rounded-md transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 pl-2">
                  <ul className="divide-y divide-gray-200">
                    {products.slice(3).map((item, i) => (
                      <li
                        key={i}
                        className="py-2 px-3 text-sm cursor-pointer hover:ring hover:ring-[#565de4] hover:shadow-sm rounded-md transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Other Links */}
            {otherLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="px-3 py-2 text-black rounded-md hover:ring-1 ring-[#565de4] transition text-center"
              >
                {link}
              </a>
            ))}

            {/* Search Bar */}
            <div className="relative ml-6">
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-4 py-2 w-44 text-base rounded-full border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#565de4]"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 py-4 border-t border-gray-200 shadow z-40">
            <a href="#" className="block py-2 text-black">
              Home
            </a>

            <div className="mt-4">
              <p className="font-semibold mb-2">Services</p>
              {Object.entries(services).map(([title, items], idx) => (
                <div key={idx}>
                  <p className="text-sm text-gray-600 mb-1">{title}</p>
                  <ul className="mb-2">
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="py-1 px-2 text-sm text-black hover:bg-gray-100 rounded-md cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <p className="font-semibold mb-2">Products</p>
              <ul>
                {products.map((product, i) => (
                  <li
                    key={i}
                    className="py-1 px-2 text-sm text-black hover:bg-gray-100 rounded-md cursor-pointer"
                  >
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              {otherLinks.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block py-2 text-black hover:bg-gray-100 rounded-md"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
