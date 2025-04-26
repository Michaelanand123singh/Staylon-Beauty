import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const HeroCarousel = () => {
  const slides = [
    {
      image: '/assets/images/hero1.jpg',
      title: 'Facial Treatment',
      description: 'Rejuvenate your skin with our premium facial treatments'
    },
    {
      image: '/assets/images/hero2.jpg',
      title: 'Bridal Makeup',
      description: 'Get the perfect bridal look with our expert makeup artists'
    },
    {
      image: '/assets/images/hero3.jpg',
      title: 'Hair Styling',
      description: 'Transform your hair with our professional styling services'
    }
  ]

  return (
    <div className="relative">
      <Carousel 
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        stopOnHover={false}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-screen relative">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4">
                <h6 className="text-xl uppercase tracking-widest mb-4">
                  {slide.title}
                </h6>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg mb-8">{slide.description}</p>
                <button className="btn btn-primary">
                  Make Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default HeroCarousel