const Contact = () => {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Reach out to book an appointment or ask questions
            </p>
          </div>
  
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2">Name</label>
                    <input type="text" className="w-full p-3 border rounded" />
                  </div>
                  <div>
                    <label className="block mb-2">Email</label>
                    <input type="email" className="w-full p-3 border rounded" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Subject</label>
                  <input type="text" className="w-full p-3 border rounded" />
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea rows="5" className="w-full p-3 border rounded"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
  
            <div className="lg:w-1/2">
              <div className="bg-light p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                    sec4 Upper trimurti jewellers front of metro studio, Bokaro Steel City
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-phone-alt mr-3 text-primary"></i>
                    +91 8271491393
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-envelope mr-3 text-primary"></i>
                    staylonbeauty@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact