import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "/banner/carousel-1.jpg",
    },
    {
      image: "/banner/carousel-2.jpg",
    },
    {
      image: "/banner/carousel-3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-rose-600 mb-4">
          Our Happy Clients
        </h2>
        <p className="text-lg text-rose-400 mb-12">
          See what our clients have to say about us!
        </p>

        {/* Image Slider */}
        <div className="relative">
          <img
            src={testimonials[currentIndex].image}
            alt={`Testimonial ${currentIndex + 1}`}
            className="w-full h-auto rounded-xl shadow-2xl object-cover transition-all duration-500"
          />

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-rose-500 w-8" : "bg-rose-200 w-3"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
