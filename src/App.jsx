import React from 'react';
const Navbar = () => {
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
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
        <img src="/logo_MT.jpg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold dark:text-white">MaghrautTech</span>
        </a>

        {/* Centered Menu Items */}
        <div className="flex-grow flex justify-center">
          <div className="flex space-x-8 font-medium items-center">
            {/* Dropdown Menus */}
            {menuItems.map((menu, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-400"
                >
                  {menu.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 hidden group-hover:block w-64 bg-white dark:bg-gray-800 shadow-md rounded-md z-10">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {menu.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Static Links */}
            {staticLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="px-3 py-2 text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-400"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
