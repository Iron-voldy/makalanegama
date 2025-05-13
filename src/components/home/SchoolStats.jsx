// src/components/home/SchoolStats.jsx
import React from 'react';
import AnimatedSection from '../common/AnimatedSection';

const SchoolStats = () => {
  const features = [
    { 
      id: 1, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), 
      title: "Academic Excellence", 
      description: "Our rigorous curriculum ensures students receive a world-class education with consistently high examination results." 
    },
    { 
      id: 2, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
        </svg>
      ), 
      title: "Modern Facilities", 
      description: "Our campus features state-of-the-art classrooms, science labs, computer centers, and sports facilities." 
    },
    { 
      id: 3, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ), 
      title: "Experienced Faculty", 
      description: "Our experienced and dedicated teachers nurture academic growth and character development in every student." 
    },
    { 
      id: 4, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      title: "Global Perspective", 
      description: "We prepare students for global challenges through international collaborations and modern teaching approaches." 
    }
  ];
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-maroon-100 text-maroon-700 mb-4">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Shaping Future Leaders</h2>
          <div className="w-20 h-1.5 bg-maroon-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our comprehensive approach to education focuses on academic excellence, character development, and well-rounded growth.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.id} 
              className="p-6 bg-white rounded-xl border border-gray-100 hover:border-maroon-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-maroon-50 w-16 h-16 rounded-lg flex items-center justify-center text-maroon-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolStats;