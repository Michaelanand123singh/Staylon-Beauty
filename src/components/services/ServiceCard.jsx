const ServiceCard = ({ title, description, image }) => {
    return (
      <div className="service-card">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-bold mb-3">{title}</h4>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="btn btn-outline">Make Order</button>
        </div>
      </div>
    )
  }
  
  export default ServiceCard