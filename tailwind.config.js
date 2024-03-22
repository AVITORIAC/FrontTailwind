/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'sm': '600px'
        
        // => @media (min-width: 600px) { ... }
      },
      height: {
        'screenP': '80vh'},
      colors: {
        aprendiz: '#56B0FF',
        admin: '#007BC0',
        instrutor: '#419E98',
        gestor: '#37A264',
        fonte: '#007BC0',
        roxo: '#671761',
        home: '#B8D6FF',
        barraedit: '#B8D6FF',
        cardA1: '#56B0FF',
        cardA2: '#007BC0',
        cardA3: '#005587',
        cardV1: '#0E5B57',
        cardV2: '#54ABA5',
        cardV3: '#1A9C95',
        cardV4: '#147671',
      }
    },
  },
  plugins: [],
}

