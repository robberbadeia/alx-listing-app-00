import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b border-gray-300">
      {/* Logo Section */}
      <div>
        <img src="" alt="Logo" />
      </div>
      {/* Navigation Section */}
      <nav className="flex gap-6">
        <button className="text-gray-700 hover:underline">Rooms</button>
        <button className="text-gray-700 hover:underline">Mansion</button>
        <button className="text-gray-700 hover:underline">Country Side</button>
        <button className="text-gray-700 hover:underline">Beach Front</button>
      </nav>
      {/* Search Bar Section */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search for accommodation..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
        />
        <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
          Search
        </button>
      </div>
      {/* User Actions Section */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
          Sign In
        </button>
        <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
