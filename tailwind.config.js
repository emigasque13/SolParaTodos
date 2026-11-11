/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta sobria: papel frío, tinta azul marino y un solo acento ocre.
        paper: '#F6F7F5',
        wash: '#E8ECF0', // fondo de ilustraciones
        ink: '#111A2B',
        night: '#0F1828', // footer
        blue: '#25477A', // paneles, enlaces, números
        slate: '#5A6578', // texto secundario
        line: '#DCE0E5', // líneas finas
        sun: '#C8901A', // acento solar (solo gráficos y rellenos, no texto)
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
