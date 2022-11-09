/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1.2': '5px',
        '2.2': '9px',
        '4.5': '18px',
        '9.5': '38px',
        '55': '55px',
        '29': '29px',
        '120': '100px',
        '138': '128px',
        '148': '148px',
        '110': '110px',
        '160': '160px',
        'pageLeft': '125px',
        '272': '272px',
        '290': '290px'
      },
      colors: {
        // primary: '',
        primary: {
          DEFAULT: '#7152EB',
          '300': 'rgba(113, 82, 235, 0.3)'
        },
        danger: 'rgba(255, 91, 79, 1)',
        primaryDark: '#4715D7',
        primaryLight: '#E9E3FF',
        secondary: '#403DED',
        secondaryLight: '#D9BBFF',
        pink: '#BF8DFF',
        lightGray: '#7C859C',
        primaryBlue: '#2A6CFB',
        primaryOrange: '#F6A429',
        lightWhite: '#F3F5F7',
        primaryWhite: {
          300: '#F5F7F9'
        },
        darkWhite: '#EBE7FF',
        textGray: {
          DEFAULT: 'rgba(99, 99, 99, 1)',
          '400': 'rgba(192, 184, 171, 1)'
        },
        textPrimaryDark: '#25335A',
        textBlue: '#0671E0',
      },
      borderRadius: {
        '10': '10px',
        '7': '7px',
        '20': '20px',
      },
      fontSize: {
        '21': '21px',
        '42': '42px'
      },
      maxWidth: {
        '840': '840px',
        '567': '567px'
      },
      zIndex: {
        '5000': 5000
      }
    },
  },
  plugins: [],
}
