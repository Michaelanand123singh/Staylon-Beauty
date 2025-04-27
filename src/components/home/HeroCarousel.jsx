import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      image: '/banner/carousel-1.jpg',
      subtitle: 'Luxury Spa Experience',
      title: 'Facial Treatment',
      description: 'Rejuvenate your skin with our premium facial treatments tailored to your unique skin type and concerns.',
      ctaText: 'Book Your Facial',
      ctaLink: '/appointment?service=facial'
    },
    {
      image: '/banner/carousel-2.jpg',
      subtitle: 'Special Occasions',
      title: 'Bridal Makeup',
      description: 'Look radiant on your special day with personalized bridal makeup that enhances your natural beauty.',
      ctaText: 'Bridal Consultation',
      ctaLink: '/appointment?service=bridal'
    },
    {
      image: '/banner/carousel-3.jpg',
      subtitle: 'Transform Your Look',
      title: 'Hair Styling',
      description: 'From elegant updos to modern cuts, our expert stylists will create the perfect look for any occasion.',
      ctaText: 'Hair Appointment',
      ctaLink: '/appointment?service=hair'
    }
  ];

  // Custom indicator component
  const CustomIndicator = ({ onClickHandler, isSelected, index, label }) => {
    return (
      <li
        className={`inline-block mx-2 mb-2 h-3 cursor-pointer transition-all duration-300 ${
          isSelected 
            ? 'w-12 bg-pink-500' 
            : 'w-3 bg-white bg-opacity-60 hover:bg-opacity-100'
        } rounded-full`}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  // Animation classes based on active slide
  const getAnimationClass = (index) => {
    return index === activeSlide && isLoaded 
      ? 'opacity-100 transform translate-y-0' 
      : 'opacity-0 transform translate-y-8';
  };

  return (
    <div className="relative">
      <Carousel 
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={6000}
        stopOnHover={false}
        swipeable
        emulateTouch
        className="h-screen"
        renderIndicator={CustomIndicator}
        onChange={(index) => setActiveSlide(index)}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={50}
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-screen relative overflow-hidden">
            {/* Image with zoom effect */}
            <div className="absolute inset-0 scale-105 transition-transform duration-10000 ease-linear" 
                style={{transform: activeSlide === index ? 'scale(1)' : 'scale(1.05)'}}>
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-20">
                <div className="max-w-xl text-white text-left">
                  {/* Subtitle with fade-in animation */}
                  <div className={`transition-all duration-700 delay-300 ease-out ${getAnimationClass(index)}`}>
                    <h6 className="text-sm md:text-base uppercase tracking-widest mb-3 inline-block bg-pink-600 bg-opacity-80 px-3 py-1 rounded">
                      {slide.subtitle}
                    </h6>
                  </div>
                  
                  {/* Title with fade-in animation */}
                  <div className={`transition-all duration-700 delay-500 ease-out ${getAnimationClass(index)}`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                      {slide.title}
                    </h1>
                  </div>
                  
                  {/* Divider with animation */}
                  <div className={`transition-all duration-700 delay-700 ease-out ${getAnimationClass(index)}`}>
                    <div className="w-16 h-1 bg-pink-500 mb-6"></div>
                  </div>
                  
                  {/* Description with fade-in animation */}
                  <div className={`transition-all duration-700 delay-900 ease-out ${getAnimationClass(index)}`}>
                    <p className="text-base md:text-lg text-gray-200 mb-8 max-w-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* Button with animation */}
                  <div className={`transition-all duration-700 delay-1100 ease-out ${getAnimationClass(index)}`}>
                    <Link 
                      to={slide.ctaLink} 
                      className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3 rounded-md transition duration-300 transform hover:translate-y-px hover:shadow-lg"
                    >
                      {slide.ctaText}
                    </Link>
                    
                    {/* Secondary button */}
                    <Link 
                      to="/services" 
                      className="inline-block ml-4 text-white border border-white hover:border-pink-300 hover:text-pink-300 font-medium px-6 py-3 rounded-md transition duration-300"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black opacity-60"></div>
            <div className="hidden md:block absolute top-1/4 right-20 w-24 h-24 border-4 border-pink-500 opacity-20"></div>
            <div className="hidden md:block absolute bottom-1/4 right-40 w-16 h-16 rounded-full border-4 border-white opacity-20"></div>
          </div>
        ))}
      </Carousel>
      
      {/* Social media links floating on the side */}
      <div className="hidden md:flex flex-col absolute right-6 top-1/2 transform -translate-y-1/2 z-10 space-y-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
          className="w-10 h-10 bg-white bg-opacity-20 hover:bg-pink-600 rounded-full flex items-center justify-center transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
          className="w-10 h-10 bg-white bg-opacity-20 hover:bg-pink-600 rounded-full flex items-center justify-center transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
          className="w-10 h-10 bg-white bg-opacity-20 hover:bg-pink-600 rounded-full flex items-center justify-center transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
        <p className="text-sm mb-2 opacity-70">Scroll Down</p>
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;