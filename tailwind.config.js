/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          verdeOK: 'oklch(80% 0.18 136)',
          moradoOK: 'oklch(55.8% 0.288 302.321)',
        },
        dropShadow: {
          'glow-verde': '0 0 20px oklch(80% 0.18 136/0.7)',
        },
      },
    },
    plugins: [],
  }
  