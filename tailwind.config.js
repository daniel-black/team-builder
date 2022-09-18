/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'popout': 'grow 0.4s linear'
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0.1)', opacity: '0.0', },
          '100%': { transform: 'scale(1)', opacity: '1.0' },
        }
      },
      colors: {
        'bug-light': '#3c9950',
        'bug-dark': '#1c4b27',
        'dark-light': '#595978',
        'dark-dark': '#040707',
        'dragon-light': '#62cad9',
        'dragon-dark': '#448a95',
        'electric-light': '#fafa72',
        'electric-dark': '#e2e32b',
        'fairy-light': '#e91368',
        'fairy-dark': '#961a45',
        'fighting-light': '#ef6239',
        'fighting-dark': '#994025',
        'fire-light': '#fd4b5a',
        'fire-dark': '#ab1f24',
        'flying-light': '#94b2c7',
        'flying-dark': '#4a677d',
        'ghost-light': '#906791',
        'ghost-dark': '#33336b',
        'grass-light': '#27cb50',
        'grass-dark': '#147b3d',
        'ground-light': '#a8702d',
        'ground-dark': '#6e491f',
        'ice-light': '#d8f0fa',
        'ice-dark': '#86d2f5',
        'normal-light': '#ca98a6',
        'normal-dark': '#75525c',
        'poison-light': '#9b69da',
        'poison-dark': '#5e2d89',
        'psychic-light': '#f71d92',
        'psychic-dark': '#a52a6c',
        'rock-light': '#8b3e22',
        'rock-dark': '#48190b',
        'steel-light': '#43bd94',
        'steel-dark': '#60756e',
        'water-light': '#85a8fb',
        'water-dark': '#1552e1'
      }
    },
  },
  plugins: [],
}
