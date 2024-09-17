/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"]
      },
      colors: {
        primary: '#ff8901',
        secondary: '#fb923c'
      },

      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem ',
        }
      }
    },
  },
  plugins: [],
}

