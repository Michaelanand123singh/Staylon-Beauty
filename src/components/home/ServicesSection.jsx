import ServiceCategory from '../services/ServiceCategory'

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: 'Beauty Services',
      services: [
        {
          title: 'Skin Care Treatments',
          description: 'Experience our premier skincare treatments tailored to rejuvenate your skin',
          image: '/assets/images/service1.jpg'
        },
        {
          title: 'Facial',
          description: 'Illuminate your complexion with our facials and bleach services',
          image: '/assets/images/service2.jpg'
        },
        // Add more services...
      ]
    },
    {
      title: 'Hair Services',
      services: [
        {
          title: 'Hair Straightening',
          description: 'Transform your hair with professional straightening services',
          image: '/assets/images/service3.jpg'
        },
        // Add more services...
      ]
    }
    // Add more categories...
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-light text-primary px-3 py-1 rounded mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Beauty Services</h2>
        </div>
        
        {serviceCategories.map((category, index) => (
          <ServiceCategory 
            key={index}
            title={category.title}
            services={category.services}
          />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection