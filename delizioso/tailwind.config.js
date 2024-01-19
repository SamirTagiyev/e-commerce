/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        tinos: ["Tinos", "serif"]
      },
      colors: {
        primaryOrange: "#FF8A00",
        titleText: "#311F09",
        footerText: "#E3E2E0",
        lightGray: "#D0CCC7",
        financialTextDesc: "#5C4529",
        financialTextTitle: "#59442B",
        descriptionText: "#A08D76",
        mediumGray: "#C4C4C4",
        lightBrown: "#E1C39F",
        translucentBlue: "#3FBAFF1A",
        lightPurple: "#F3A7FF",
        paleGreen: "#10DDC44A",
        darkBackground: "#1B161D",
        primaryGreen: "#3FA72F",
        secondaryGreen: "#3FC66E",
        tertiaryGreen: "#4EA2D13D",
        mediumGreen: "#529067",
        darkGreen: "#657CF661",
        brown: "#9D6542",
        translucentBlueLight: "#A7C5FF40",
        darkRed: "#AC63F51A",
        paleGreen2: "#BEEDCE",
        mediumGrayLight: "#C4C4C41A",
        lightPurpleTranslucent: "#F3A7FF87",
        lightPurpleTranslucent2: "#F3A7FF87",
        darkRedTranslucent: "#F563631A",
        beige: "#FEDFBA",
        primaryRed: "#FF3838",
        offWhite: "#FFFBF6"
      }
    }
  },
  plugins: []
}
