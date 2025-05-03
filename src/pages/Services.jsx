import { useState } from "react";
import { Scissors, Star, Heart } from "lucide-react";

const Services = () => {
  const nailServices = [
    {
      title: "Gel Polish Application",
      price: "₹550",
      description:
        "A flawless coat of high-gloss color, perfect for every occasion.",
      duration: 45,
      image: "url_to_image_of_gel_polish",
      isNew: false,
    },
    {
      title: "Structured Manicure (BIAB)",
      price: "₹750",
      description:
        "Strengthen and enhance your natural nails with our premium builder base.",
      duration: 60,
      image: "url_to_image_of_structured_manicure",
      isNew: true,
    },
    {
      title: "Temporary Nails",
      price: "₹800",
      description:
        "The ideal choice for a short-term, stunning transformation.",
      duration: 45,
      image: "url_to_image_of_temporary_nails",
      isNew: false,
    },
    {
      title: "Soft Gel Extensions",
      price: "₹900",
      description:
        "Seamless, flexible enhancements for a lightweight, natural feel.",
      duration: 75,
      image: "url_to_image_of_soft_gel",
      isNew: false,
    },
    {
      title: "Gum Gel Enhancements",
      price: "₹950",
      description:
        "Durable, sculpted extensions designed for ultimate resilience and elegance.",
      duration: 90,
      image: "url_to_image_of_gum_gel",
      isNew: true,
    },
    {
      title: "Gel Extensions",
      price: "₹1200",
      description: "Bespoke length and strength, crafted with precision.",
      duration: 90,
      image: "url_to_image_of_gel_extensions",
      isNew: false,
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const tabOptions = [
    { id: "all", label: "All Nail Services", icon: Star },
    { id: "popular", label: "Popular", icon: Heart },
  ];

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-10 md:mb-16">
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full mb-3 inline-block">
            Premium Nail Treatments
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            SHRINGAR.KAY🤍 Signature Nail Services
          </h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            Experience the art of nail care with our exclusive range of services
            tailored to perfection.
          </p>
        </div>

        {/* Service Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            {tabOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "bg-indigo-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Nail Services */}
        {(activeTab === "all" || activeTab === "popular") && (
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <Star className="text-amber-400 mr-2" size={24} />
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                Our Nail Services
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {nailServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="h-48 sm:h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                    <img
                      src={`/api/placeholder/800/600`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.isNew && (
                      <span className="absolute top-3 right-3 bg-indigo-500 text-white text-xs uppercase tracking-wider py-1 px-2 rounded-md z-20">
                        New
                      </span>
                    )}
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <span className="text-indigo-600 font-semibold">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-500">
                        {service.duration} min
                      </span>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md font-medium">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Pamper Your Nails?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto text-indigo-100">
            Book your appointment today and indulge in our luxurious nail
            services at SHRINGAR.KAY🤍.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md">
              Book Appointment
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Special Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
