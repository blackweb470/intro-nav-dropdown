/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        "80%": "80%",
        "50%": "50%"
      },
      spacing: {
        "30rem": "36rem",
      },
      fontFamily: {
        "popins": "'Poppins', sans-serif"
      },
      colors: {
        "White":" hsl(0, 0%, 98%)",
        "almost-black": "hsl(0, 0%, 8%)",
        "almost-grey": "hsl(0, 0%, 41%)",
      }
    },
  },
  plugins: [],
}

