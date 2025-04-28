import React from "react";
import { Link } from "react-router-dom";
import OpeningHours from "./OpeningHours";
import { Sparkles, Heart, Users, Award, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Discover the Art of Nails
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-500">
            Welcome to Shringar.kay
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
            A cozy home-based nail studio where beauty meets perfection. We
            specialize in luxurious, detailed nail services tailored to make you
            feel elegant, confident, and cared for.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          {/* Image */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-300 to-pink-300 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="2.PNG"
                alt="Shringar.kay Nail Studio"
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl hidden md:flex items-center justify-center">
              <div className="text-center">
                <p className="font-bold text-rose-600">Shringar.kay</p>
                <p className="text-xs text-gray-600">
                  Elegance in Every Detail ✨
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Transform Your Nails, Transform Your Mood
            </h2>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              At{" "}
              <span className="text-rose-600 font-semibold">Shringar.kay</span>,
              we don't just do nails — we create an experience. Every visit is a
              moment of relaxation, self-care, and beauty where you are our top
              priority.
            </p>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              We specialize in:
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>✨ Russian Manicure - Precision, beauty, perfection.</li>
                <li>✨ Gel Polish Manicure - Long-lasting shine and color.</li>
                <li>
                  ✨ Soft Gel Extensions - Lightweight, durable, natural look.
                </li>
                <li>
                  ✨ Gel Nail Extensions - Strength and elegance combined.
                </li>
                <li>
                  ✨ Custom Nail Art - Unique designs tailored to your style.
                </li>
              </ul>
            </p>
            <p className="mb-8 text-lg text-gray-700 leading-relaxed">
              Our priority is to ensure a clean, hygienic, and serene
              environment where you can unwind and emerge feeling more beautiful
              than ever.
            </p>

            {/* Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-rose-100 rounded-lg mr-3">
                    <Sparkles size={20} className="text-rose-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">Artistry</h3>
                </div>
                <p className="text-gray-600">
                  Every nail set is treated like a masterpiece crafted with
                  precision and passion.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-rose-100 rounded-lg mr-3">
                    <Heart size={20} className="text-rose-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">Personal Care</h3>
                </div>
                <p className="text-gray-600">
                  Tailored consultations to understand your preferences and
                  style dreams.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-rose-100 rounded-lg mr-3">
                    <ShieldCheck size={20} className="text-rose-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">Hygiene First</h3>
                </div>
                <p className="text-gray-600">
                  Strict sterilization, fresh tools, and a safe, sanitized
                  workspace every time.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-rose-100 rounded-lg mr-3">
                    <Award size={20} className="text-rose-600" />
                  </div>
                  <h3 className="font-bold text-gray-800">Expert Techniques</h3>
                </div>
                <p className="text-gray-600">
                  Skilled professionals delivering flawless manicures and
                  extensions every time.
                </p>
              </div>
            </div>

            {/* Visit Info */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Visit Our <span className="text-rose-600">Home Studio</span>
              </h3>
              <OpeningHours />
              <div className="text-gray-600 text-sm mb-4">
                Akurli Cross Road, Kandivali East, Mumbai - 400101, Maharashtra,
                India
              </div>
              <Link to="/appointment">
                <button className="mt-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto">
                  Book Your Appointment Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-rose-500 font-bold text-4xl mb-2">5+</div>
            <div className="text-gray-700 font-medium">Years of Expertise</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-rose-500 font-bold text-4xl mb-2">1,200+</div>
            <div className="text-gray-700 font-medium">Smiling Clients</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-rose-500 font-bold text-4xl mb-2">20+</div>
            <div className="text-gray-700 font-medium">Signature Styles</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-rose-500 font-bold text-4xl mb-2">100%</div>
            <div className="text-gray-700 font-medium">Client Happiness</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
