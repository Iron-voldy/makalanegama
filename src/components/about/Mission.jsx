import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import schoolInfo from '../../data/schoolInfo';

const Mission = () => {
  return (
    <section className="section-padding bg-gray-800">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Mission & <span className="gradient-text-red">Vision</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection className="card p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Mission</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              To provide quality education in {schoolInfo.details.medium} medium that nurtures intellectual growth, 
              fosters creativity, and develops strong character, preparing our {schoolInfo.details.students} students 
              to be responsible citizens who contribute positively to {schoolInfo.location.district} and Sri Lankan society.
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="card p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Vision</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              To be a premier educational institution in {schoolInfo.location.province}, recognized for academic excellence, 
              innovative teaching methodologies, and holistic development of students who are equipped with modern skills 
              including ICT capabilities to face global challenges.
            </p>
          </AnimatedSection>
        </div>

        {/* School Performance Section */}
        <AnimatedSection className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Academic Performance</h3>
            <p className="text-gray-300">Our commitment to excellence reflected in O/L examination results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(schoolInfo.performance.subjects).map(([subject, score]) => (
              <div key={subject} className="card p-4 text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">{score}</div>
                <div className="text-sm text-gray-400 capitalize">{subject}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Mission;