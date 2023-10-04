/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {
      screens: {
        'exsm':'353px',
        'gm': '541px',
        'pm':'430px',
        'nm':'895px',
        'sm': '640px',
        'six':'700px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
         
        '2xl': '1536px',
        '3xl': '1736px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        // volkhov: ['Volkhov', 'serif'],
        popping: ['Poppins', 'sans-serif'],
        sofia: ['Sofia Sans', 'sans-serif'],
        Arimo: [ 'Arimo', 'sans-serif']

        
      

      },
  
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'ButtonShadow': ' 0px 18px 40px 0px rgba(255, 110, 107, 0.30)',
        'summery': '2px 2px 4px 0px rgba(0, 0, 0, 0.05), -2px -2px 4px 0px rgba(0, 0, 0, 0.05)'
      },
    },
  },
  plugins: [require("daisyui")],
}
