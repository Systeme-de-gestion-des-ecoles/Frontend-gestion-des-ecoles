/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bleuFonce: '#0B3464',
        orange: '#F5A623',
        grisClaire: '#f3f4f6',
        darkNoir: '#111827',
      },
      fontFamily: {
        linkedin: ['"Segoe UI"', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      // Ajoutez cette partie pour les gradients
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}