/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poiret One "],
        sans: ["poppins", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        bg: {
          400: "#0D1321",
        },

        main: {
          400: "#c72c41",
        },

        white: {
          400: "#ECE9E9",
        },
      },
    },
  },
  plugins: [],
};
