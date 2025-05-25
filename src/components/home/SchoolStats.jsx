import React from 'react';
import AnimatedSection from '../common/AnimatedSection';

const SchoolStats = () => {
  const features = [
    { 
      id: 1, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), 
      title: "Academic Excellence", 
      description: "Our rigorous curriculum ensures students receive world-class education with consistently high examination results." 
    },
    { 
      id: 2, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      title: "Modern Facilities", 
      description: "Our campus features state-of-the-art classrooms, science labs, computer centers, and sports facilities." 
    },
    { 
      id: 3, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ), 
      title: "Experienced Faculty", 
      description: "Our experienced and dedicated teachers nurture academic growth and character development in every student." 
    },
    { 
      id: 4, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      title: "Global Perspective", 
      description: "We prepare students for global challenges through international collaborations and modern teaching approaches." 
    }
  ];
  
  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold bg-red-600/20 border border-red-500/30 text-red-300 mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Shaping Future <span className="gradient-text-red">Leaders</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Our comprehensive approach to education focuses on academic excellence, character development, 
            and well-rounded growth through modern teaching methodologies.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.id} 
              className={`delay-${index * 100}`}
            >
              <div className="group h-full">
                <div className="bg-gray-700/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 h-full hover:border-red-500/40 hover:bg-gray-700/70 transition-all duration-300 transform hover:-translate-y-2">
                  {/* Icon */}
                  <div className="bg-gradient-to-r from-red-600 to-red-800 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolStats;