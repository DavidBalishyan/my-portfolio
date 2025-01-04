import React from "react";
import { Link } from "react-router-dom";
import reactlogo from "../img/reactlogo.png";
import tailwindlogo from "../img/tailwindlogo.png";
import tslogo from "../img/tslogo.png";
import nodelogo from "../img/nodelogo.jpg";
import taurilogo from "../img/taurilogo.png";
import rustlogo from "../img/rustlogo.png";
import cpplogo from "../img/cpplogo.png";
import electronlogo from "../img/electronlogo.png";
import bulmalogo from "../img/bulmalogo.png";
import bootstraplogo from "../img/bootstraplogo.jpg";
import pylogo from "../img/pylogo.png";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="hero py-20">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* Right Content (Illustration/Image) */}
            <img
              src="https://via.placeholder.com/500x400.png?text=My+Photo+or+Illustration"
              alt="My Photo or Work Illustration"
              className="max-w-sm rounded-lg shadow-2xl"  
            />

            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold">
                Hi, I'm <span className="text-yellow-300">David</span>
              </h1>
              <p className="py-6">
                A passionate <span className="font-bold">full-stack web dev</span>{" "}
                specializing in building modern, user-friendly web applications.
              </p>
              <div>
                <Link to="/projects" className="btn btn-warning mr-4">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-outline btn-white">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-base-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          <p className="text-gray-500 mt-2">A quick overview of my technical toolbox.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {[
              { img: reactlogo, name: "ReactJS" },
              { img: tailwindlogo, name: "TailwindCSS" },
              { img: tslogo, name: "TypeScript" },
              { img: nodelogo, name: "Node.js" },
              { img: taurilogo, name: "Tauri" },
              { img: rustlogo, name: "Rust" },
              { img: cpplogo, name: "C++" },
              { img: pylogo, name: "Python"},
              { img: electronlogo, name: "Electron" },
              { img: bootstraplogo, name: "Bootstrap" },
              { img: bulmalogo, name: "Bulma" },
            ].map((skill, idx) => (
              <div key={idx} className="card shadow-md bg-white">
                <div className="card-body items-center">
                  <img src={skill.img} alt={skill.name} className="w-16 mx-auto " />
                  <p className="mt-4 text-gray-800 font-semibold">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-base-300 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} David Balishyan. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a
              href="https://github.com/DavidBalishyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
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
              className="text-gray-500 hover:text-white"
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
