import React, { useEffect } from "react";
import { useState } from "react";

const themes = [ 
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

const ThemeToggleComponent: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeToggle = (newTheme: string) => {
    if (newTheme === "system") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? (newTheme = "dark")
        : (newTheme = "light");
    } else if (newTheme === "rnd") {
      const indx = Math.floor(Math.random() * themes.length);
      newTheme = themes[indx];
    } else if (newTheme === "next") {
      const current: object = window.document.documentElement;
      const indx = themes.indexOf(current.getAttribute("data-theme"));
      const nextth = themes[indx + 1] || themes[0];
      newTheme = nextth;
    }
    setTheme(newTheme);
  };

  return (
    <>
      <li>
        <button className="btn" onClick={() => themeToggle("dark")}>
          Dark🌙
        </button>
      </li>
      <li>
        <button className="btn" onClick={() => themeToggle("halloween")}>
          Halloween🎃
        </button>
      </li>
      <li>
        <button className="btn" onClick={() => themeToggle("system")}>
          System🖥️
        </button>
      </li>
      <li>
        <button className="btn" onClick={() => themeToggle("rnd")}>
          Random theme👀
        </button>
      </li>
      <li>
        <button className="btn" onClick={() => themeToggle("next")}>
          Next theme⏭️
        </button>
      </li>
    </>
  );
};

export default ThemeToggleComponent;
