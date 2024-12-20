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
        burlywood: "#ffc19e",
        rosybrown: "#ac8671",
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
        white: "#fff",
        gray: {
          100: "#8c8a8a",
          200: "#8c8989",
          300: "#3e2939",
          400: "#100d2e",
          500: "#0b0b0b",
          600: "#08061b",
          1100: "#482615",
          1200: "#3d2416",
          1300: "#3a2511",
          1400: "#342211",
        },
        black: "#000",
        saddlebrown: {
          100: "#58381a",
          200: "#4f341b",
        },
        bisque: "rgba(255, 228, 203, 0.4)",
        sienna: "#7d5530",
        goldenrod: "#c79b01",
        gainsboro: "rgba(217, 217, 217, 0)",
      },
      fontFamily: {
        inter: "Inter",
        lato: "Lato",
      },
      borderRadius: {
        smi: "13px",
        "10xl": "29px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
