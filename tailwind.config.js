/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'smoke' : '#cfcfcf',
        'silver' : '#6f6f6f',
      },
      boxShadow: {
        'footer': '0 -7px 17px -3px rgba(0 0 0 / 0.3)',
        'header': '0 7px 17px -3px rgba(0 0 0 / 0.3)'
      },
      screens :{
        'xsm' : '200px',
      }
    },
  },
  plugins: [],
}

/* 
'header' : '0 4px 2px -2px rgba(0 0 0 / 0.3)'
 */