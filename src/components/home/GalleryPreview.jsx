import { Link } from 'react-router-dom'

const GalleryPreview = () => {
  const galleryImages = [
    '/assets/images/gallery1.jpg',
    '/assets/images/gallery2.jpg',
    '/assets/images/gallery3.jpg',
    '/assets/images/gallery4.jpg',
    '/assets/images/gallery5.jpg',
    '/assets/images/gallery6.jpg'
  ]

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Gallery</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div key={index} className="gallery-item overflow-hidden rounded-lg">
              <img 
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/gallery" className="btn btn-primary">
            See More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview