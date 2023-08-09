/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          100: "#8c8a8a",
          200: "#8c8989",
          300: "#3e2939",
          400: "#100d2e",
          500: "#0b0b0b",
          600: "#08061b",
        },
        dimgray: {
          100: "#80474d",
          200: "#575656",
          300: "#5d4457",
          400: "#594053",
          500: "#584052",
          600: "#58304b",
          700: "#53334b",
          800: "#482d42",
        },
        goldenrod: "#c79b01",
        gainsboro: "rgba(217, 217, 217, 0)",
        purple: "#8c2575",
        darkslategray: {
          100: "#455965",
          200: "#47362c",
        },
        burlywood: "#ffc19e",
        rosybrown: "#ac8671",
        lightblue: "#afdffa",
        lightslategray: "#6b8898",
      },
      fontFamily: {
        inter: "Inter",
        inherit: "inherit",
        lato: "Lato",
      },
      borderRadius: {
        smi: "13px",
        "10xl": "29px",
      },
    },
    // fontSize: {
    //   "2xl": "21px",
    //   xl: "20px",
    //   "5xl": "24px",
    //   "7xl": "26px",
    //   "8xl": "28px",
    //   "9xl": "30px",
    //   "10xl": "32px",
    //   "12xl": "34px",
    //   "15xl" : "36px",
    //   lgi: "19px",
    //   "21xl": "40px",
    //   base: "16px",
    //   "25xl": "44px",
    //   smi: "13px",
    // },
  },
  corePlugins: {
    preflight: false,
  },
};
