const Appointment = () => {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Schedule your beauty treatment today
            </p>
          </div>
  
          <form className="bg-light p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">Full Name</label>
                <input type="text" className="w-full p-3 border rounded" required />
              </div>
              <div>
                <label className="block mb-2">Phone Number</label>
                <input type="tel" className="w-full p-3 border rounded" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">Service</label>
                <select className="w-full p-3 border rounded">
                  <option>Select a service</option>
                  <option>Facial Treatment</option>
                  <option>Hair Styling</option>
                  {/* Add more options */}
                </select>
              </div>
              <div>
                <label className="block mb-2">Date</label>
                <input type="date" className="w-full p-3 border rounded" />
              </div>
            </div>
  
            <div className="mb-6">
              <label className="block mb-2">Special Requests</label>
              <textarea rows="3" className="w-full p-3 border rounded"></textarea>
            </div>
  
            <button type="submit" className="btn btn-primary w-full">
              Book Now
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Appointment