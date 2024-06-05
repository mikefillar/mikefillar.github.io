/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins']
      },
      fontSize: {
        'altxl': '3.2rem'
      },
      animation: {
        'loop-scroll': 'loop-scroll 20s linear infinite'
      },
      keyframes: {
        'loop-scroll': {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        }
      },
      colors: {
        'color-body': '#F8F8F8'
      },
      screens: {
        'semilarge' : '900px'
      }
    },
  },
  plugins: [],
}