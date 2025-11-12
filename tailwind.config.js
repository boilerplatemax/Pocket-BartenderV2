/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-red': '#FF5733',
        'metallic-seaweed': '#0A7E8C',
        'onyx': '#36393B',
        'cultured': '#F7F7FF',
        'opera-mauve': '#B87BA0',
        'blue-jeans': '#5DADE2',
        'forest-green': '#228B22',
        'goldenrod': '#DAA520',
        'azure': '#007FFF',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in',
        'slideInLeft': 'slideInLeft 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
