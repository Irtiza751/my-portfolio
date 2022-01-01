module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter']
      },
      container: {
        center: true,
        padding: '2rem',
      },
      minHeight: {
        'screen/2': '50vh',
        'screen-8': '80vh',
        'screen-9': '90vh',
      }
    },
  },
  plugins: [],
}
