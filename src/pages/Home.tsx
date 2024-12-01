import React from "react";
import { Link } from "react-router-dom";
import reactlogo from "../img/reactlogo.png";
import tailwindlogo from "../img/tailwindlogo.png";
import tslogo from "../img/tslogo.png";
import nodelogo from "../img/nodelogo.jpg";
import taurilogo from "../img/taurilogo.png";
import rustlogo from "../img/rustlogo.png";
import cpplogo from "../img/cpplogo.png";
import electronlogo from "../img/electronlogo.png"
import bulmalogo from "../img/bulmalogo.png"
import bootstraplogo from "../img/bootstraplogo.jpg"


const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-20">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Hi, I'm <span className="text-yellow-300">David</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              A passionate <span className="font-bold">full-stack web dev</span>{" "}
              specializing in building modern, user-friendly web applications.
            </p>
            <div className="mt-6">
              <Link
                to="/indev"
                className="px-6 py-3 bg-yellow-300 text-gray-800 font-semibold rounded-md shadow-md hover:bg-yellow-400 transition"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="ml-4 px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-600 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Content (Illustration/Image) */}
          <div className="mt-10 md:mt-0">
            <img
              src="https://via.placeholder.com/500x400.png?text=My+Photo+or+Illustration"
              alt="My Photo or Work Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 mt-2">
            A quick overview of my technical toolbox.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={reactlogo} alt="React" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">ReactJS</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={tailwindlogo} alt="TailwindCSS" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">TailwindCSS</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={tslogo} alt="TypeScript" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">TypeScript</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={nodelogo} alt="Node.js" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">Node.js</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={taurilogo} alt="Node.js" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">Tauri</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={rustlogo} alt="Node.js" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">Rust</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={cpplogo} alt="Node.js" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">C++</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={electronlogo} alt="Node.js" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">Electron</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={bootstraplogo} alt="Node.js" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">Bootstrap</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
              <img src={bulmalogo} alt="Node.js" className="mx-auto" />
              <p className="mt-4 text-gray-800 font-semibold">Bulma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} David Balishyan. All rights reserved.  
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="https://github.com/DavidBalishyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.486 2 12.019c0 4.426 2.867 8.184 6.839 9.505.5.09.682-.217.682-.483v-1.699c-2.781.605-3.369-1.343-3.369-1.343-.454-1.152-1.11-1.459-1.11-1.459-.909-.625.07-.612.07-.612 1.004.071 1.533 1.032 1.533 1.032.892 1.534 2.34 1.091 2.908.833.092-.652.35-1.091.636-1.342-2.22-.255-4.555-1.117-4.555-4.971 0-1.098.392-1.995 1.033-2.698-.103-.255-.448-1.285.099-2.678 0 0 .84-.27 2.75 1.028a9.557 9.557 0 012.504-.338 9.54 9.54 0 012.503.338c1.91-1.299 2.75-1.028 2.75-1.028.548 1.393.202 2.423.1 2.678.642.703 1.033 1.6 1.033 2.698 0 3.864-2.336 4.713-4.562 4.965.36.31.68.921.68 1.856v2.753c0 .268.18.577.688.481A10.01 10.01 0 0022 12.019C22 6.486 17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4zm5.5 12H7V10h2.5v6zm-1.25-7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM17 16h-2.5v-2.75c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25V16H10V10h2.5v.75C13 10 15 11 15 13.25V16z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;