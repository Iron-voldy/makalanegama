import React from 'react';
import AnimatedSection from '../common/AnimatedSection';

const Mission = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center">
              To provide quality education that nurtures intellectual growth, fosters creativity, and develops character, preparing students to be responsible citizens who contribute positively to society.
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center">
              To be a premier educational institution recognized for academic excellence, innovative teaching methodologies, and holistic development of students who are equipped to face global challenges.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Mission;