import React from 'react';

const AchievementCard = ({ achievement }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
          <span className="bg-maroon-100 text-maroon-700 px-3 py-1 rounded-full text-sm font-medium">
            {achievement.category}
          </span>
        </div>
        <p className="text-maroon-700 mb-4">{achievement.year}</p>
        <p className="text-gray-600">{achievement.description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;