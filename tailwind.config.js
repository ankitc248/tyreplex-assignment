/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#E32329",
      },
      fontSize: {
        xxs: "0.655rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        swipein: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        swipeinarrow: {
          "0%": { transform: "translateX(-200%) rotate(90deg)", opacity: 0 },
          "100%": { transform: "translateX(0) rotate(90deg)", opacity: 1 },
        },
        swipeup: {
          "0%": { transform: "translateY(10%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        swipeinnavbar: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "swipe-in": "swipein 0.15s ease forwards",
        "swipe-in-arrow": "swipeinarrow 0.15s ease forwards",
        "swipe-up": "swipeup 0.2s ease-out forwards",
        "swipe-in-navbar": "swipeinnavbar 0.15s ease forwards",
      },
      boxShadow: {
        left: "-4px 0 8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
