import React from "react";
import indev from "../img/indev.jpg"
import { Link } from "react-router-dom";

const Indev: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* Illustration */}
        <div className="w-64 mx-auto mb-6">
          <img
            src={indev}
            alt="Under Development Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Message */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Excuse Me, This Page is Still in Development 🚧
        </h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          We're working hard to get this page ready for you! In the meantime, feel free to explore other parts of the website or come back later to see the updates.
        </p>

        {/* Buttons */}
        <div className="space-x-4">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
          >
            Go Back Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Indev;
