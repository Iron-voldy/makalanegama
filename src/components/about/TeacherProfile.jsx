import React from 'react';

const TeacherProfile = ({ teacher }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={teacher.image} alt={teacher.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
        <p className="text-maroon-700 mb-4">{teacher.position}</p>
        <p className="text-gray-600 mb-4">{teacher.bio}</p>
        <div className="flex space-x-4">
          {teacher.socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-maroon-700 transition-colors"
            >
              <span className="sr-only">{link.platform}</span>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;