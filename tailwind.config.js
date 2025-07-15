const { DEFAULT_CIPHERS } = require("tls");

module.exports = {
   content: [
    "./src/**/*.{html,ts,scss}",  // ✅ add scss if using Tailwind inside styles
    "./projects/**/*.{html,ts}",  // ✅ if you have a monorepo structure
  ],
  theme: {
    extend: {
      colors: {

        'color-dark': '#40274d',
        'color-grey': '#d0cfd0',
        beige: {
          light: '#e8ecd6',
          DEFAULT: '#b5b9a7',
          dark: '#6a6c61'
        },
        terracota: {
          100: '#fffafa',
          200: '#B85042'
        },
      },
      backgroundImage: {
        'hero-light': 'linear-gradient(360deg, #ffffff, #d0cfd0)',
        'hero-dark': 'linear-gradient(135deg, #b1b1bd, #16213e)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // override default
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  darkMode: 'class',
};
