/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "500px", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 1s forwards",
        slideUp: "slideUp 1s forwards",
        slideDown2: "slideDown 3s forwards",
        slideUp2: "slideUp 2s forwards",
      },
      screens: {
        mb: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        roboto: ["Roboto"],
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};
