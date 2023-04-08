/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        'ph': {'raw': '(min-width: 1280px)'},
        'bar': {'raw': '(min-width: 1000px)'},
      },
    },
  },
  plugins: [],
}
