import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Beauty Services');
  
  const serviceCategories = [
    {
      title: 'Beauty Services',
      services: [
        {
          title: 'Skin Care Treatment',
          description: 'Experience our premier skincare treatments, tailored to rejuvenate and enhance your natural beauty. Our expert estheticians use top-quality products to ensure your skin looks and feels its best.',
          image: '/banner/carousel-1.jpg',
        },
        {
          title: 'Beauty Treatments',
          description: 'Elevate your beauty routine with our comprehensive treatment services. Our personalized approach ensures you achieve a radiant and refreshed look with advanced skincare solutions',
          image: '/banner/carousel-1.jpg',
        },
        {
          title: 'Body Massage',
          description: 'Relax and rejuvenate with our soothing body massage services, tailored to relieve stress and tension. Our skilled therapists ensure a blissful experience, leaving you refreshed and revitalized.',
          image: '/banner/carousel-1.jpg',
        },
        {
          title: 'Manicure & Pedicure',
          description: 'Treat your hands and feet to our luxurious nail care services',
          image: '/banner/carousel-1.jpg',
        },
        {
          title: 'Facial Bleach',
          description: 'Refresh your skin with our customized facials, designed to address your unique skincare needs. Our experts use premium products to leave your complexion radiant and refreshed.',
          image: '/banner/carousel-1.jpg',
        },
        {
          title: 'Waxing',
          description: 'Achieve smooth, hair-free skin with our professional waxing services. Our gentle and effective techniques ensure a comfortable experience and long-lasting results.',
          image: '/banner/carousel-1.jpg',
        },
      ]
    },
    {
      title: 'Hair Services',
      services: [
        {
          title: 'Hair Straightening',
          description: 'Transform your hair with our professional hair straightening services, delivering sleek, smooth, and manageable results. Our advanced techniques ensure long-lasting straightness while maintaining hair health and shine.',
          image: '/banner/carousel-1.jpg',
        },
        {
          title: 'Hair Highlights',
          description: 'Enhance your look with our expert hair highlights, adding dimension and vibrancy to your style. Our skilled colorists use premium products to create natural-looking, radiant highlights tailored to your preferences.',
          image: '/banner/carousel-1.jpg',
        },
        {
          title: 'Haircuts & Styling',
          description: 'Refresh your style with our precision haircuts, tailored to enhance your features and suit your lifestyle. Our experienced stylists ensure a personalized cut that leaves you looking and feeling your best.',
          image: '/banner/carousel-1.jpg',
        },
        {
          title: 'Hair Colouring',
          description: 'Transform your look with our expert hair coloring services, offering vibrant, long-lasting hues. Our skilled colorists use top-quality products to achieve stunning, personalized results that enhance your natural beauty.',
          image: '/banner/carousel-1.jpg',
        },
        {
          title: 'Hair Spa',
          description: 'Revitalize your hair with our luxurious hair spa treatments, designed to nourish and rejuvenate. Enjoy deep conditioning that restores shine, softness, and overall hair health.',
          image: '/banner/carousel-1.jpg',
        },
      ]
    }
  ];

  // Find the active category
  const activeCategoryData = serviceCategories.find(cat => cat.title === activeCategory);

  // Limit to showing only 4 services
  const limitedServices = activeCategoryData?.services.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Premium Beauty Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional beauty and hair services designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>
        
        {/* Category Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.title)}
                className={`px-6 py-3 text-sm md:text-base font-medium rounded-full transition-all duration-300 
                  ${activeCategory === category.title 
                    ? 'bg-rose-500 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Services Grid - Limited to 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {limitedServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image || `/api/placeholder/400/300?text=${service.title}`} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                <Link to="/appointment" className="block w-full">
                  <button className="w-full bg-gray-100 hover:bg-rose-500 hover:text-white text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link to="/services">
            <button className="inline-flex items-center bg-transparent border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;