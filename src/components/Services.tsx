import React from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Pixel-perfect, responsive websites with modern frameworks like React and Next.js'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications built with React Native and Flutter'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered designs that combine aesthetics with functionality'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Increase your visibility with our data-driven SEO strategies'
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Complete online store solutions with secure payment integrations'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Comprehensive campaigns to grow your online presence'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;