module.exports = {
  purge: ['./index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#1F2937',
      },
      borderColor: {
        'dark': '#4B5563',
      },
      boxShadow: {
        'dark': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}