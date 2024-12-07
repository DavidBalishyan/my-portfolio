/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths to your project structure
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#2563EBFF",
        "white": "#FFFFFFFF",
        "dark": "#191E24FF",
        "ey": "#FDE047FF",
        "wdark": "#1D232AFF",
        "green": "#007C00FF"
      }
    }, // Add customizations if needed
  },
  plugins: [
    require("daisyui"), // Add DaisyUI here
  ],
  daisyui: {
    themes: ["light", "dark"], // Add desired themes
  },
};
