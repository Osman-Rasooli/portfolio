/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'splash': ['Splash', 'cursive'],
        'raleway': ['Raleway', 'sans-serif']
      },
      colors: {
        prime1: '#CDB4DB',
        prime2: '#FFC8DD',
        second1: '#BDE0FE',
        second2: '#A2D2FF',
        color1: '#091353',
        color2: '#9D84B7'
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    }
  },
  plugins: [],
}
