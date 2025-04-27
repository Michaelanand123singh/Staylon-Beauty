import React from 'react';
import { Link } from 'react-router-dom';
import OpeningHours from './OpeningHours';
import { Sparkles, Award, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Since 2010
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-500">
            About Staylon Beauty
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
            Discover our journey in providing exceptional beauty services and transforming lives through the art of beauty
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          {/* Image Column */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-300 to-pink-300 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="/about-us.jpg" 
                alt="Our Salon" 
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating award badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl hidden md:flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-rose-600">Staylon Beauty</p>
                <p className="text-xs text-gray-600">Best Salon of 2025</p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our <span className="text-rose-600">Story</span></h2>
            
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Founded in 2010, Staylon Beauty has been transforming clients with our 
              personalized beauty treatments. Our team of certified professionals 
              brings years of experience to help you look and feel your best.
            </p>
            
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              We believe beauty is about enhancing your natural features while 
              providing a relaxing, luxurious experience. Every client who walks through 
              our doors deserves exceptional care and attention to detail.
            </p>
            
            {/* Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-rose-100 rounded-lg mr-3">
                    <Sparkles size={20} className="text-rose-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">Excellence</h3>
                </div>
                <p className="text-gray-600">We strive for perfection in every treatment and service.</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-rose-100 rounded-lg mr-3">
                    <Heart size={20} className="text-rose-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">Passion</h3>
                </div>
                <p className="text-gray-600">Our love for beauty drives everything we do.</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-rose-100 rounded-lg mr-3">
                    <Users size={20} className="text-rose-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">Community</h3>
                </div>
                <p className="text-gray-600">Building relationships that last beyond treatments.</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-rose-100 rounded-lg mr-3">
                    <Award size={20} className="text-rose-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">Quality</h3>
                </div>
                <p className="text-gray-600">Premium products and techniques for optimal results.</p>
              </div>
            </div>
            
            {/* Opening Hours Component with styling wrapper */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Visit Our <span className="text-rose-600">Salon</span></h3>
              <OpeningHours />
              <Link to="/appointment">
                <button className="mt-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto">
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-rose-500 font-bold text-4xl mb-2">15+</div>
            <div className="text-gray-700 font-medium">Years Experience</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-rose-500 font-bold text-4xl mb-2">5,000+</div>
            <div className="text-gray-700 font-medium">Happy Clients</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-rose-500 font-bold text-4xl mb-2">25+</div>
            <div className="text-gray-700 font-medium">Expert Stylists</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-rose-500 font-bold text-4xl mb-2">50+</div>
            <div className="text-gray-700 font-medium">Services Offered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;