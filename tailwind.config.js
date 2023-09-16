/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        lightGreen : "#1ED760", 
        darkGreen  :"#1DB954", 
        blackfy: "#191414",

      }
    },
  },
  plugins: [],
}