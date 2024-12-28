/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        agrandir: ["Agrandir", "Arial", "sans-serif"],
        agrandirtb: ["AgrandirTextBold", "Arial", "sans-serif"],
        horizon: ["Horizon", "Arial", "sans-serif"],
      },
      animation: {
        customBounce: "custom-bounce 2s infinite",
      },
      keyframes: {
        "custom-bounce": {
          "0%, 100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in",
          },
        },
      },
    },  },
  plugins: [],
}

