/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      // colors: {
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   'blue': '#1D1A39',
      //   'purple': '#451952',
      //   'tw-primary': '#ff49db',
      //   'tw-variant': '#E8BCB9',
      //   'tw-secondary': '#AE445A',
      //   'tw-accent': '#F39F5A',
      //   'gray-dark': '#273444',
      //   'gray': '#8492a6',
      //   'gray-light': '#d3dce6',
      // },
      // fontFamily: {
      //   sans: ['Graphik', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
      // },
        // spacing: {
      //   '8xl': '96rem',
      //   '9xl': '128rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  // prefix: 'om-',
  // important: true,
}

