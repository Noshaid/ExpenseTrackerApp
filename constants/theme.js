import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#194868", // Dark Blue
  secondary: "#FF615F", // peach

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#F5F7F9",
  lightGray2: "#FAFBFD",
  gray: "#BEC1D2",
  blue: "#42B0FF",
  darkgray: "#898C95",
  yellow: "#FFD573",
  lightBlue: "#95A9B8",
  darkgreen: "#008159",
  peach: "#FF615F",
  purple: "#8e44ad",
  red: "#FF0000",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 20,
  padding2: 32,

  // font sizes
  largeTitle: 50,
  h1: 28,
  h2: 20,
  h3: 14,
  h4: 12,
  body1: 28,
  body2: 18,
  body3: 14,
  body4: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
