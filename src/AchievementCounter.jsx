import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Counter({ end, duration = 2, suffix = '+' }) {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // assuming 60fps
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(handle);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(handle);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function AchievementCounter() {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }, 500);
    return () => clearTimeout(timer);
  }, [controls]);

  const counters = [
    { label: "Salesforce Customers", end: 350 },
    { label: "Successful Projects", end: 500 },
    { label: "Salesforce Certifications", end: 150 },
    { label: "Successful Delivery", end: 100 },
  ];

  return (
    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="max-w-6xl mx-auto text-center space-y-6 py-40 px-4"
    >
      <motion.div className="space-y-4 mb-8">
        <motion.h2 className="text-3xl font-semibold">
          UK Salesforce Consultancy & Leading Platinum Partner
        </motion.h2>
        <motion.p className="text-lg text-gray-700">
          Silver Softworks is an experienced UK-based Salesforce consultancy, covering all aspects of the world’s #1 CRM platform.
        </motion.p>
        <motion.p className="text-lg text-gray-700">
          Our Salesforce consultancy services help you grow your business, from concept to cloud.
        </motion.p>
        <motion.button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Contact the Salesforce Experts
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {counters.map(({ label, end }, idx) => (
          <div key={idx} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + idx * 0.3, duration: 0.8 }}
              className="text-4xl font-bold text-blue-600"
            >
              <Counter end={end} duration={2.5} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + idx * 0.3, duration: 0.8 }}
              className="text-sm uppercase tracking-wide text-gray-600"
            >
              {label}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}