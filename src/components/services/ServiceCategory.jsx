import ServiceCard from './ServiceCard'

const ServiceCategory = ({ title, services }) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceCategory