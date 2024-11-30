import React from "react";
import { Link } from "react-router-dom";
import error from "../img/error.png";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <img
          src={error}
          alt="Page Not Found Illustration"
          className="mx-auto max-w-xs md:max-w-md"
        />
        {/* <h1 className="text-9xl font-extrabold text-blue-600">404</h1> */}
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </p>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
