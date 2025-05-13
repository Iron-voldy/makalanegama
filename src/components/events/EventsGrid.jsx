import React from 'react';
import EventCard from './EventCard';
import AnimatedSection from '../common/AnimatedSection';

const EventsGrid = () => {
  // This would typically come from a data file or API
  const events = [
    {
      id: 1,
      title: "Annual Sports Meet",
      category: "Sports",
      date: "June 15, 2025",
      location: "School Grounds",
      image: "/assets/images/placeholder/sports.jpg",
      description: "Join us for our annual sports competition featuring athletics, cricket, netball, and more!"
    },
    {
      id: 2,
      title: "Science Exhibition",
      category: "Academic",
      date: "July 10, 2025",
      location: "School Auditorium",
      image: "/assets/images/placeholder/science.jpg",
      description: "Explore innovative projects and experiments created by our talented students."
    },
    {
      id: 3,
      title: "Cultural Day",
      category: "Cultural",
      date: "August 5, 2025",
      location: "School Grounds",
      image: "/assets/images/placeholder/cultural.jpg",
      description: "Experience the rich cultural heritage of Sri Lanka through performances, food, and art."
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      category: "Meeting",
      date: "September 12, 2025",
      location: "Classrooms",
      image: "/assets/images/placeholder/meeting.jpg",
      description: "Discuss your child's progress with teachers and get insights into their academic performance."
    },
    {
      id: 5,
      title: "Career Guidance Seminar",
      category: "Workshop",
      date: "October 8, 2025",
      location: "School Auditorium",
      image: "/assets/images/placeholder/career.jpg",
      description: "Learn about different career paths and opportunities from industry professionals."
    },
    {
      id: 6,
      title: "Annual Prize Giving",
      category: "Ceremony",
      date: "November 20, 2025",
      location: "School Auditorium",
      image: "/assets/images/placeholder/ceremony.jpg",
      description: "Celebrating the academic and extra-curricular achievements of our students."
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our school's events, activities, and important dates.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <AnimatedSection key={event.id}>
              <EventCard event={event} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;