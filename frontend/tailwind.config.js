const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whit:"#F2F4F9",
        lightBlu:"#ADC9FE",
        blac:"#070809",
        darkBlu:"#4171E5",
        gre:"#54575B",
        darkOrang:"#F86E25",
        orang:"#D59055",

        whit80:"#F2F4F9CC",
        darkBlu80:"#4171E5CC",
        darkBlue80:"#08109ACC",

        whit85:"#F2F4F9D9",
        darkBlu85:"#4171E5D9",
        darkBlue85:"#08109AD9"
      },
      fontFamily:{
        camp: ['Bangers']
      },
      minHeight:{
        'home-content':'75vh',
        'home-title':'20vh'
      }
    },
    flex:{
      '1': '1 1 0%',
       auto: '1 1 auto',
       initial: '0 1 auto',
       inherit: 'inherit',
       none: 'none',
       '2': '2 2 0%',
       '3': '3 3 0%',
    },
    screens:{
      'sm-custom':{'min': '300px', 'max': '767px'},
      ...defaultTheme.screens
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
