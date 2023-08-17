/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      bellefair: "'Bellefair', serif",
      barlow: "'Barlow Condensed', sans-serif",
    },
  },
  plugins: [],
};
