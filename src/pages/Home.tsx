import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Laptop, Monitor, Wrench, Clock } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const features = [
    {
      icon: Shield,
      title: 'IT Support',
      description: 'Comprehensive technical support and maintenance services',
    },
    {
      icon: Server,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
    },
    {
      icon: Monitor,
      title: 'Networking',
      description: 'Professional network setup and maintenance services',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] -mt-8 flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Tech Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dammy Tech HUB
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Seamless IT Solutions for a Smarter Tomorrow
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Explore Our Services
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Dammy Tech HUB?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive IT solutions tailored to your needs,
              ensuring your business stays ahead in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From IT support to cybersecurity, we offer a wide range of services
              to meet your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Laptop}
              title="Computer Repairs"
              description="Expert repair services for laptops and desktops"
            />
            <ServiceCard
              icon={Monitor}
              title="IT Infrastructure"
              description="Complete setup and maintenance of IT systems"
            />
            <ServiceCard
              icon={Shield}
              title="Security Solutions"
              description="Advanced cybersecurity and CCTV installations"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us today to discuss how we can help your business thrive with
            our IT solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
    <Icon className="w-12 h-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Home;