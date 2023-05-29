/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'link' : "#7a8897",
        'desarrolloGlobal' : "#2b48b6"
      },
      backgroundColor: {
        'gris' : "#f0f0f0"
      },
      backgroundImage: {
        'fondo-principal' : "url('/img/fondo-principal.webp')"
      }
    },
  },
  plugins: [],
}
