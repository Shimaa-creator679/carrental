/** @type {import('tailwindcss').Config} */
export default {

   darkMode: 'class',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary:"#ff8901",
        secondary:"#fb923c",
        menue:"#101826",
        dark:"#000000",
        gray:"#f1f5f9",
        white:"#ffffff",
        banner:"#1f2937",
        aboutdark:"#111111",
        blue:"#000735",
        aqua:"#00a59d"
      },
       boxShadow: {
        'white-glow': '0 0 10px white',
      },

      container:{
        center:true,
        padding:{
          DEFAULT :"2rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        },


      }
    },
  },
  plugins: [],
}