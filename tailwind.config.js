/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        myIndigo: '#333d4b',
        myBlue: '#0D4C92',
        myGray: '#F0F1F3',
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        88: '22rem',
        104: '26rem',
        112: '28rem',
        128: '32rem',
        mobileScreen: 'calc(var(--vh, 1vh) * 100)',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(-30%)',
            animationTimingFunction: 'cubic-bezier(0.5,0,0,0)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0.5,0,0,0)',
          },
        },
      },
      animation: {
        'bounce-slow': 'bounceSlow 1.5s infinite',
      },
    },
  },
  plugins: [],
};
