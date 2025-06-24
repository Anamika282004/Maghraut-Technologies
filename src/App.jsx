import React, { useState, useEffect, useRef } from 'react';
import { FaHeadset } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const services = {
    'Salesforce Services': [
      'Salesforce Implementation & Customization',
      'Salesforce Integration & Data Services',
      'Salesforce Managed Services & Project Support',
      'Salesforce Strategy, Analytics & AI Enablement',
    ],
    // 'Marketing & Strategy': [
    //   'Brand Marketing',
    //   'Digital Marketing',
    //   'Cloud App Development',
    //   'Data Reporting',
    //   'Strategic Planning',
    //   'Technical Support',
    // ],
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
    <nav className="bg-white w-full fixed top-0 z-20 border-b border-gray-200 shadow-sm" ref={dropdownRef}>
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center space-x-3">
            <img src="/logo.jpg" className="h-10" alt="Logo" />
            <span className="text-xl font-semibold text-black">MaghrautTech</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-4 text-sm">
          <a href="#" className="px-4 py-2 border border-[#565de4] text-black rounded-md hover:bg-[#565de4] hover:text-white transition">Home</a>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              className="px-4 py-2 border border-[#565de4] text-black rounded-md hover:bg-[#565de4] hover:text-white transition flex items-center"
            >
              Services
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4 w-[700px] flex justify-between text-sm transition-all duration-300 transform ${
              activeDropdown === 'services' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
            }`}>
              {Object.entries(services).map(([title, items], idx) => (
                <div key={idx} className="w-1/2 pr-6">
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <ul>
                    {items.map((item, i) => (
                      <li key={i} className="py-1 hover:text-[#565de4] cursor-pointer">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
              className="px-4 py-2 border border-[#565de4] text-black rounded-md hover:bg-[#565de4] hover:text-white transition flex items-center"
            >
              Products
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4 w-[400px] flex text-sm transition-all duration-300 transform ${
              activeDropdown === 'products' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
            }`}>
              <div className="w-1/2 pr-4">
                <ul>
                  {products.slice(0, 3).map((item, i) => (
                    <li key={i} className="py-1 hover:text-[#565de4] cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="w-1/2">
                <ul>
                  {products.slice(3).map((item, i) => (
                    <li key={i} className="py-1 hover:text-[#565de4] cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Other Links */}
          {otherLinks.map((link, idx) => (
            <a key={idx} href="#" className="px-4 py-2 border border-[#565de4] text-black rounded-md hover:bg-[#565de4] hover:text-white transition">
              {link}
            </a>
          ))}
        </div>

        {/* Book Consultation */}
        <div className="hidden md:flex items-center ml-auto pl-4">
          <a href="#" className="flex items-center px-5 py-2.5 border-2 border-[#565de4] rounded-full hover:bg-[#565de4] hover:text-white text-black transition">
            <FaHeadset className="mr-2 text-lg text-[#565de4]" />
            <div className="text-left leading-tight text-sm">
              <div className="text-xs">Book Your</div>
              <div className="font-semibold">Consultation Now</div>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4">
          <a href="#" className="block px-4 py-2 border border-[#565de4] rounded-md hover:bg-[#565de4] hover:text-white">Home</a>

          {/* Services Section */}
          <div>
            <span className="block font-semibold text-black">Services</span>
            {Object.entries(services).map(([section, items], i) => (
              <div key={i} className="ml-3 mb-2">
                <span className="text-sm font-medium">{section}</span>
                <ul className="mt-1 text-sm text-gray-800 space-y-1">
                  {items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="block px-3 py-1 border border-[#565de4] rounded-md hover:bg-[#565de4] hover:text-white">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Products Section */}
          <div className="ml-3 mb-2">
            <span className="text-sm font-medium">Products</span>
            <ul className="mt-1 text-sm text-gray-800 space-y-1">
              {products.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="block px-3 py-1 border border-[#565de4] rounded-md hover:bg-[#565de4] hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          {otherLinks.map((link, idx) => (
            <a key={idx} href="#" className="block px-4 py-2 border border-[#565de4] rounded-md hover:bg-[#565de4] hover:text-white">
              {link}
            </a>
          ))}

          {/* Mobile Consult */}
          <a href="#" className="flex items-center gap-2 justify-center w-full px-4 py-2 border-2 border-[#565de4] rounded-full text-black hover:bg-[#565de4] hover:text-white">
            <FaHeadset className="text-[#565de4]" />
            <div className="text-left text-sm">
              <div className="text-xs">Book Your</div>
              <div className="font-semibold">Consultation Now</div>
            </div>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
