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
    title: "Counter App",
    description: "A simple counter app built in React.",
    image: "https://via.placeholder.com/400x300.png?text=E-Commerce+Website",
    liveLink: "https://counter-app-react-lyart-xi.vercel.app/",
    repoLink: "https://github.com/DavidBalishyan/counter-app-react.git",
  },
  {
    title: "Weather App",
    description:
      "A weather forecast app using a third-party API and modern UI design.",
    image: "https://via.placeholder.com/400x300.png?text=Weather+App",
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "Portfolio App",
    description: "The app, that you are in right now🤣",
    image: "https://via.placeholder.com/400x300.png?text=Portfolio+App",
    liveLink: "/",
    repoLink: "https://github.com/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-300">My Projects</h2>
          <p className="text-white mt-4 text-lg">
            A collection of my recent work, showcasing my skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
            >
              {/* Project Image */}
              <figure className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </figure>
              {/* Project Content */}
              <div className="card-body">
                <h3 className="card-title text-white">{project.title}</h3>
                <p className="text-white">{project.description}</p>
                <div className="card-actions justify-between mt-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-warning"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
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
