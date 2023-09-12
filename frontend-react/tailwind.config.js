/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      pc: { max: "1100px" },
      // => @media (max-width: 1535px) { ... }
      tb: { max: "768px" },
      // => @media (max-width: 1279px) { ... }
      tbs: { max: "550px" },

      ml: { max: "425px" },
      // => @media (max-width: 1023px) { ... }

      mm: { max: "375px" },
      // => @media (max-width: 767px) { ... }

      ms: { max: "320px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      maxWidth: {
        container: "87.5rem",
      },
      colors: {
        theme: "#6246EA",
        dark: "#2B2C34",
        gray: "#C0C0C0",
        dgray: "#9A9494",
        lgray1: "#EFF0F3",
        lgray2: "#E4E5E9",
      },
    },
  },
  plugins: [],
};
