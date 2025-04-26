const WhatsAppButton = () => {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="https://wa.me/918271491393" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </a>
      </div>
    )
  }
  
  export default WhatsAppButton