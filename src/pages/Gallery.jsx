import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Gallery = () => {
  const images = [
    '/assets/images/gallery1.jpg',
    '/assets/images/gallery2.jpg',
    // Add more images...
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <p className="max-w-2xl mx-auto text-lg">
            See the transformations we've created
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={images.map(src => ({ src }))}
            on={{
              view: ({ index }) => setPhotoIndex(index)
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;