import React from 'react';
import EventsGrid from '../components/events/EventsGrid';

const EventsPage = () => {
  return (
    <>
      <div className="pt-24 pb-12 bg-maroon-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white text-center">Events</h1>
        </div>
      </div>
      <EventsGrid />
    </>
  );
};

export default EventsPage;