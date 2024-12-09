"use client";

import { useState } from "react";

const CustomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-64">
      <div className="w-full overflow-hidden ">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`carousel image ${index}`}
                className="w-full"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-8  transform -translate-y-1/2 text-white text-2xl"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-white text-2xl"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
