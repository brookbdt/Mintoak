const colors = {
  "0D0D0D": "#0D0D0D",
  A1A1A1: "#A1A1A1",
  525252: "#525252",
  252525: "#252525",
  F1F1F1: "#F1F1F1",
  "95C11F": "#95C11F",
  FFFFFF: "#FFFFFF",
  E0EFD4: "#E0EFD4",
  "8FC055": "rgba(143,192,85,0.2)",
  "8FC0551": "rgba(143,192,85,1)",
  A8FC055: "#8FC055",
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
  F3FBF5: "#F3FBF5",
  E5E5E5: "#E5E5E5",
  DFEFD4: "#DFEFD4",
  828282: "#828282",
  F4FBF4: "#F4FBF4",
  e0efd4: "#e0efd4",
  464646: "#464646",
  F6FAF2: "#F6FAF2",

  // DFEFD4: "#DFEFD4",
  "87BD25": "#87BD25",
  // 828282: "#828282",
  e0efd4: "#e0efd4",
  464646: "#464646",
  DFEFD4: "#DFEFD4",
  "87BD25": "#87BD25",
  828282: "#828282",
  D1E6BA: "#D1E6BA",
  393939: "#393939",
  "100F0F": "#100F0F",
  e9f2dd: "#e9f2dd",
  EC5F22: "#EC5F22",
  B0D472: "#B0D472",
  // For testing
  red: "red",
  green: "green",
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
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { min: "0px", max: "480px" },
      tablet: { min: "481px", max: "1025px" },
      laptop: { min: "1026px", max: "1440px" },
      desktop: "1441px",
    },
    colors,
    fontSize: {
      s10l33: ["10px", "33px"],
      s11_14l13_37: ["11.14px", "13.37px"],
      s12l14: ["12px", "14px"],
      s12l14_4: ["12px", "14.4px"],
      s12l18: ["12px", "18px"],
      s12l24: ["12px", "24px"],
      s13l18: ["13px", "18px"],
      s14l17: ["14px", "17px"],
      s14l16_8: ["14px", "16.8px"],
      s14l16_62: ["14px", "18.62px"],
      s14l24: ["14px", "24px"],
      s14l21: ["14px", "21px"],
      s14l23_28: ["14px", "23.28px"],
      s14l33: ["14px", "33px"],
      s15_22l18_27: ["15.22px", "18.27px"],
      s16l19: ["16px", "19px"],
      s16l24: ["16px", "24px"],
      s16l32: ["16px", "32px"],
      s16l33: ["16px", "33px"],
      s17l25: ["17px", "25px"],
      s18l21_6: ["18px", "21.6px"],
      s18l22: ["18px", "22px"],
      s18l27: ["18px", "27px"],
      s18l33: ["18px", "33px"],
      s19l30: ["19px", "30px"],
      s20l24: ["20px", "24px"],
      s20l26_6: ["20px", "26.6px"],
      s20l30: ["20px", "30px"],
      s20l40: ["20px", "40px"],
      s20l33: ["20px", "33px"],
      s20l40: ["20px", "40px"],
      s20l140_62: ["20px", "140.62%"],
      s20l150: ["20px", "150%"],
      s22l150: ["22px", "150%"],
      s22l26_4: ["22px", "26.4px"],
      s22l33: ["22px", "33px"],
      s22l44: ["22px", "44px"],
      s22l45: ["22px", "45px"],
      s22l140_62: ["22px", "140.62%"],
      s23_7l28_44: ["23.7px", "28.44px"],
      s24l26: ["24px", "26px"],
      s24l28_8: ["24px", "28.8px"],
      s24l29: ["24px", "29px"],
      s24l31: ["24px", "31px"],
      s24l36: ["24px", "36px"],
      s24l31_92: ["24px", "31.92px"],
      s24l40_8: ["24px", "40.8px"],
      s24l45: ["24px", "45px"],
      s24l150: ["24px", "150%"],
      s28l42: ["28px", "42px"],
      s30l33: ["30px", "33px"],
      s30l30: ["30px", "30px"],
      s30l36: ["30px", "36px"],
      s30l45: ["30px", "45px"],
      s32l38: ["32px", "38px"],
      s32l38_4: ["32px", "38.4px"],
      s32l45: ["32px", "45px"],
      s32l42: ["32px", "42px"],
      s34l42: ["34px", "42px"],
      s35l43: ["35px", "43px"],
      s36l43: ["36px", "43px"],
      s36l54: ["36px", "54px"],
      s40l60: ["40px", "60px"],
      s44l33: ["44px", "33px"],
      s44l45: ["44px", "45px"],
      s44l57_2: ["44px", "57.2px"],
      s44l52_8: ["44px", "52.8px"],
      s44l66: ["44px", "66px"],
      s44l52: ["44px", "52px"],
      s44l52_5: ["44px", "52.5px"],
      s44l120: ["44px", "120%"],
      s44l150: ["44px", "150%"],
      s45l45: ["45px", "45px"],
      s45l33: ["45px", "33px"],
      s45l54: ["45px", "54px"],
      s54l80: ["54px", "80px"],
      s45l67: ["45px", "67px"],
      s56l124_5: ["56px", "124.5%"],
      s56l67: ["56px", "67px"],
      s56l63: ["56px", "63px"],
    },
    extend: {
      colors,
      backgroundImage: {
        "home-top":
          "linear-gradient(173.18deg, #E6F0DF 19.15%, rgba(247, 255, 236, 0.1) 49.55%);",
        "mobile-home-top":
          "linear-gradient(173.18deg, #E6F0DF 19.15%, rgba(247, 255, 236, 0.1) 49.55%);",
        button:
          "linear-gradient(84deg, #95c11f -3.78%, #77b82a 28.26%, #5bb030 143.37%, #46ac34 146.27%, #3eab35 182.49%, #3aaa35 264.13%)",
        footer:
          "linear-gradient(289.57deg, #19191A -0.47%, #353537 41.1%, #575757 81.6%, #797979 101.84%);",
        bg_resource: "url(/images/backgrounds/resource-bg-img.svg)",
        bg_resource_mobile: "url(/images/backgrounds/Resource_mobile.svg)",
        form: " linear-gradient(341.98deg, #E9F2DD 21.15%, #8EA56F 184.51%);",
        mintoak_effect:
          "linear-gradient(163.57deg, #A7CD7E 11.39%, rgba(123, 205, 37, 0) 95.33%)",
        faqs_bg:
          " linear-gradient(180deg, #88CD37 -48.55%, rgba(143, 192, 85, 0) 244.44%);",
        bg_reel: "url(/images/backgrounds/reel-img.svg)",
        bg_contact: "url(/images/backgrounds/contact-background.svg)",
        bg_contact_responcive_color:
          "linear-gradient(289.57deg, #19191A -0.47%, #353537 41.1%, #575757 81.6%, #797979 101.84%)",
        bg_partner: "url(/images/backgrounds/partner-with-us-img.svg)",
        we_offer_bg:
          "linear-gradient(289.57deg, #19191A -0.47%, #353537 41.1%, #575757 81.6%, #797979 101.84%)",
        contact_us: "url(/images/backgrounds/contact-us-bg.svg)",
        privecy_bg:
          "linear-gradient(91.09deg, #39B565 0.82%, #43B93C 49.92%, #8CC63E 98.95%)",
        reel_img_bg: "url(/images/backgrounds/reel-img-bg.svg)",
        partner_mobile:
          "url(http://uat-content.mintoak.com/uploads/Group_163266_c480074a91.svg)",
        read_more:
          "linear-gradient(360deg, #F3FBF6 0%, rgba(244, 251, 243, 0.9) 37.42%, rgba(248, 252, 243, 0.5) 67.65%, rgba(248, 252, 243, 0) 100%)",
      },
      // boxShadow: {
      //   headerBoxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      //   bankbox: "0px 0px 7.67398px rgba(37, 37, 37, 0.08)",
      //   mediaCard: " 0px 0px 11.8511px rgba(0, 0, 0, 0.1)",
      //   popupShadow: " 0px 10px 20px rgba(0, 0, 0, 0.5)",
      //   slideShadow: " 0px 10px 20px rgba(0, 0, 0, 0.2)",
      //   productShadow: "0px 1px 11.8511px rgba(0, 0, 0, 0.2)",
      // },
      zIndex: {
        minus1: -1,
      },
      fill: {
        hover: "#8cc63e",
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
};
