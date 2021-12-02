const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whit:"#F2F4F9",
        lightBlu:"#ADC9FE",
        lightestBlu:"#E6F5FF",
        blac:"#070809",
        darkBlu:"#4171E5",
        gre:"#54575B",
        darkOrang:"#FF5349",
        darkOrang25:"#FF534940",
        blackBlue:"#000010",

        yel:"#FFDF00",
        gree:"#10CF40",
        re:"#CD0010",
        purpl:"#8000A3",
        orang:"#F86E25",

        lightYel2:"#FEF8EB",
        lightYel1:"#F9FFB333",

        lightBlu20:"#ADC9FE33",
        lightBlu30:"#ADC9FE4D",

        lightRed40:"#FFAFAD66",
        lightRed30:"#FFAFAD4D",

        whit80:"#F2F4F9CC",
        darkBlu80:"#4171E5CC",
        darkBlue80:"#08109ACC",

        whit85:"#F2F4F9D9",
        darkBlu85:"#4171E5D9",
        darkBlue85:"#0810C1D9"
      },
      fontFamily:{
        camp: ['Bangers'],
        title_1:['Akaya Kanadaka', 'cursive'],
        title_2:['Kanit', 'sans-serif'],
        title_3:['Lora', 'serif']
      },
      minHeight:{
        'new-collab-experience':'400px',
        'user-details-card':'145px',
        'collab-exp-card':'132px'
      },
      minWidth:{
        'post-feed':'300px',
        'new-collab-experience':'400px'
      },
      maxWidth:{
          'post-feed':'800px',
          'comment-section':'750px'
      },
      maxHeight:{
      },
      height:{
        'avatar-dp':'100px',
        'avatar-dp-small':'70px',
        'avatar-display-home-larger':'660px',
        'avatar-display-home-large':'600px',
        'avatar-display-home':'480px',
        'svg-icon-small':'25px',
        'svg-icon':'40px',
        'home-title-small':'108px',
        'home-title':'132px'
      },
      width:{
        'avatar-dp':'100px',
        'avatar-dp-small':'70px',
        'post':'350px',
        'avatar-display-home-larger':'550px',
        'avatar-display-home-large':'500px',
        'avatar-display-home':'400px',
        'svg-icon-small':'25px',
        'svg-icon':'40px',
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
    zIndex:{
      '-1': -1,
      '-10': -10,
      '-20': -20,
      '-30': -30
    },
    screens:{
      'small':{'min': '700px', 'max': '1099px'},
      'small_l':{'min':'700px'},
      'medium':{'min': '1100px', 'max': '1599px'},
      'medium_l':{'min':'1100px'},
      'large':{'min': '1600px'},

      // Only for Profile Page
      'small_profile_l':{'min':'840px'},
      'small_profile': {'min': '840px', 'max':'1249px'},
      'medium_profile_l':{'min': '1250px'},
      'medium_profile':{'min': '1250px', 'max': '1599px'},
      'larger_profile':{'min':'1750px'},

      ...defaultTheme.screens
    },
    boxShadow:{
      'glow_b':'-4px -4px 6px 3px rgba(31, 81, 255, 0.2)',
      'glow_db':'3px 3px 2px 1px rgba(0,0,105,0.1)',
      'glow_b_in':'0px 0px 180px 80px inset rgba(31, 81, 255, 0.1)',
      'glow_sb1':'0px 0px 10px 5px inset rgba(4,217,255,0.1)',
      'glow_sb2':'0px 0px 6px 3px inset rgba(4,217,255,0.3)',

      'glow_r1':'0px 0px 10px 5px inset rgba(255,83,73,0.1)',
      'glow_r2':'0px 0px 6px 3px inset rgba(255,83,73,0.3)',
      'glow_r_in':'0px 0px 180px 80px inset rgba(249,255,179,0.4)',
      'glow_y_in':'0px 0px 80px 40px inset rgba(255,223,0,0.2)',
      'glow_y':'0px 3px 4px 2px rgba(255,223,0,0.1)',

      ...defaultTheme.boxShadow
    },
    blur:{
      'custom': '25px',
      ...defaultTheme.blur
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
