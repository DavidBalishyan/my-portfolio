import React from "react";

const projects = [
  
  {
    title: "Quiz App",
    description: "A dynamic quiz application built with React.",
    image: "https://via.placeholder.com/400x300.png?text=Quiz+App",
    liveLink: "https://quizz-umber-xi.vercel.app",
    repoLink: "https://github.com/DavidBalishyan/quizz-react.git",
  },
  { 
    title: "Counter app",
    description: "A simple counter app buit in React.",
    image: "https://via.placeholder.com/400x300.png?text=E-Commerce+Website",
    liveLink: "https://counter-app-react-lyart-xi.vercel.app/",
    repoLink: "https://github.com/DavidBalishyan/counter-app-react.git",
  },
  {
    title: "Weather App",
    description: "A weather forecast app using a third-party API and modern UI design.",
    image: "https://via.placeholder.com/400x300.png?text=Weather+App",
    liveLink: "#",
    repoLink: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">My Projects</h2>
          <p className="text-gray-600 mt-4 text-lg">
            A collection of my recent work, showcasing my skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-4">{project.description}</p>
                <div className="mt-6 flex justify-between">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"   
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition"
                    >
                      GitHub Repo
                    </a>
                  )}    
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
