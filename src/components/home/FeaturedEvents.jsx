import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';

const FeaturedEvents = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Annual Sports Meet",
      date: "June 15, 2025",
      image: "/assets/images/placeholder/sports.jpg",
      description: "Join us for our annual sports competition featuring athletics, cricket, netball, and more!"
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "July 10, 2025",
      image: "/assets/images/placeholder/science.jpg",
      description: "Explore innovative projects and experiments created by our talented students."
    },
    {
      id: 3,
      title: "Cultural Day",
      date: "August 5, 2025",
      image: "/assets/images/placeholder/cultural.jpg",
      description: "Experience the rich cultural heritage of Sri Lanka through performances, food, and art."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <AnimatedSection key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-maroon-700 mb-4">
                  <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </p>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <Link to={`/events/${event.id}`} className="text-maroon-700 hover:text-maroon-800 font-bold transition-colors">
                  Learn more
                  <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/events" className="inline-block bg-maroon-700 hover:bg-maroon-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;