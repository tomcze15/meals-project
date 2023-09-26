/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scaleUpCenter: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        scaleDownCenter: {
          "0%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
    animation: {
      scaleUpCenter: "scaleUpCenter 0.3s ease-in-out forwards",
      scaleDownCenter: "scaleDownCenter 0.3s ease-in-out forwards",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
