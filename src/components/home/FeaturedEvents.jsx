// src/components/home/FeaturedEvents.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';

const FeaturedEvents = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Annual Sports Meet",
      date: "June 15, 2025",
      image: "/images/placeholder/sports.jpg",
      description: "Join us for our annual sports competition featuring athletics, cricket, netball, and more!"
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "July 10, 2025",
      image: "/images/placeholder/science.jpg",
      description: "Explore innovative projects and experiments created by our talented students."
    },
    {
      id: 3,
      title: "Cultural Day",
      date: "August 5, 2025",
      image: "/images/placeholder/cultural.jpg",
      description: "Experience the rich cultural heritage of Sri Lanka through performances, food, and art."
    }
  ];
  
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-maroon-100 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-maroon-200 rounded-full opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-maroon-100 text-maroon-700 mb-4">Upcoming</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">School Events</h2>
          <div className="w-20 h-1.5 bg-maroon-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with our exciting events and activities happening throughout the academic year.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <AnimatedSection 
              key={event.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <span className="inline-block px-2 py-1 rounded text-xs font-bold bg-maroon-600 mb-2">{event.date}</span>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link to={`/events/${event.id}`} className="inline-flex items-center font-semibold text-maroon-600 hover:text-maroon-700">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/events" className="inline-block px-8 py-4 bg-maroon-600 text-white font-semibold rounded-lg hover:bg-maroon-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;