const colors = {
  "0D0D0D": "#0D0D0D",
  525252: "#525252",
  252525: "#252525",
  F1F1F1: "#F1F1F1",
  FFFFFF: "#FFFFFF",
  E0EFD4: "#E0EFD4",
  "8FC055": "rgba(143,192,85,0.2)",
  "8CC63E": "#8CC63E",
  A4D77A: "#A4D77A",
  E0E0E0: "#E0E0E0",
  FAFAFA: "#FAFAFA",
  F5FBF3: "#F5FBF3",
  "8B8B8B": "#8B8B8B",
  A2A2A2: "#A2A2A2",
  313131: "#313131",
  DFDFDF: "#DFDFDF",
  C4C4C4: "#C4C4C4",
  "83B449": "#83B449",
  "8DBF52": "#8DBF52",
  262626: "#262626",
  "000000": "#000000",
  "46AC34": "#46AC34",
  "6B6B6B": "#6B6B6B",
  "8B8B8B": "#8B8B8B",
  848484: "#848484",
  949494: "#949494",
  // For testing
  red: "red",
  green: "green",
  blue: "blue",
}
// Adding dynamic pixels to Tailwind
const spacing2000px = {}
Array.from(Array(2000).keys()).forEach((n) => {
  spacing2000px[n] = `${n}px`
})
// Adding dynamic percentages to Tailwind
const spacing100Percentage = {}
Array.from(Array(101).keys()).forEach((n) => {
  spacing100Percentage[`${n}%`] = `${n}%`
})
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
      s14l21: ["14px", "21px"],
      s16l19: ["16px", "19px"],
      s16l24: ["16px", "24px"],
      s16l33: ["16px", "33px"],
      s18l21_6: ["18px", "21.6px"],
      s18l27: ["18px", "27px"],
      s18l33: ["18px", "33px"],
      s20l24: ["20px", "24px"],
      s20l30: ["20px", "30px"],
      s20l33: ["20px", "33px"],
      s20l140_62: ["20px", "140.62%"],
      s20l150: ["20px", "150%"],
      s22l26_4: ["22px", "26.4px"],
      s22l33: ["22px", "33px"],
      s22l140_62: ["22px", "140.62%"],
      s24l29: ["24px", "29px"],
      s24l36: ["24px", "36px"],
      s24l150: ["24px", "150%"],
      s28l42: ["28px", "42px"],
      s30l36: ["30px", "36px"],
      s30l45: ["30px", "45px"],
      s32l38: ["32px", "38px"],
      s34l42: ["34px", "42px"],
      s36l43: ["36px", "43px"],
      s40l60: ["40px", "60px"],
      s44l66: ["44px", "66px"],
      s44l120: ["44px", "120%"],
      s45l45: ["45px", "45px"],
      s45l33: ["45px", "33px"],
      s45l54: ["45px", "54px"],
      s45l67: ["45px", "67px"],
      s56l124_5: ["56px", "124.5%"],
      s56l67: ["56px", "67px"],
    },
    extend: {
      colors,
      backgroundImage: {
        "home-top":
          "linear-gradient(91.09deg, rgba(57,181,101, 0.089) 0.82%, rgba(67,185,60, 0.09) 49.92%, rgba(140,198,62, 0.10) 98.95%);",
        button:
          "linear-gradient(84deg, #95c11f -3.78%, #77b82a 28.26%, #5bb030 143.37%, #46ac34 146.27%, #3eab35 182.49%, #3aaa35 264.13%)",
        footer:
          "linear-gradient(289.57deg, #19191A -0.47%, #353537 41.1%, #575757 81.6%, #797979 101.84%);",
      },
      boxShadow: {
        headerBoxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        bankbox: "0px 0px 7.67398px rgba(37, 37, 37, 0.08)",
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
  // plugins: [],
}
