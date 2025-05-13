import React from 'react';
import Hero from '../components/home/Hero';
import SchoolStats from '../components/home/SchoolStats';
import FeaturedEvents from '../components/home/FeaturedEvents';
import NewsSection from '../components/home/NewsSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <SchoolStats />
      <FeaturedEvents />
      <NewsSection />
    </>
  );
};

export default HomePage;