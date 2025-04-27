import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, Scissors, Star, ChevronDown } from 'lucide-react';

const Appointment = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  
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

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Flatten all services for the dropdown
  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      category: category.title
    }))
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Schedule Now
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Book Your <span className="text-rose-600">Appointment</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Reserve your spot for our premium beauty and hair services
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column - Form */}
          <div className="lg:w-3/5">
            <form className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-rose-100">
              <h2 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                <Calendar className="mr-2 text-rose-500" size={24} />
                Appointment Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
                    <User className="inline mr-2 text-rose-500" size={16} /> Full Name
                  </label>
                  <input 
                    type="text" 
                    id="fullName"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" 
                    placeholder="Enter your full name"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                    <Phone className="inline mr-2 text-rose-500" size={16} /> Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" 
                    placeholder="Enter your phone number"
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="service">
                    <Scissors className="inline mr-2 text-rose-500" size={16} /> Select Service
                  </label>
                  <div className="relative">
                    <select 
                      id="service"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" 
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      required
                    >
                      <option value="">Choose a service</option>
                      {allServices.map((service, index) => (
                        <option key={index} value={service.title}>
                          {service.title} - {service.category}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                    <Calendar className="inline mr-2 text-rose-500" size={16} /> Preferred Date
                  </label>
                  <input 
                    type="date" 
                    id="date"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" 
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
                  <Clock className="inline mr-2 text-rose-500" size={16} /> Preferred Time
                </label>
                <div className="relative">
                  <div 
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer flex justify-between items-center"
                    onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                  >
                    <span>Select a time slot</span>
                    <ChevronDown size={18} className={`transition-transform ${isTimeDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isTimeDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="grid grid-cols-3 gap-2 p-3">
                        {timeSlots.map((time, index) => (
                          <div 
                            key={index} 
                            className="p-2 hover:bg-rose-50 rounded text-center cursor-pointer transition-colors"
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  <MessageSquare className="inline mr-2 text-rose-500" size={16} /> Special Requests
                </label>
                <textarea 
                  id="message"
                  rows="4" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" 
                  placeholder="Tell us about any special requests or concerns..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-4 px-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center"
              >
                <Calendar className="mr-2" size={20} />
                Book Appointment
              </button>
            </form>
          </div>
          
          {/* Right Column - Service Highlight */}
          <div className="lg:w-2/5">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-rose-100 sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <Star className="mr-2 text-rose-500" size={24} />
                Our Services
              </h2>
              
              <div className="space-y-4">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 text-gray-700">
                      {category.title}
                    </h3>
                    
                    <div className="space-y-4">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex} 
                          className={`p-4 rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer ${
                            selectedCategory === service.title ? 'bg-rose-50 border border-rose-200' : 'bg-gray-50'
                          }`}
                          onClick={() => setSelectedCategory(service.title)}
                        >
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-rose-200">
                              <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">{service.title}</h4>
                              <p className="text-sm text-gray-500 line-clamp-1">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {category.services.length > 3 && (
                      <a href="#" className="text-rose-500 hover:text-rose-600 text-sm font-medium flex items-center mt-2">
                        View all {category.services.length} services
                        <ChevronDown size={16} className="ml-1" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-rose-50 rounded-lg border border-rose-100">
                <h4 className="font-medium text-gray-800 mb-2">Need Assistance?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our beauty experts are available to help you choose the perfect service for your needs.
                </p>
                <a href="tel:+1234567890" className="text-rose-600 font-medium hover:text-rose-700 transition-colors">
                  Call us: (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Process Steps */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It <span className="text-rose-500">Works</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Service',
                description: 'Select from our wide range of premium beauty and hair services'
              },
              {
                step: '02',
                title: 'Pick a Date',
                description: 'Select your preferred date and time for the appointment'
              },
              {
                step: '03',
                title: 'Book Appointment',
                description: 'Complete your booking by submitting the appointment form'
              },
              {
                step: '04',
                title: 'Get Confirmation',
                description: 'Receive a confirmation message with your appointment details'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-24 bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-rose-100">
                <img 
                  src="/api/placeholder/100/100" 
                  alt="Happy client" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="text-rose-400 mb-4">
                <svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                  <path d="M12 48C8.8 48 6.1 46.9 3.9 44.7C1.3 42.1 0 38.9 0 35.1C0 31.5 0.9 27.9 2.7 24.3C4.5 20.7 7.1 17.3 10.5 14.1L20.7 25.8C20.5 29.4 19.8 32.4 18.6 34.8C17.4 37.2 15.9 38.4 14.1 38.4C15.5 38.4 16.6 39 17.4 40.2C18.2 41.4 18.6 42.9 18.6 44.7C18.6 45.9 18.2 46.9 17.4 47.7C16.6 47.9 14.8 48 12 48ZM42 48C38.8 48 36.1 46.9 33.9 44.7C31.3 42.1 30 38.9 30 35.1C30 31.5 30.9 27.9 32.7 24.3C34.5 20.7 37.1 17.3 40.5 14.1L50.7 25.8C50.5 29.4 49.8 32.4 48.6 34.8C47.4 37.2 45.9 38.4 44.1 38.4C45.5 38.4 46.6 39 47.4 40.2C48.2 41.4 48.6 42.9 48.6 44.7C48.6 45.9 48.2 46.9 47.4 47.7C46.6 47.9 44.8 48 42 48Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-gray-700 italic mb-4">
                I've been a regular client at Staylon Beauty for over a year now, and the experience is always exceptional. The booking process is simple, and they always accommodate my schedule. Highly recommended!
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                <p className="text-rose-500 text-sm">Loyal Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;