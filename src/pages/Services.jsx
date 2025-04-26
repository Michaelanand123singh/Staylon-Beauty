import ServiceCategory from '../components/services/ServiceCategory'

const Services = () => {
  const allServices = [
    {
      title: 'Beauty Services',
      services: [
        { title: 'Facial Treatments', description: 'Rejuvenate your skin' },
        { title: 'Waxing', description: 'Smooth, hair-free skin' },
        { title: 'Bleach', description: 'Brighten your complexion' }
      ]
    },
    {
      title: 'Hair Services',
      services: [
        { title: 'Hair Coloring', description: 'Vibrant, long-lasting colors' },
        { title: 'Hair Spa', description: 'Nourishing treatments' },
        { title: 'Haircuts', description: 'Precision styling' }
      ]
    }
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Premium beauty treatments tailored to your needs
          </p>
        </div>

        {allServices.map((category, index) => (
          <ServiceCategory 
            key={index}
            title={category.title} 
            services={category.services}
          />
        ))}
      </div>
    </div>
  )
}

export default Services