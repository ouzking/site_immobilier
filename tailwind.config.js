/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",                  // Fichier racine
    "./src/**/*.{js,ts,jsx,tsx}",    // Tous tes fichiers React/TSX
    "./src/components/**/*.{js,ts,jsx,tsx}", // Tes composants
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

