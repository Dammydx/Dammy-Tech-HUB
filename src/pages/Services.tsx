import React from 'react';
import { Shield, Server, Laptop, Monitor, Wrench, Clock, Package, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: 'IT Support & Maintenance',
      description: 'Expert troubleshooting, system repairs, and remote assistance for all your technical needs.',
      features: ['System diagnostics', 'Hardware repairs', 'Remote support', 'Regular maintenance']
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Data Protection',
      description: 'Comprehensive security solutions to protect your digital assets and sensitive information.',
      features: ['Antivirus management', 'Risk assessment', 'Data backup', 'Security audits']
    },
    {
      icon: Server,
      title: 'Networking & Security Solutions',
      description: 'Professional network setup and security infrastructure implementation.',
      features: ['CCTV installation', 'Network configuration', 'Security systems', 'Infrastructure planning']
    },
    {
      icon: Monitor,
      title: 'Software Solutions',
      description: 'Expert software installation, optimization, and technical support services.',
      features: ['Software installation', 'System optimization', 'Technical support', 'Software updates']
    },
    {
      icon: Wrench,
      title: 'IT Infrastructure & Office Setup',
      description: 'Complete office IT setup and infrastructure solutions for businesses.',
      features: ['Workstation setup', 'Server installation', 'Office networking', 'Infrastructure design']
    },
    {
      icon: Package,
      title: 'Sales of IT Equipment',
      description: 'Quality computers, accessories, and IT equipment for all your needs.',
      features: ['Laptops', 'Desktops', 'Accessories', 'Custom builds']
    },
    {
      icon: Truck,
      title: 'Delivery & Logistics',
      description: 'Convenient pickup and delivery services for computer repairs and equipment.',
      features: ['Pickup service', 'Delivery options', 'Secure handling', 'Flexible scheduling']
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-8 flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Comprehensive IT Solutions for Every Need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/5 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can benefit your business
            and help you achieve your technology goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;