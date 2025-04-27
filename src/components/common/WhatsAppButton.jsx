import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll events to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up or at top
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 ease-in-out ${
        isVisible 
          ? 'bottom-6 sm:bottom-8 opacity-100' 
          : 'bottom-0 opacity-0'
      } ${
        // Responsive positioning - moves to right corner on desktop
        window.innerWidth >= 768 ? 'right-6 sm:right-8' : 'left-6 sm:left-8'
      }`}
    >
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-solid border-transparent border-t-white"></div>
        </div>
        
        {/* WhatsApp button */}
        <a 
          href="https://wa.me/918271491393" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="bg-green-500 hover:bg-green-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 ease-in-out"
        >
          {/* WhatsApp SVG Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 30 30" 
            width="30px" 
            height="30px"
            className="text-white fill-current"
          >
            <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 15 5 C 20.523 5 25 9.477 25 15 C 25 20.523 20.523 25 15 25 C 13.076965 25 11.260769 24.486997 9.7265625 23.591797 L 9.0292969 23.181641 L 8.2734375 23.435547 L 6.2695312 24.066406 L 6.8769531 22.134766 L 7.1523438 21.380859 L 6.7421875 20.683594 C 5.7651874 19.094905 5.21875 17.11555 5.21875 15 C 5.21875 9.477 9.477 5 15 5 z M 9.4804688 8.7773438 C 9.3057289 8.7773438 9.0458223 8.8358835 8.8144531 9.09375 C 8.5830839 9.3516163 7.9433594 9.9500013 7.9433594 11.166016 C 7.9433594 12.382031 8.8156725 13.552784 8.9394531 13.728516 C 9.0642339 13.904248 10.63086 16.430471 13.0625 17.410156 C 15.038434 18.186613 15.494923 18.059196 15.951172 18 C 16.407422 17.940805 17.458854 17.402498 17.642578 16.832031 C 17.826301 16.261564 17.826301 15.777026 17.764648 15.667969 C 17.703348 15.558569 17.523646 15.491763 17.263672 15.357422 C 17.003698 15.223081 15.789609 14.621094 15.548828 14.529297 C 15.308047 14.437497 15.13072 14.391732 14.951172 14.652344 C 14.771624 14.912956 14.296969 15.460881 14.138672 15.640625 C 13.980375 15.820369 13.822064 15.843236 13.5625 15.708984 C 13.302935 15.574343 12.479746 15.30186 11.496094 14.417969 C 10.733655 13.740648 10.226174 12.905553 10.068359 12.644531 C 9.9105449 12.38351 10.052333 12.233888 10.189453 12.097656 C 10.312843 11.976856 10.466224 11.782635 10.605469 11.625 C 10.744714 11.467365 10.790453 11.353339 10.882812 11.177734 C 10.975172 11.002129 10.929625 10.844696 10.861328 10.710938 C 10.792978 10.577176 10.300929 9.3510775 10.080078 8.8359375 C 9.8811016 8.3821675 9.6552085 8.7773438 9.4804688 8.7773438 z"/>
          </svg>
        </a>
      </div>
      
      {/* Pulse animation */}
      <span className="absolute top-0 left-0 h-full w-full rounded-full bg-green-500 opacity-75 animate-ping duration-1000"></span>
    </div>
  );
};

export default WhatsAppButton;