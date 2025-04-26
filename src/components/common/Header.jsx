import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-primary">Staylon</span> Beauty
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/about" className="hover:text-primary transition">About</Link>
          <Link to="/services" className="hover:text-primary transition">Services</Link>
          <Link to="/gallery" className="hover:text-primary transition">Gallery</Link>
          <div className="relative group">
            <button className="hover:text-primary transition">Other</button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
              <Link to="/appointment" className="block px-4 py-2 hover:bg-gray-100">Appointment</Link>
              <Link to="/opening-hours" className="block px-4 py-2 hover:bg-gray-100">Open Hours</Link>
            </div>
          </div>
          <Link to="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>
        <button className="md:hidden">☰</button>
      </div>
    </header>
  )
}

export default Header