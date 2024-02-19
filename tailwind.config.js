/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#E8C872",
        primary: "#637A9F",
        btncolor: "#FFF3CF"
      },
    }, 
  },
  plugins: [],
};
