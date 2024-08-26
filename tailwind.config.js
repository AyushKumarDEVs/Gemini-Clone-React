/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      width:{
        imagewidth:"2 vmin"
      },
      height:{
        imageheight:"2 vmin"
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}