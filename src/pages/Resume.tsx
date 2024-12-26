import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-base-200 to-base-300 min-h-screen p-8">
      {/* Header Section */}
      <div className="bg-base-100 shadow-2xl rounded-lg p-8 mb-8 text-white">  
        <h1 className="text-5xl font-extrabold text-center mb-4">Your Name</h1>
        <p className="text-center text-lg font-medium">
          Full-Stack Web Developer
        </p>
        <p className="text-center mt-4">
          Email:{" "}
          <a href="mailto:davidbalishyan@proton.me" className="link link-hover">
            davidbalishyan@proton.me
          </a>
          <br />
          Email:{" "}
          <a
            href="mailto:davidbalishya12@gmail.com"
            className="link link-hover"
          >
            davidbalishya12@gmail.com
          </a>
          <br />+

          Email:{" "}
          <a
            href="mailto:davidbalishyan.work@gmail.com"
            className="link link-hover"
          >
            davidbalishyan.work@gmail.com
          </a>
        </p>
        <p className="text-center">
          Phone:{" "}
          <a href="tel:+37477126556" className="link link-hover">
            +374 77-12-65-56
          </a>
        </p>
        <div className="flex justify-center mt-6 gap-4">
          <a
            href="https://github.com/DavidBalishyan"
            className="btn btn-primary"
          >
            GitHub
          </a>
          <a href="https://x.com" className="btn btn-outline btn-primary">
            X(twitter)
          </a>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="bg-base-100 shadow-2xl rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl text-primary font-semibold">Frontend Developer</h3>
          <p className="text-sm text-current">
            ABC Company | Jan 2022 - Present
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>
              Developed responsive web applications using React and TailwindCSS.
            </li>
            <li>Collaborated with the backend team to integrate APIs.</li>
            <li>Improved website performance by 20% through optimization.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">Web Developer Intern</h3>
          <p className="text-sm text-current">
            XYZ Company | Jun 2021 - Dec 2021
          </p>
          <ul className="list-disc ml-6 mt-4 text-base">
            <li>Assisted in building e-commerce platforms using ReactJS.</li>
            <li>
              Fixed bugs and implemented new features based on client
              requirements.
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-base-100 shadow-2xl rounded-lg p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div>
          <h3 className="text-xl font-semibold text-primary">
            Bachelor of Computer Science
          </h3>
          <p className="text-sm text-current">
            BeeOnCode academy || Erevan, Armenia || 2022 - Present
          </p>
          <p className="mt-4 text-base">
            Graduated with honors, specializing in web development and software
            engineering.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-base-100 shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-3 gap-6">
          <span className="badge badge-primary p-4 text-lg">ReactJS</span>
          <span className="badge badge-primary p-4 text-lg">Node.js</span>
          <span className="badge badge-primary p-4 text-lg">TailwindCSS</span>
          <span className="badge badge-primary p-4 text-lg">TypeScript</span>
          <span className="badge badge-primary p-4 text-lg">DaisyUI</span>
          <span className="badge badge-primary p-4 text-lg">Git</span>
          <span className="badge badge-primary p-4 text-lg">
            Responsive Design
          </span>
          <span className="badge badge-primary p-4 text-lg">
            Problem Solving
          </span>
          <span className="badge badge-primary p-4 text-lg">typescript</span>
          <span className="badge badge-primary p-4 text-lg">Rust</span>
          <span className="badge badge-primary p-4 text-lg">C++</span>
          <span className="badge badge-primary p-4 text-lg">Bootstrap css</span>
          <span className="badge badge-primary p-4 text-lg">Bulma css</span>
          <span className="badge badge-primary p-4 text-lg">Tauri</span>
          <span className="badge badge-primary p-4 text-lg">Electron js</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
