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
        450: "#353535",
        500: "#444444",
        600: "#555555",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
};
