import React from "react";
import { Link } from "react-router-dom";
import error from "../img/error.png";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="text-center">
        {/* Error Image */}
        <img
          src={error}
          alt="Page Not Found Illustration"
          className="mx-auto max-w-xs md:max-w-md rounded-lg shadow-lg"
        />
        
        {/* Error Message */}
        <p className="text-2xl md:text-3xl font-bold text-ey mt-4">
          Oops! Page Not Found
        </p>
        <p className="text-base-content mt-2">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <div className="mt-6">
          <Link to="/" className="btn btn-warning btn-lg">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
