/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      'sans':['ui-sans-serif']
    },
    fontSize: {
      '2xl': ['2rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      'xl':['20px',{fontWeight: '400',letterSpacing: '0.425px'}],
      base: ['20px'],
      sm: ['16px']
    },
    extend: {},
  },
  plugins: [],
}
