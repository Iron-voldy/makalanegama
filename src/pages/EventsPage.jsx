import React from 'react';
import EventsGrid from '../components/events/EventsGrid';

const EventsPage = () => {
  return (
    <>
      {/* Page Header */}
      <div className="pt-24 pb-12 page-header relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-red-600/20 border border-red-500/30 text-red-300 mb-4">
              School Calendar
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              School <span className="gradient-text-red">Events</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with our academic calendar, cultural programs, sports events, 
              and community activities throughout the year.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900">
        <EventsGrid />
      </div>
    </>
  );
};

export default EventsPage;