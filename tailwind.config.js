/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // key becomes the class name suffix
        clashDisplay: ["var(--font-clashDisplay)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
