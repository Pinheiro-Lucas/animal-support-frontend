/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
            'DEFAULT': '#296d79',
            'card': '#c6e1e8'
          },
        'card': {
            'DEFAULT': '#c6e1e8',
            'secondary': '#d1f1da',
        },
        'text': '#313131',
      },
      dropShadow: {
        'navbar': '0px 2px 4px rgba(0, 0, 0, 0.5)',
        'card': '0px 7px 2px rgba(0, 0, 0, 0.25)',
        'card-selected': '0 2px 1px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
