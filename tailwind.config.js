/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  themes: ["light", "dark", "cupcake"],

  plugins: [require("daisyui"), require("flowbite/plugin")],
};
