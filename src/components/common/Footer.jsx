const Footer = () => {
    return (
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">StayLon</span> Beauty
              </h3>
              <p className="mb-4">
                A beauty parlour, also known as a Salon beauty or beauty spa, is a
                business establishment that offers a range of beauty and wellness services.
              </p>
              <p className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                sec4 Upper trimurti jewellers front of metro studio, No-CF-34,1st floor,
                (Harshwardan plaza, Sector 4, Bokaro Steel City, Jharkhand 827004
              </p>
              <p className="flex items-center mb-2">
                <i className="fas fa-phone-alt mr-2 text-primary"></i>+91 8271491393
              </p>
              <p className="flex items-center mb-4">
                <i className="fas fa-envelope mr-2 text-primary"></i>staylonbeauty@gmail.com
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-primary transition">Home</a></li>
                <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
                <li><a href="/services" className="hover:text-primary transition">Our Services</a></li>
                <li><a href="/gallery" className="hover:text-primary transition">Gallery</a></li>
                <li><a href="/contact" className="hover:text-primary transition">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition">Skin Care Treatments</a></li>
                <li><a href="#" className="hover:text-primary transition">Hair spa</a></li>
                <li><a href="#" className="hover:text-primary transition">Beauty Treatments</a></li>
                <li><a href="#" className="hover:text-primary transition">Hair Coloring</a></li>
                <li><a href="#" className="hover:text-primary transition">Waxing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; StayLon Beauty Parlour. All Rights Reserved.</p>
            <p className="mt-2">Designed by Codingditto</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer