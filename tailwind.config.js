const colors = {
  // font colors
  smokyBlack: "#0D0D0D",
  matterhorn: "#525252",
  nero: "#252525",

  // other colors
  hawkesBlue: "#E0EFD4",
  greenYellow: "rgba(143,192,85,0.2)",
  atlantis: "#8CC63E",

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
      s20l24: ["20px", "24px"],
      s14l17: ["14px", "17px"],
      s12l14: ["12px", "14px"],
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
