import React from 'react';
import AchievementsGrid from '../components/achievements/AchievementsGrid';

const AchievementsPage = () => {
  return (
    <>
      <div className="pt-24 pb-12 bg-maroon-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white text-center">Achievements</h1>
        </div>
      </div>
      <AchievementsGrid />
    </>
  );
};

export default AchievementsPage;