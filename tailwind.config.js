/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ["Metropolis"],
      },

      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
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
        red: {
          DEFAULT: "#ea0f1e",
        },
        gray: {
          DEFAULT: "#888888",
          100: "#dddddd",
          200: "#666666",
        },
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
