import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-dark text-white shadow-lg">
      <div className="flex-1">
        {/* Logo */}
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="text-yellow-300">David</span> Balishyan
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-2">
        <Link to="/" className="btn btn-ghost normal-case">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost normal-case">
          About
        </Link>
        <Link to="/contact" className="btn btn-ghost normal-case">
          Contact
        </Link>
        <Link to="/projects" className="btn btn-ghost normal-case">
          Projects
        </Link>
        <Link  to="/indev" className="btn btn-ghost normal-case">
          Game
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-ghost md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start mt-3 space-y-1 bg-primary-focus p-3 rounded-lg shadow-lg">
          <Link to="/" className="btn btn-ghost w-full justify-start">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost w-full justify-start">
            About
          </Link>
          <Link to="/contact" className="btn btn-ghost w-full justify-start">
            Contact
          </Link>
          <Link to="/projects" className="btn btn-ghost w-full justify-start">
            Projects
          </Link>
          <Link to="/game" className="btn btn-ghost w-full justify-start">
            Game
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
