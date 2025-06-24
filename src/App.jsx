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
      'Ai & Automation'
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
    <nav
      className="bg-white w-full fixed top-[48px] z-20 border-b border-gray-200 shadow-sm"
      ref={dropdownRef}
    >
      <div className="max-w-screen-xl mx-auto px-2 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0 mr-4">
          <a href="/" className="flex items-center space-x-1">
            <img src="/logo.jpg" className="h-12" alt="Logo" />
            <span className="text-l font-bold text-black whitespace-nowrap">MaghrautTechnologies</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-4 text-[17px]">
          <a href="#" className="px-2 py-2 text-black rounded-md hover:ring-1 ring-[#565de4] transition text-center">
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
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4 w-[380px] flex text-sm transition-all duration-300 transform ${
                activeDropdown === 'services' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
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
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4 w-[340px] flex text-sm transition-all duration-300 transform ${
                activeDropdown === 'products' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
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
        </div>

        {/* Book Consultation */}
       <div className="hidden md:flex items-center ml-4 whitespace-nowrap">
  <a
    href="#"
    className="text-[15px] px-4 py-2 border border-[#565de4] rounded-full text-black hover:bg-[#565de4] hover:text-white transition flex items-center gap-2"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="black"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.2 1.47.74 2.87 1.6 4.13a2 2 0 01-.45 2.66L9.91 12.1a16 16 0 006 6l1.59-1.24a2 2 0 012.66-.45c1.26.86 2.66 1.4 4.13 1.6a2 2 0 011.71 1.91z"
      />
    </svg>
    Book Consultation
  </a>
</div>



        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
