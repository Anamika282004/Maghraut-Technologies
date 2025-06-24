import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function FoundersDeskCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-6xl mx-auto my-12 px-6 sm:px-10 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        
        {/* Founder Image - Fully Rounded Circle */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#565de4] shadow-md">
          <img
            src="\Founder's image.jpg" // Replace with founder image
            alt="Vijay Kumar Soni"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Message & Links */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#565de4] mb-4">
            From the Founder’s Desk
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            At Maghraut Technologies, we believe in pushing boundaries and shaping a better digital future. Our journey began with a vision to empower organizations with cutting-edge solutions and personalized strategies.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            We’re committed to innovation, integrity, and impact. Thank you for trusting us — together, we’re building something extraordinary.
          </p>
          <p className="mt-6 text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
            — Vijay Kumar Soni, CEO
          </p>

          {/* Social Links */}
          <div className="mt-6 flex justify-center lg:justify-start space-x-6 text-[#565de4] text-xl">
            <a
              href="https://www.linkedin.com/in/gvijaysoni/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#4242b9] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/vijaykumarsoni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#4242b9] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:vijay@example.com"
              aria-label="Email"
              className="hover:text-[#4242b9] transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
