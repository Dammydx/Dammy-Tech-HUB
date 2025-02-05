import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide seamless IT solutions that empower businesses and individuals by enhancing productivity, security, and efficiency through innovative technology services.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be a leader in technology-driven solutions, transforming businesses and personal computing experiences through cutting-edge IT innovations and security.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest quality standards and customer satisfaction.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We build lasting relationships through trust and exceptional service.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-8 flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Technology Team"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Dedicated to Delivering Innovative IT Solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Dammy Tech HUB is a premier IT solutions provider dedicated to delivering seamless technology services for businesses, schools, and individuals. We specialize in hardware repairs, cybersecurity, networking, IT infrastructure setup, cloud solutions, and sales of computing devices.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our team of experienced professionals is committed to providing cutting-edge, reliable, and secure IT solutions that enhance productivity and digital security. We take pride in our ability to understand and meet the unique technological needs of each client.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <value.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Expertise & Innovation</h3>
              <p className="text-gray-400">Years of experience in IT maintenance, cybersecurity, and networking.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Seamless Solutions</h3>
              <p className="text-gray-400">Tailored IT services designed for maximum efficiency and security.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Customer-Centric Approach</h3>
              <p className="text-gray-400">Personalized services for businesses and individuals.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Future-Ready Technology</h3>
              <p className="text-gray-400">We implement the latest advancements to keep our clients ahead.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;