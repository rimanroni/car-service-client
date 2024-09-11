/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: '#FF3811',
        textColor: '#737373' 
      }
    },
  },
  plugins: [require('daisyui'),],
}