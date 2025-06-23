import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'Services',
      items: [
        'Agentforce',
        'Data Cloud',
        'Sales Cloud',
        'Service Cloud',
        'Marketing Cloud',
        'Account Engagement (Pardot)',
      ],
    },
    {
      title: 'Products',
      items: [
        'Business Analytics',
        'Power BI',
        'Tableau',
        'Looker Studio',
        'Insight Generation',
      ],
    },
    {
      title: 'Other Solutions',
      items: [
        'Brand Marketing',
        'Digital Marketing',
        'Cloud App Development',
        'Data Reporting',
        'Strategic Planning',
        'Technical Support',
      ],
    },
  ];

  const staticLinks = ['Success Stories', 'About', 'Blog', 'Contact'];

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src="/logo.jpg" className="h-10" alt="Logo" />
          <span className="text-2xl font-semibold dark:text-white">MaghrautTech</span>
        </a>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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

        {/* Centered Menu Items - Desktop */}
        <div className="hidden md:flex space-x-4 font-medium items-center">
          {menuItems.map((menu, index) => (
            <div key={index} className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-400">
                {menu.title}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 hidden group-hover:block w-64 bg-white dark:bg-gray-800 shadow-md rounded-md z-10">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {menu.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          i !== menu.items.length - 1
                            ? 'border-b border-gray-200 dark:border-gray-700'
                            : ''
                        }`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {staticLinks.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-white hover:text-sky-700 dark:hover:text-blue-400"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-4">
          {menuItems.map((menu, index) => (
            <div key={index}>
              <span className="block font-semibold text-gray-800 dark:text-white">
                {menu.title}
              </span>
              <ul className="mt-1 ml-2 text-sm text-gray-700 dark:text-gray-300 space-y-0">
                {menu.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={`block px-3 py-1 border-gray-300 dark:border-gray-600 rounded-md hover:text-sky-700 ${
                        i !== menu.items.length - 1
                          ? 'border-b'
                          : ''
                      } border`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pt-4 border-t border-gray-300 dark:border-gray-600 space-y-1">
            {staticLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="block px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-white hover:text-sky-700"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
