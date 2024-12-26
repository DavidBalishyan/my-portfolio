import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-ey">About Me</h2>
          <p className="text-white mt-4 text-lg">
            Get to know a little more about me and my journey.
          </p>
        </div>

        {/* About Content */}
        <div className="mt-10 flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          <div className="avatar">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg">
              <img src={logo} alt="Your profile" />
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-ey">I'm David</h3>
            <p className="mt-4 text-white leading-relaxed">
              I'm a <span className="font-semibold">full-stack web dev</span> with a passion for designing and building modern, user-friendly applications. My journey began when I started learning programming. Since then, I've honed my skills in technologies like 
              <span className="text-ey font-medium"> ReactJS, TailwindCSS</span>, and <span className="text-ey font-medium">so on...</span>.
            </p>
            <p className="mt-4 text-white leading-relaxed">
              My mission is to create impactful applications that solve real-world problems and bring value to users. Outside of coding, I enjoy singing and sports.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <Link
                to="/contact"
                className="btn btn-warning"
              >
                Let's Connect
              </Link>
              <Link
                to="/resume"
                rel="noopener noreferrer"
                className="btn btn-outline btn-white"
              >
                View My Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  console.log("About.tsx");
};

export default About;
