/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052cc',
          darkBlue: '#0043a4',
          bgBlack: '#000000',
          cardGray: '#121212',
          lightBlue: '#1a73e8'
        }
      }
    },
  },
  plugins: [],
}
