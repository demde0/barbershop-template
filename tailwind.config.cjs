/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",   // black background
        secondary: "#ffffff", // white text
        accent: "#d1d5db"     // soft gray for borders/details
      }
    }
  },
  plugins: [],
};
