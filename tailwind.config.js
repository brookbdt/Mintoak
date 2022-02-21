const colors = {
  "0D0D0D": "#0D0D0D",
  525252: "#525252",
  252525: "#252525",
  F1F1F1: "#F1F1F1",
  FFFFFF: "#FFFFFF",
  E0EFD4: "#E0EFD4",
  "8FC055_O20": "rgba(143,192,85,0.2)",
  "8CC63E": "#8CC63E",
  A4D77A: "#A4D77A",
  E0E0E0: "#E0E0E0",
  FAFAFA: "#FAFAFA",
  F5FBF3: "#F5FBF3",
  "8B8B8B": "#8B8B8B",

  // For testing
  red: "red",
  green: "green",
  yellow: "yellow",
  black: "black",
  blue: "blue",
};

// Adding dynamic pixels to Tailwind
const spacing2000px = {};
Array.from(Array(2000).keys()).forEach((n) => {
  spacing2000px[n] = `${n}px`;
});

// Adding dynamic percentages to Tailwind
const spacing100Percentage = {};
Array.from(Array(101).keys()).forEach((n) => {
  spacing100Percentage[`${n}%`] = `${n}%`;
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
      s14l16_8: ["14px", "16.8px"],
      s14l24: ["14px", "24px"],
      s16l19: ["16px", "19px"],
      s18l21_6: ["18px", "21.6px"],
      s18l27: ["18px", "27px"],
      s20l24: ["20px", "24px"],
      s20l140_62: ["20px", "140.62%"],
      s22l26_4: ["22px", "26.4px"],
      s22l140_62: ["22px", "140.62%"],
      s24l150: ["24px", "150%"],
      s40l60: ["40px", "60px"],
      s44l120: ["44px", "120%"],
      s56l124_5: ["56px", "124.5%"],
    },
    extend: {
      colors,
      backgroundImage: {
        // "home-top": "linear-gradient(180deg, #e6f0df 19.15%, rgba(247, 255, 236, 0.1) 49.55%)",
        button: "linear-gradient(84deg, #95c11f -3.78%, #77b82a 28.26%, #5bb030 143.37%, #46ac34 146.27%, #3eab35 182.49%, #3aaa35 264.13%)",
        footer: "linear-gradient(289.57deg, #19191A -0.47%, #353537 41.1%, #575757 81.6%, #797979 101.84%);",
      },
      boxShadow: {
        headerBoxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      },
      zIndex: {
        minus1: -1,
      },
    },
    spacing: {
      ...spacing2000px,
      ...spacing100Percentage,
      "100vh": "100vh",
      "100vw": "100vw",
    },
  },
  plugins: [],
};
