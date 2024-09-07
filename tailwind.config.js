// tailwind.config.js
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      height: {
        screen: "100vh",
      },
    },
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
  },

  plugins: [],
};
