/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
        sans: ["poppins", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        bg: {
          400: "#0D1321",
        },

        main: {
          400: "#28B67E",
        },

        white: {
          400: "#ECE9E9",
        },
      },
    },
  },
  plugins: [],
};
