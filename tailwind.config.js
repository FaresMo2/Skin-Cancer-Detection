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
    },
  },
  plugins: [],
};
