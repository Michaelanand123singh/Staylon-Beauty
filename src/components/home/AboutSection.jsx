const AboutSection = () => {
    return (
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img 
                src="/assets/images/about.jpg" 
                alt="About Staylon Beauty" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <span className="inline-block bg-primary text-white px-3 py-1 rounded mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Staylon Beauty Parlour, Known for Our Services
              </h2>
              <p className="text-lg mb-8 border-l-4 border-primary pl-4">
                A beauty parlour, also known as a salon or spa, is a business that offers a
                range of beauty and wellness services. It is a place where individuals can enhance their
                appearance, relax, and indulge in treatments for skin, hair, nails, and well-being.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 text-center rounded shadow">
                  <h3 className="text-4xl font-bold text-primary mb-2">99</h3>
                  <p className="uppercase text-sm">Beauty Specialist</p>
                </div>
                <div className="bg-white p-6 text-center rounded shadow">
                  <h3 className="text-4xl font-bold text-primary mb-2">9999</h3>
                  <p className="uppercase text-sm">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default AboutSection