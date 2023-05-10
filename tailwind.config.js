/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      white: "#FFFFFF",
      blue: "#007CED",
      dark: "#222222",
      dark_light: "#252525",
      gray: {
        100: "#ffffffcc",
        200: "#ffffffb3",
        300: "#ffffff80",
        400: "#333333",
        500: "#444444",
        600: "#555555",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
