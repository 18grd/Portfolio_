/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Update this path based on where your files are located
  ],
  theme: {
    extend: {
      animation: {
        fadeInSlideUp: 'fadeInSlideUp 1s ease-out', // Custom animation name and duration
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
