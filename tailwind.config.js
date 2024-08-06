/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#52ada2",
        "light-blue": "#52ada2",
        "light-gray": "#232323",
        "light-green": "#aade87",
        "dark-gray": "#232323",
        "off-white": "#fffff2",
      },
    },
  },
  plugins: [],
};
