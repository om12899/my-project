/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#addcca",
        "light-blue": "#addcca",
        "light-gray": "#f7f8f3",
        "light-green": "#aade87",
        "dark-gray": "#232323",
      },
    },
  },
  plugins: [],
};
