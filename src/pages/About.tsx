import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.jpg"

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">
            About Me
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Get to know a little more about me and my journey.
          </p>
        </div>

        {/* About Content */}
        <div className="mt-10 flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src={logo}
              alt="Your profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">
              Hi, I'm David
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm a <span className="font-semibold">full-stack web dev</span> with a passion for designing and building modern, user-friendly applications. My journey began when I [share a brief personal story or experience]. Since then, I've honed my skills in technologies like 
              <span className="text-blue-600 font-medium"> ReactJS, TailwindCSS</span>, and <span className="text-blue-600 font-medium">so on...</span>.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              My mission is to create impactful applications that solve real-world problems and bring value to users. Outside of coding, I enjoy singing and sports.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
              >
                Let's Connect
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"   
                className="ml-4 px-6 py-3 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
