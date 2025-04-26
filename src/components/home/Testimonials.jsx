const Testimonials = () => {
    const testimonials = [
      {
        name: 'Tejasvi',
        role: 'Satisfied Customer',
        content: "I've been going to Staylon Beauty Parlour for years, and I'm always impressed by their consistent quality. The staff is highly skilled and knowledgeable, and they use top-of-the-line products."
      },
      // Add more testimonials...
    ]
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img 
                src="/assets/images/testimonial.jpg" 
                alt="Happy Client" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <span className="inline-block bg-light text-primary px-3 py-1 rounded mb-4">
                Testimonial
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our Clients Say!
              </h2>
              
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <p className="mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <h5 className="font-bold">{testimonial.name}</h5>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials