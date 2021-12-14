module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      'logo': '0 0 0 10px #a58af7ad, inset 0 0 0 18px #111827'
    },
    extend: {
      fontFamily:{
        poppins: "'Poppins', san-serif"
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
