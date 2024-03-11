/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: { max: "765px" },
        custom1: { max: "478px" },
        custom2: { max: "1022px" },
      },
    },
  },
  plugins: [],
};
