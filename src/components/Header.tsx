import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Real Estate Tech</h1>
          <div className="flex space-x-4">
            <a href="#opportunity" className="text-gray-600 hover:text-gray-900">Opportunity</a>
            <a href="#tech-tools" className="text-gray-600 hover:text-gray-900">Tech Tools</a>
            <a href="#how-to-start" className="text-gray-600 hover:text-gray-900">Get Started</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;