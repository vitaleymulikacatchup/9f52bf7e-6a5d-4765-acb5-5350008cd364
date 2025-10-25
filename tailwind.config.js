/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'google-blue': '#1a73e8',
        'google-blue-hover': '#1557b0',
        'google-gray': '#5f6368',
        'google-light-gray': '#f8f9fa',
        'google-border': '#dadce0',
        'google-text': '#202124',
        'google-text-secondary': '#5f6368'
      },
      fontFamily: {
        'google': ['arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}