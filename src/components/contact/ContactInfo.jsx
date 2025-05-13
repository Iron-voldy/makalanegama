import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-maroon-100 rounded-full p-3 mr-4">
            <svg className="w-6 h-6 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Address</h4>
            <p className="text-gray-600">123 School Avenue, Colombo, Sri Lanka</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-maroon-100 rounded-full p-3 mr-4">
            <svg className="w-6 h-6 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Phone</h4>
            <p className="text-gray-600">+94 123 456 7890</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-maroon-100 rounded-full p-3 mr-4">
            <svg className="w-6 h-6 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
            <p className="text-gray-600">info@srilankaschool.edu</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-maroon-100 rounded-full p-3 mr-4">
            <svg className="w-6 h-6 text-maroon-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Office Hours</h4>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;