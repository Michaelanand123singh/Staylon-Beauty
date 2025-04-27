import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery = () => {
  // Example images - replace with your actual image paths
  const images = [
    '/api/placeholder/600/400',
    '/api/placeholder/600/400',
    '/api/placeholder/600/400',
    '/api/placeholder/600/400',
    '/api/placeholder/600/400',
    '/api/placeholder/600/400',
    '/api/placeholder/600/400',
    '/api/placeholder/600/400',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  // Example categories - replace with your actual categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'hair', name: 'Hair' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'nails', name: 'Nails' },
    { id: 'spa', name: 'Spa' }
  ];

  // Example image data with categories - replace with your actual data
  const galleryItems = [
    { src: images[0], category: 'hair', title: 'Hair Transformation' },
    { src: images[1], category: 'makeup', title: 'Natural Makeup Look' },
    { src: images[2], category: 'nails', title: 'French Manicure' },
    { src: images[3], category: 'spa', title: 'Relaxing Spa Day' },
    { src: images[4], category: 'hair', title: 'Hair Coloring' },
    { src: images[5], category: 'makeup', title: 'Evening Glamour' },
    { src: images[6], category: 'nails', title: 'Nail Art Design' },
    { src: images[7], category: 'spa', title: 'Hot Stone Massage' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Lightbox navigation functions
  const nextImage = () => {
    setPhotoIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setPhotoIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-800">Our Beauty Gallery</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Showcasing our finest transformations and breathtaking beauty services
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-pink-100 border border-pink-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-pink-200 text-sm capitalize">{item.category}</p>
                <div className="absolute top-4 right-4 bg-white/30 p-2 rounded-full backdrop-blur-sm">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when no items match filter */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No gallery items found in this category.</p>
          </div>
        )}

        {/* Custom Lightbox */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <div className="relative w-full max-w-4xl p-4">
              {/* Close button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-0 right-0 -mt-12 -mr-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Current image */}
              <div className="relative">
                <img 
                  src={filteredItems[photoIndex].src} 
                  alt={filteredItems[photoIndex].title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                />
                
                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold">{filteredItems[photoIndex].title}</h3>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button 
                  onClick={prevImage}
                  className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full m-4 transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button 
                  onClick={nextImage}
                  className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full m-4 transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-pink-800 mb-4">Ready for your transformation?</h3>
          <p className="text-gray-600 mb-6">Book your appointment today and join our gallery of beautiful transformations</p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;