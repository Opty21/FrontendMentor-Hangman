/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [    "./src/**/*.{html,ts}",  ],
  theme: {
    fontFamily: {
      mouse: ["MouseMemoirs", "sans-serif"],
      noto: ["NotoSerif", "sans-serif"],
    },
    animation:{
      slideIn:'slideIn 1s ease-out 1 forwards'
    },
    extend: {
      keyframes:{
        slideIn:{
          '0%':{transform: 'translate(0px, 100px)',opacity:0},
          '100%':{transform: 'translate(0px, 0px)',opacity:1},

        }
      }

    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),

  ],
}

