import React, { useState } from 'react';
import { PortfolioItem } from '../types';

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Gaming PC Build & Setup',
      description: 'Custom gaming PC build with RGB lighting, liquid cooling, and high-performance components.',
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'gaming'
    },
    {
      id: '2',
      title: 'Corporate Office Network Setup',
      description: 'Complete network infrastructure setup for a 50-employee office space.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'office'
    },
    {
      id: '3',
      title: 'Laptop Repair & Upgrade',
      description: 'Major repair and performance upgrade for a business laptop including SSD and RAM upgrade.',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'repair'
    },
    {
      id: '4',
      title: 'Security System Installation',
      description: 'CCTV and access control system installation for a retail store.',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'security'
    },
    {
      id: '5',
      title: 'Desktop Workstation Setup',
      description: 'Professional workstation setup with dual monitors and ergonomic accessories.',
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'office'
    },
    {
      id: '6',
      title: 'Server Room Organization',
      description: 'Complete server room cable management and organization project.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      category: 'office'
    }
  ];

  const categories = ['all', 'gaming', 'office', 'repair', 'security'];

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-8 flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Portfolio Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Showcasing Our Best Work
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-blue-500/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white/5 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8">
            Let us help you bring your vision to life with our expert IT solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;