import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion, useInView } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80",
];

export default function SmoothHorizontalSlider() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const isInView = useInView(sliderRef, { once: true, margin: "-100px" });

  const slideCount = images.length;
  const slideWidth = 280;
  const slideGap = 40;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const slides = container.children;

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      let offset = i - current;
      if (offset < -Math.floor(slideCount / 2)) offset += slideCount;
      if (offset > Math.floor(slideCount / 2)) offset -= slideCount;

      let scale = offset === 0 ? 1 : 0.7;
      let opacity = offset === 0 ? 1 : 0.5;
      let zIndex = offset === 0 ? 10 : 1;
      let x = offset * (slideWidth + slideGap);

      gsap.to(slide, {
        duration: 0.5,
        x,
        scale,
        opacity,
        zIndex,
        ease: "power2.out",
        transformOrigin: "center center",
        boxShadow:
          opacity === 1
            ? "0 15px 30px rgba(0,0,0,0.35)"
            : "0 6px 12px rgba(0,0,0,0.1)",
      });
    }
  }, [current, slideCount]);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 2000);
    return () => clearInterval(autoplayRef.current);
  }, [slideCount]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchEndX.current - touchStartX.current;
    if (distance > 50) {
      setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
      resetAutoplay();
    } else if (distance < -50) {
      setCurrent((prev) => (prev + 1) % slideCount);
      resetAutoplay();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 2000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
    resetAutoplay();
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slideCount);
    resetAutoplay();
  };

  return (
    <motion.div
      ref={sliderRef}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 select-none"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        COLLABORATION
      </h2>

      <div
        ref={containerRef}
        className="relative flex justify-center items-center"
        style={{
          perspective: "1500px",
          width: slideWidth * 3 + slideGap * 4,
          height: 240,
          touchAction: "pan-y",
          overflow: "visible",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="absolute rounded-xl overflow-hidden border border-white dark:border-gray-700 cursor-pointer bg-gray-300 dark:bg-gray-700"
            style={{
              width: slideWidth,
              height: 200,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              willChange: "transform, opacity",
              top: 20,
            }}
          />
        ))}
      </div>

      <div className="mt-8 flex gap-8">
        <button
          onClick={prevSlide}
          className="px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition"
          aria-label="Previous Slide"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition"
          aria-label="Next Slide"
        >
          ▶
        </button>
      </div>
    </motion.div>
  );
}
