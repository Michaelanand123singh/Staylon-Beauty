import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Tejasvi',
      role: 'Satisfied Customer',
      image: '/api/placeholder/80/80',
      content: "I've been going to Staylon Beauty Parlour for years, and I'm always impressed by their consistent quality. The staff is highly skilled and knowledgeable, and they use top-of-the-line products."
    },
    {
      name: 'Priya Sharma',
      role: 'Regular Client',
      image: '/api/placeholder/80/80',
      content: "The hair treatments at Staylon are exceptional. My hair has never looked healthier since I started their recommended regimen. The staff truly understands different hair types and concerns."
    },
    {
      name: 'Ananya Patel',
      role: 'Loyal Customer',
      image: '/api/placeholder/80/80',
      content: "I had my bridal makeup done at Staylon and couldn't have been happier! They understood exactly what I wanted and delivered beyond my expectations. Everyone at my wedding was complimenting my look."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          {/* Large decorative quote marks */}
          <div className="absolute -top-10 left-0 md:left-10 text-rose-200" aria-hidden="true">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 8H5.5C4.67157 8 4 8.67157 4 9.5V13.5C4 14.3284 4.67157 15 5.5 15H7.5C8.32843 15 9 15.6716 9 16.5V18.5C9 19.3284 8.32843 20 7.5 20H5.5C4.67157 20 4 19.3284 4 18.5V16.5M20 8H16C15.1716 8 14.5 8.67157 14.5 9.5V13.5C14.5 14.3284 15.1716 15 16 15H18C18.8284 15 19.5 15.6716 19.5 16.5V18.5C19.5 19.3284 18.8284 20 18 20H16C15.1716 20 14.5 19.3284 14.5 18.5V16.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Testimonial card */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mx-auto max-w-4xl relative z-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              {/* Left: Image Column */}
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src="/banner/carousel-1.jpg" 
                  alt="Beauty salon client" 
                  className="h-64 w-64 object-cover rounded-full shadow-lg border-8 border-rose-50"
                />
              </div>
              
              {/* Right: Testimonial Content */}
              <div className="md:w-2/3">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-12 h-12 rounded-full mr-4 border-2 border-rose-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                    <p className="text-rose-600 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-rose-500 w-6' : 'bg-gray-300'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Additional Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-rose-500 font-bold text-3xl mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-rose-500 font-bold text-3xl mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-rose-500 font-bold text-3xl mb-2">20+</div>
            <div className="text-gray-600">Beauty Experts</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-rose-500 font-bold text-3xl mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;