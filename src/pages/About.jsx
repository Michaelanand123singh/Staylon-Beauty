import OpeningHours from './OpeningHours'

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Staylon Beauty</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Discover our journey in providing exceptional beauty services since 2010
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src="/assets/images/about-page.jpg" 
              alt="Our Salon" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4 text-lg">
              Founded in 2010, Staylon Beauty has been transforming clients with our 
              personalized beauty treatments. Our team of certified professionals 
              brings years of experience to help you look and feel your best.
            </p>
            <p className="mb-6 text-lg">
              We believe beauty is about enhancing your natural features while 
              providing a relaxing, luxurious experience.
            </p>
            
            <OpeningHours />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About