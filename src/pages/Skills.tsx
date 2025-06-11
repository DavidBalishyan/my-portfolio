import React from "react";
import bulmalogo from "../img/bulmalogo.png";
const Skills: React.FC = () => {
    const skills = [
        { img: "https://skillicons.dev/icons?i=js", name: "JavaScript" },
        { img: "https://skillicons.dev/icons?i=ts", name: "TypeScript" },
        { img: "https://skillicons.dev/icons?i=react", name: "React" },
        { img: "https://skillicons.dev/icons?i=html", name: "HTML" },
        { img: "https://skillicons.dev/icons?i=css", name: "CSS" },  
        { img: "https://skillicons.dev/icons?i=rust", name: "Rust" },
        { img: "https://skillicons.dev/icons?i=cpp", name: "C++" },
        { img: "https://skillicons.dev/icons?i=python", name: "Python"},
        { img: "https://skillicons.dev/icons?i=php", name: "Php" },
        { img: "https://skillicons.dev/icons?i=sass", name: "SCSS/SASS" },
      ];

      const editors: any[] = [
        { img: "https://skillicons.dev/icons?i=vscode", name: "VS Code" },
        { img: "https://skillicons.dev/icons?i=webstorm", name: "WebStorm" },
        { img: "https://skillicons.dev/icons?i=vim", name: "NeoVim" },
        { img: "https://skillicons.dev/icons?i=vim", name: "Vim" },
        { img: "https://skillicons.dev/icons?i=phpstorm", name: "PhpStorm" },
        { img: "https://skillicons.dev/icons?i=visualstudio", name: "Visual Studio" },
        { img: "https://skillicons.dev/icons?i=sublime", name: "Sublime Text" },
        { img: "https://skillicons.dev/icons?i=pycharm", name: "PyCharm" },
      ];

      const tech: any[] = [
        { img: "https://skillicons.dev/icons?i=express", name: "Express.js" },
        { img: "https://skillicons.dev/icons?i=svelte", name: "SvelteKit/Svelte" },
        { img: "https://skillicons.dev/icons?i=nextjs", name: "Next.js" },
        { img: "https://skillicons.dev/icons?i=pnpm", name: "pnpm" },
        { img: "https://skillicons.dev/icons?i=nodejs", name: "Node.js" },
        { img: "https://skillicons.dev/icons?i=bun", name: "Bun" },
        { img: "https://skillicons.dev/icons?i=deno", name: "Deno" },
        { img: "https://skillicons.dev/icons?i=vite", name: "Vite" },
        { img: "https://skillicons.dev/icons?i=tauri", name: "Tauri" },
        { img: "https://skillicons.dev/icons?i=mysql", name: "MySQL" },
        { img: "https://skillicons.dev/icons?i=p5js", name: "p5*js" },
        { img: "https://skillicons.dev/icons?i=figma", name: "Figma" },
        { img: "https://skillicons.dev/icons?i=linux", name: "Linux" },
        { img: "https://skillicons.dev/icons?i=redux", name: "Redux" },
        { img: "https://skillicons.dev/icons?i=remix", name: "Remix" },
        { img: "https://skillicons.dev/icons?i=vercel", name: "Vercel" },
        { img: "https://skillicons.dev/icons?i=threejs", name: "ThreeJs" },
        { img: "https://skillicons.dev/icons?i=tailwind", name: "TailwindCSS" },
        { img: "https://skillicons.dev/icons?i=bootstrap", name: "Bootstrap" },
        { img: "https://skillicons.dev/icons?i=materialui", name: "MUI" },
        { img: "https://skillicons.dev/icons?i=mongodb", name: "MongoDB" },
        { img: "https://skillicons.dev/icons?i=postgresql", name: "PostgreSQL" },
        { img: "https://skillicons.dev/icons?i=pug", name: "Pug" },
        { img: "https://skillicons.dev/icons?i=htmx", name: "htmx" },
        { img: "https://skillicons.dev/icons?i=redis", name: "Redis" },
        { img: "https://skillicons.dev/icons?i=sqlite", name: "SQLite" },
        { img: "https://skillicons.dev/icons?i=docker", name: "Docker" },
        { img: "https://skillicons.dev/icons?i=flask", name: "Flask" },
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