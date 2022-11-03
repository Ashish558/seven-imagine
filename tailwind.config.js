/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '4.5': '18px',
        '9.5': '38px',
        '55': '55px',
        '29': '29px',
        '148': '148px',
        '110': '110px',
        'pageLeft': '125px',
      },
      colors: {
        primary: '#7152EB',
        primaryDark: '#4715D7',
        primaryLight: '#E9E3FF',
        secondary: '#403DED',
        secondaryLight: '#D9BBFF',
        pink: '#BF8DFF',
        lightGray: '#7C859C',
        primaryBlue: '#2A6CFB',
        primaryOrange: '#F6A429',
        lightWhite: '#F3F5F7',
        darkWhite: '#EBE7FF',
        textGray: 'rgba(99, 99, 99, 1)',
        textPrimaryDark :'#25335A'
      },
      borderRadius:{
        '10': '10px',
        '7': '7px',
        '20': '20px',
      },
      fontSize:{
        '21': '21px'
      },
      maxWidth:{
        '840': '840px'
      }
    },
  },
  plugins: [],
}
