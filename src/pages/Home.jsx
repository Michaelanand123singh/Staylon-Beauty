import HeroCarousel from '../components/home/HeroCarousel'
import ServicesSection from '../components/home/ServicesSection'
import GalleryPreview from '../components/home/GalleryPreview'
import Testimonials from '../components/home/Testimonials'
import AboutSection from '../components/home/AboutSection'

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <GalleryPreview />
      <Testimonials />
    </div>
  )
}

export default Home