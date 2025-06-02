/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       colors: {
        bleuFonce: '#0B3464',       // Bleu foncé
        orange: '#F5A623',     // Orange
        grisClaire: '#f3f4f6',         // Gris clair
        darkNoir: '#111827',          // Presque noir
     },
      fontFamily: {
        linkedin: ['"Segoe UI"', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
   },
  },
  plugins: [],
}

