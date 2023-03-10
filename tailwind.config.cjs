/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary:"#131315",
        secondary:"#242026",
        normal:"#fff",
        main:"#8f7cec",
        purple:"rgba(143, 124, 236, 0.7)",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
    
    screens: {
      xs:"480px",
      ss:"620px",
      sm:"768px",
      md:"1060px",
      lg:"1200px",
      xl:"1700px",
    },
  },
  plugins: [],
}
