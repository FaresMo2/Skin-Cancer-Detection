/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{html,jsx}", "./components/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        sign: "#383838",
        bluegray900: "#263238",
        register: "#5F7D8B",
        icon: "#353535",
        primary: "#f6f9ff",
        secondary: "#ffffff",
        footer: "#f1f0f6",
        darkBtn: "#003266",
        lightBtn: "#33a1fd",
        para: "#6c757d",
      },
      height: {
        120: "30rem",
      },
      boxShadow: {
        "custom-light": "0 4px 8px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 8px 16px rgba(0, 0, 0, 0.3)",
        "custom-outline": "0 0 0 3px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
