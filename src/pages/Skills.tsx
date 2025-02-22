import React from "react";
import bulmalogo from "../img/bulmalogo.png";
const Skills: React.FC = () => {
    const skills = [
        { img: "https://iconlib.onrender.com/icon/js", name: "JavaScript" },
        { img: "https://iconlib.onrender.com/icon/TypeScript", name: "TypeScript" },
        { img: "https://iconlib.onrender.com/icon/React-Dark", name: "React" },
        { img: "https://iconlib.onrender.com/icon/html", name: "HTML" },
        { img: "https://iconlib.onrender.com/icon/css", name: "CSS" },  
        { img: "https://iconlib.onrender.com/icon/Rust", name: "Rust" },
        { img: "https://iconlib.onrender.com/icon/cpp", name: "C++" },
        { img: "https://iconlib.onrender.com/icon/Python-Dark", name: "Python"},
        { img: "https://iconlib.onrender.com/icon/PHP-Dark", name: "Php" },
        { img: "https://iconlib.onrender.com/icon/Sass", name: "SCSS/SASS" },
      ];

      const editors: any[] = [
        { img: "https://iconlib.onrender.com/icon/VSCode-Dark", name: "VS Code" },
        { img: "https://iconlib.onrender.com/icon/WebStorm-Dark", name: "WebStorm" },
        { img: "https://iconlib.onrender.com/icon/NeoVim-Dark", name: "NeoVim" },
        { img: "https://iconlib.onrender.com/icon/VIM-Dark", name: "Vim" },
        { img: "https://iconlib.onrender.com/icon/PhpStorm-Dark", name: "PhpStorm" },
        { img: "https://iconlib.onrender.com/icon/VisualStudio-Dark", name: "Visual Studio" },
        { img: "https://iconlib.onrender.com/icon/Sublime-Dark", name: "Sublime Text" },
        { img: "https://iconlib.onrender.com/icon/PyCharm-Dark", name: "PyCharm" },
      ];

      const tech: any[] = [
        { img: "https://iconlib.onrender.com/icon/express-dark", name: "Express.js" },
        { img: "https://iconlib.onrender.com/icon/Svelte", name: "SvelteKit/Svelte" },
        { img: "https://iconlib.onrender.com/icon/NextJS-Dark", name: "Next.js" },
        { img: "https://iconlib.onrender.com/icon/Pnpm-Dark", name: "pnpm" },
        { img: "https://iconlib.onrender.com/icon/NodeJS-Dark", name: "Node.js" },
        { img: "https://iconlib.onrender.com/icon/bun-dark", name: "Bun" },
        { img: "https://iconlib.onrender.com/icon/deno-Dark", name: "Deno" },
        { img: "https://iconlib.onrender.com/icon/Vite-Dark", name: "Vite" },
        { img: "https://iconlib.onrender.com/icon/Tauri-Dark", name: "Tauri" },
        { img: "https://iconlib.onrender.com/icon/MySQL-Dark", name: "MySQL" },
        { img: "https://iconlib.onrender.com/icon/p5js", name: "p5*js" },
        { img: "https://iconlib.onrender.com/icon/figma-dark", name: "Figma" },
        { img: "https://iconlib.onrender.com/icon/Linux-Dark", name: "Linux" },
        { img: "https://iconlib.onrender.com/icon/Redux", name: "Redux" },
        { img: "https://iconlib.onrender.com/icon/Remix-Dark", name: "Remix" },
        { img: "https://iconlib.onrender.com/icon/Vercel-Dark", name: "Vercel" },
        { img: "https://iconlib.onrender.com/icon/ThreeJS-Dark", name: "ThreeJs" },
        { img: "https://iconlib.onrender.com/icon/TailwindCSS-Dark", name: "TailwindCSS" },
        { img: "https://iconlib.onrender.com/icon/bootstrap", name: "Bootstrap" },
        { img: "https://iconlib.onrender.com/icon/MaterialUI-Dark", name: "MUI" },
        { img: "https://iconlib.onrender.com/icon/MongoDB", name: "MongoDB" },
        { img: "https://iconlib.onrender.com/icon/PostgreSQL-Dark", name: "PostgreSQL" },
        { img: "https://iconlib.onrender.com/icon/Pug-Dark", name: "Pug" },
        { img: "https://iconlib.onrender.com/icon/htmx-dark", name: "htmx" },
        { img: "https://iconlib.onrender.com/icon/Redis-Dark", name: "Redis" },
        { img: "https://iconlib.onrender.com/icon/SQLite", name: "SQLite" },
        { img: "https://iconlib.onrender.com/icon/docker", name: "Docker" },
        { img: "https://iconlib.onrender.com/icon/flask-dark", name: "Flask" },
        { img: bulmalogo, name: "Bulma" },
      ]
  return (
    <>
    <section id="skills" className="py-16 bg-base-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-gray-500 mt-2">Here is all of the skills I have *probobly*</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {skills.map((skill, idx) => (
              <div key={idx} className="card shadow-md bg-white">
                <div className="card-body items-center">
                  <img src={skill.img} alt={skill.name} className="w-16 mx-auto" />
                  <p className="mt-4 text-gray-800 font-semibold">{skill.name}</p>
                </div>
              </div>
            ))}
            </div>
            <br/><br/><br/><br/>
            <h2 className="text-3xl font-bold">Editors</h2>
            <p className="text-gray-500 mt-2">Here is all of the editors I use *probobly*</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {editors.map((skill, idx) => (
              <div key={idx} className="card shadow-md bg-white">
                <div className="card-body items-center">
                  <img src={skill.img} alt={skill.name} className="w-16 mx-auto" />
                  <p className="mt-4 text-gray-800 font-semibold">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
          <br/><br/><br/><br/>
            <h2 className="text-3xl font-bold">Technologies</h2>
            <p className="text-gray-500 mt-2">Some other technologies, that I use *probobly*</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {tech.map((skill, idx) => (
              <div key={idx} className="card shadow-md bg-white">
                <div className="card-body items-center">
                  <img src={skill.img} alt={skill.name} className="w-16 mx-auto" />
                  <p className="mt-4 text-gray-800 font-semibold">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   </>
  );
};

export default Skills;