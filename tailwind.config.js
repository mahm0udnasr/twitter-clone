/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        twitter: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
      animation: {
        "spin-fast": "spin 0.5s linear infinite",
        'pulse-slow': 'pulse 2.3s linear infinite',
      },
      container: {
        center: true,
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1200px',
          '2xl': '1320px',
        },
      },
    },
  },
  plugins: [],
}

