import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faBrain,
  faCloud,
  faChartLine,
  faShieldAlt,
  faCogs,
  faUserTie,
  faRocket,
  faBolt,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import './CircleCardGrid.css'; // Import the CSS file

const cards = [
  { name: 'Innovation', icon: faLightbulb },
  { name: 'AI Intelligence', icon: faBrain },
  { name: 'Cloud CRM', icon: faCloud },
  { name: 'Analytics', icon: faChartLine },
  { name: 'Security', icon: faShieldAlt },
  { name: 'Automation', icon: faCogs },
  { name: 'Consulting', icon: faUserTie },
  { name: 'Deployment', icon: faRocket },
  { name: 'Efficiency', icon: faBolt },
  { name: 'Global Reach', icon: faGlobe },
];

// Duplicate cards for seamless scroll
const duplicated = [...cards, ...cards];

export default function CircleCardMarquee() {
  return (
    <div className="overflow-hidden py-10 bg-white">
      <h1 className="text-3xl font-bold text-[#565de4] text-center mb-8">Our Services</h1>
      <div className="marquee-container">
        <div className="marquee-track">
          {duplicated.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-6 w-28 text-center"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#ececff] text-[#565de4] text-3xl shadow-md border-4 border-[#565de4] mx-auto">
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">
                {card.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
