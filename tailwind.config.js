const colors = {
  // font colors
  "0D0D0D": "#0D0D0D",
  525252: "#525252",
  252525: "#252525",

  // other colors
  E0EFD4: "#E0EFD4",
  "8FC055_O20": "rgba(143,192,85,0.2)",
  "8CC63E": "#8CC63E",
  A4D77A: "#A4D77A",

  // For testing
  red: "red",
  green: "green",
  yellow: "yellow",
  black: "black",
  blue: "blue",
};

const spacing2000px = {};
Array.from(Array(2000).keys()).forEach((n) => {
  spacing2000px[n] = `${n}px`;
});

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { min: "0px", max: "480px" },
      tablet: { min: "481px", max: "1025px" },
      laptop: { min: "1026px", max: "1335px" },
      desktop: "1336px",
    },
    colors,
    fontSize: {
      s12l14: ["12px", "14px"],
      s14l17: ["14px", "17px"],
      s16l19: ["16px", "19px"],
      s18l21_6: ["18px", "21.6px"],
      s20l24: ["20px", "24px"],
    },
    extend: {
      colors,
    },
    spacing: {
      ...spacing2000px,
      "100vh": "100vh",
      "100vw": "100vw",
      "100%": "100%",
    },
  },
  plugins: [],
};
