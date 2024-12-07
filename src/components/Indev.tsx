import React from "react";
import indev from "../img/indev.jpg";
import { Link } from "react-router-dom";

const Indev: React.FC = () => {
  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* Illustration */}
        <div className="w-64 mx-auto mb-6">
          <img
            src={indev}
            alt="Under Development Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Message */}
        <h1 className="text-4xl font-bold text-ey mb-4">
          Excuse Me, This Page is Still under development 🚧
        </h1>
        <p className="text-base-content text-lg mb-6 leading-relaxed">
          We're working hard to get this page ready for you! In the meantime,
          feel free to explore other parts of the website or come back later to
          see the updates.
        </p>

        {/* Buttons */}
        <div className="space-x-4">
          <Link to="/" className="btn btn-warning">
            Go Back Home
          </Link>
          <Link to="/contact" className="btn btn-outline btn-white">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Indev;
