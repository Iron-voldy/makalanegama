import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-9xl font-bold text-maroon-700">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" className="bg-maroon-700 hover:bg-maroon-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
          Return to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;