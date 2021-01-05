module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Nunito: "Nunito Sans",
      },
      colors: {
        "dk-blue": "#2b3945",
        "dk-bg": "#202c37",
        "lg-text": "#111517",
        "lg-inp": "#858585",
        "lg-bg": "#fafafa",
      },
      boxShadow: {
        sm: "0 0 8px #2222221f",
        new: "0 0 8px #1d1d1dcc",
      },
    },
  },
  variants: {},
  plugins: [],
};
