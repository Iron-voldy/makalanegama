import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';
import Carousel from '../common/Carousel';

const FeaturedEvents = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Annual Sports Meet",
      date: "June 15, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "School Grounds",
      description: "Join us for our annual sports competition featuring athletics, cricket, netball, volleyball, and traditional games. All students and parents are welcome!",
      category: "Sports",
      participants: "All Grades",
      highlights: ["Athletics", "Cricket", "Netball", "Prizes"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "July 10, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "School Auditorium",
      description: "Learn about different career paths and opportunities from industry professionals. Get guidance on subject choices and future planning.",
      category: "Workshop",
      participants: "Grades 9-11",
      highlights: ["Career Options", "Industry Experts", "Subject Guidance", "Future Planning"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 6,
      title: "Annual Prize Giving",
      date: "November 20, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "School Auditorium",
      description: "Celebrating the academic and extra-curricular achievements of our students with awards, recognition, and special performances.",
      category: "Ceremony",
      participants: "All Community",
      highlights: ["Awards", "Recognition", "Performances", "Celebration"],
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold bg-red-600/20 border border-red-500/30 text-red-300 mb-4">
            Upcoming Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            School <span className="gradient-text-red">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Stay updated with our exciting events and activities happening throughout the academic year.
          </p>
        </AnimatedSection>
        
        {/* Events Carousel */}
        <div className="mb-12">
          <Carousel 
            autoplay={true} 
            interval={5000} 
            showDots={true} 
            showArrows={true}
            slidesToShow={1}
            className="h-auto"
          >
            {featuredEvents.map((event) => (
              <div key={event.id} className="px-4">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden hover:border-red-500/40 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Event Info Side */}
                    <div className="p-8">
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${event.gradient} text-white`}>
                          {event.category}
                        </span>
                        <span className="text-red-400 font-semibold text-lg">
                          {event.date}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-3xl font-bold text-white mb-4 hover:text-red-400 transition-colors duration-300">
                        {event.title}
                      </h3>

                      {/* Event Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {event.participants}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* CTA Button */}
                      <Link 
                        to={`/events/${event.id}`} 
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-900 transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Learn More
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>

                    {/* Event Highlights Side */}
                    <div className="bg-gray-700/30 p-8 flex flex-col justify-center">
                      <h4 className="text-xl font-bold text-white mb-6 text-center">Event Highlights</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {event.highlights.map((highlight, index) => (
                          <div 
                            key={index}
                            className="bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 text-center hover:bg-red-600/30 transition-all duration-300"
                          >
                            <div className={`w-12 h-12 bg-gradient-to-r ${event.gradient} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-red-300 text-sm font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        
        <div className="text-center">
          <Link 
            to="/events" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/25"
          >
            View All Events
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;