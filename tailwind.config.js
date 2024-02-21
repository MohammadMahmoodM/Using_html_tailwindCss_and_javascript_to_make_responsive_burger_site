/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      colors: {
        primaryColor: "#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: "#FFCC00",
        paragraphColor: "#c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        darkColorLight: "#171717"
      },
      keyframes: {
        movee: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        'myAnimation': 'movee 3s linear infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem"
     }
    }
  },
  plugins: [],
}

