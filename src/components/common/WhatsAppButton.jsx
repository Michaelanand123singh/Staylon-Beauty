import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "bottom-6 sm:bottom-8 opacity-100" : "bottom-0 opacity-0"
      } ${
        typeof window !== "undefined" && window.innerWidth >= 768
          ? "right-6 sm:right-8"
          : "left-6 sm:left-8"
      }`}
    >
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-solid border-transparent border-t-white"></div>
        </div>

        {/* WhatsApp button */}
        <a
          href="https://api.whatsapp.com/send/?phone=919004065531&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative bg-green-500 hover:bg-green-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 ease-in-out overflow-hidden"
        >
          {/* Pulse animation inside button */}
          <span className="absolute h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
            className="text-white fill-current relative z-10"
          >
            <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 15 5 C 20.523 5 25 9.477 25 15 C 25 20.523 20.523 25 15 25 C 13.076965 25 11.260769 24.486997 9.7265625 23.591797 L 9.0292969 23.181641 L 8.2734375 23.435547 L 6.2695312 24.066406 L 6.8769531 22.134766 L 7.1523438 21.380859 L 6.7421875 20.683594 C 5.7651874 19.094905 5.21875 17.11555 5.21875 15 C 5.21875 9.477 9.477 5 15 5 z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
