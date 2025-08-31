import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-10 ">
      <div className="max-w-4xl text-center text-white">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold  mb-6">
          About <span className="text-green-800">Our Application</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl  leading-relaxed mb-10">
          This User Management Application helps you manage users efficiently.  
          It allows you to add, edit, view, and delete user information in a clean and organized way.  
          Our goal is to make **user handling easy and intuitive** for developers and businesses.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              🚀 Fast & Secure
            </h3>
            <p className="text-gray-600">
              Built with modern technology ensuring quick response and data security.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              🎨 User-Friendly
            </h3>
            <p className="text-gray-600">
              A simple and clean interface designed for better user experience.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              ⚡ Dynamic Features
            </h3>
            <p className="text-gray-600">
              Add, update, delete, and search users with ease and flexibility.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
