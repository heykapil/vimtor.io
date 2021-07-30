const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "fade-in-down": {
          from: {
            opacity: "0",
            transform: "translateY(1em)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        wiggle: {
          "0%": {
            transform: "rotate(10deg)",
          },
          "25%": {
            transform: "rotate(-10deg)",
          },
          "50%": {
            transform: "rotate(20deg)",
          },
          "75%": {
            transform: "rotate(-5deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-in-out",
        wiggle: "wiggle 1s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
