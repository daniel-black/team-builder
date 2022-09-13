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

    },
  },
  plugins: [],
}
