/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      lightPrimary: {
        400: "#EEEEEE",
        200: "#bdc3c7",
      },

      lightPrimaryText: {
        400: " #222831",
      },

      darkPrimary: {
        400: "#222831",
      },
      darkPrimaryText: {
        400: "#EEEEEE",
      },

      lightSecondry: {
        400: "#EA1179",
      },

      darkSecondry: {
        400: "#EA1179",
      },
    },

    extend: {},
    fontFamily: {
      headings: ["poppins", "roboto", "sans-serif"],
    },
  },
  plugins: [],
};
