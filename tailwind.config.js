/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair:["Playfair display,serif"]
      },
      colors:{
        primary:"#ff8901",
        secondary:"#fb923c"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'3rem',
          lg:'4rem',
          xl:'5rem',
         ' 2xl':'5rem'

        },
      },
    },
  },
  plugins: [],
}