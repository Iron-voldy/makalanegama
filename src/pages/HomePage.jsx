import React from 'react';
import Hero from '../components/home/Hero';
import SchoolStats from '../components/home/SchoolStats';
import SchoolCarousel from '../components/home/SchoolCarousel';
import FeaturedEvents from '../components/home/FeaturedEvents';
import NewsSection from '../components/home/NewsSection';

const HomePage = () => {
  return (
    <div className="bg-gray-900">
      <Hero />
      <SchoolStats />
      <SchoolCarousel />
      <FeaturedEvents />
      <NewsSection />
    </div>
  );
};

export default HomePage;