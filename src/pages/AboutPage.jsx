import React from 'react';
import SchoolHistory from '../components/about/SchoolHistory';
import Mission from '../components/about/Mission';
import TeacherGrid from '../components/about/TeacherGrid';

const AboutPage = () => {
  return (
    <>
      <div className="pt-24 pb-12 bg-maroon-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white text-center">About Us</h1>
        </div>
      </div>
      <SchoolHistory />
      <Mission />
      <TeacherGrid />
    </>
  );
};

export default AboutPage;