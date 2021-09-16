module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white:"#F2F4F9",
        lightBlue:"#ADC9FE",
        black:"#070809",
        darkBlue:"#4171E5",
        grey:"#54575B",
        darkOrange:"#F86E25",
        orange:"#D59055"
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
