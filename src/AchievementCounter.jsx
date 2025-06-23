import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Counter({ end, duration = 2, suffix = '+' }) {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps
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
    { label: "Salesforce Customers", end: 10 },
    { label: "Successful Projects", end: 15 },
    { label: "Salesforce Certifications", end: 11 },
    { label: "Successful Delivery", end: 10 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="max-w-6xl mx-auto text-center space-y-6 py-20 px-4 sm:px-6 md:pt-40 md:pb-12"
    >
      <motion.div className="space-y-4 mb-8 px-2 sm:px-0">
        <motion.h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
          Upholds Commitment to Giving Back with Pledge 1% Partnership
        </motion.h2>
        <motion.p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          At Maghraut Technologies, we partner with clients to build smarter, data-driven organizations capable of thriving in today’s fast-evolving business landscape
        </motion.p>
        <motion.p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Our experienced team blends strategy, technology, and hands-on expertise to deliver tailored solutions for enterprises and SMBs alike
        </motion.p>
        <motion.button
          className="mt-4 px-6 py-3 bg-[#6465F1] text-white rounded hover:bg-[#5757d9] transition text-sm sm:text-base"
        >
          Contact the Salesforce Experts
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {counters.map(({ label, end }, idx) => (
          <div key={idx} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + idx * 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold text-[#6465F1]"
            >
              <Counter end={end} duration={2.5} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + idx * 0.3, duration: 0.8 }}
              className="text-xs sm:text-sm uppercase tracking-wide text-gray-600 max-w-xs mx-auto"
            >
              {label}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
