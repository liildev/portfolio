/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },

      fontSize: {
        xl: "20px",
        lg: "18px",
        md: "16px",
        sm: "14px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "40px",
        "6xl": "64px",
        "2em": "2em",
        "2.2em": "2.2em",
        "18vmin": "18vmin",
      },

      lineHeight: {
        180: "180%",
        170: "170%",
        160: "160%",
        150: "150%",
        140: "140%",
        130: "130%",
        120: "120%",
        110: "110%",
      },

      colors: {
        red: "#ea0f1e",
        gray: "#888888",
        black: "#000000",
        white: "#ffffff",
        "dark-gray": "#666666",
        "light-gray": "#dddddd",
      },

      transitionTimingFunction: {
        "on-hover": "cubic-bezier(0.2, 0.6, 0.2, 1)",
      },

      screens: {
        sx: "360px",
        ss: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
