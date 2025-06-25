import React from "react";
import { motion } from "framer-motion";

const images = [
  "20250326_031646577_iOS.jpg",
  "1B7F3CCC-0F1B-4259-8E5D-39178862BD95.jpg",
  "97851d4c-4065-42ef-bb1b-a9c7d4d1ec5d.jpeg",
  "20250323_074939921_iOS.jpg",
  "20250412_041240832_iOS.jpg",
  "20250412_065132393_iOS.jpg",
  "20250415_101033727_iOS.jpg",
  "20250415_105723558_iOS.jpg",
  "20250415_124036899_iOS.jpg",
  "C388FCEE-F301-43A9-B983-A3D341D09BED.jpg",
];

const ImageCarousel = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-3 sm:px-4">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
        Memories Gallery
      </h2>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.2, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            style={{
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
            }}
          >
            <motion.img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[300px] object-cover rounded-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
