/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
  
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        raisinblack: '#272727',
        sunset: "#EFD09E",
        buff: "#D4AA7D",
        beige: "#D2D8B3",
        Lblue: "#90A9B7"
      },
    },
  },
  plugins: [],
}

