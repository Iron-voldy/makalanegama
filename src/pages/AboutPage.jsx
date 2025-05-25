import React from 'react';
import SchoolHistory from '../components/about/SchoolHistory';
import Mission from '../components/about/Mission';
import TeacherGrid from '../components/about/TeacherGrid';
import schoolInfo from '../data/schoolInfo';

const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <div className="pt-24 pb-12 page-header relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-red-600/20 border border-red-500/30 text-red-300 mb-4">
              Learn About Our School
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About <span className="gradient-text-red">{schoolInfo.shortName}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our rich history, mission, and the dedicated team that makes 
              {schoolInfo.name} a beacon of educational excellence in {schoolInfo.location.district}.
            </p>
          </div>
        </div>
      </div>
      
      <SchoolHistory />
      <Mission />
      <TeacherGrid />
    </>
  );
};

export default AboutPage;