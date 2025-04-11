/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2ec2b0',
        secondary: '#9B51E0',
        accent: '#00AEEF',
        darkbg: '#1e1e1e',
        darkcard: '#2a2a2a',
      },
      boxShadow: {
        'card': '0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 5px 15px rgba(0, 0, 0, 0.2)',
        'dark-card': '0 4px 10px rgba(255, 255, 255, 0.1)',
      },
      textShadow: {
        'neon-light': '0 0 5px #1fb6e0, 0 0 10px #33c5f4, 0 0 15px #66d3ff',
        'neon-dark': '0 0 10px #2ec2b0, 0 0 20px #2ec2b0, 0 0 40px #2ec2b0',
      },
    },
  },
  plugins: [
    // Add a plugin for text shadow
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon-light': {
          textShadow: '0 0 5px #1fb6e0, 0 0 10px #33c5f4, 0 0 15px #66d3ff',
        },
        '.text-shadow-neon-dark': {
          textShadow: '0 0 10px #2ec2b0, 0 0 20px #2ec2b0, 0 0 40px #2ec2b0',
        },
      }
      addUtilities(newUtilities)
    },
  ],
  darkMode: 'class', // Use 'class' for theme toggling instead of media queries
}