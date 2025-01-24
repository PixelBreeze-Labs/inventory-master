import { StyleSheet } from "react-native";

/* fonts */
export const FontFamily = {
  manropeSemiBold: "Manrope-SemiBold",
  manropeBold: "Manrope-Bold",
  textSmFontMedium: "Inter-Medium",
  textBaseFontRegular: "Inter-Regular",
  textXlFontSemibold: "Inter-SemiBold",
  manropeMedium: "Manrope-Medium",
  manropeRegular: "Manrope-Regular",
  base14pxBold: "Inter-Bold",
  calloutBold: "SF Pro Text",
  poppinsSemiBold: "Poppins-SemiBold",
  poppinsMedium: "Poppins-Medium",
};
/* font sizes */
export const FontSize = {
  size_xs: 12,
  textSmFontMedium_size: 14,
  textBaseFontRegular_size: 16,
  textLgFontMedium_size: 18,
  textXlFontSemibold_size: 20,
  size_mini: 15,
  size_mid: 17,
  size_3xs: 10,
  size_smi: 13,
};
/* Colors */
export const Color = {
  primary: "#5C1C81",
  colorWhitesmoke_200: "#f5f6f7",
  colorWhitesmoke_100: "#eaeaea",
  red600: "#dc2828",
  colorCrimson_100: "#dd1234",
  modeBase00: "#fff",
  modeBase100: "#F4F4F5",
  colorLightgray: "#d6d6d6",
  textInputDisable: "#c4c4cf",
  colorSilver_100: "#b9c0c9",
  colorDarkslategray: "#484c52",
  colorGainsboro_100: "#e6e6e6",
  modeBase200: "#e4e4e7",
  modeBase50: "#fcfcfc",
  colorGray_100: "#838383",
  gray3: "#828282",
  colorGray_300: "#808080",
  colorGray_200: "#7b7b7b",
  textListPrimaryDay: "#28282b",
  textContentSecondaryDay: "#27272a",
  black: "#202226",
  modeAlpha900: "#1a1a1a",
  modeAlpha400: "rgba(26, 26, 26, 0.4)",
  modeAlpha700: "rgba(26, 26, 26, 0.7)",
  colorOrange_100: "#fbbc05",
  colorOrange_200: "rgba(251, 188, 5, 0.2)",
  colorsBlue900: "#1e3b8a",
  brandSuccess: "#1ac057",
  modeBase400: "#a1a1aa",
  colorMediumseagreen_100: "#34a853",
  colorMediumseagreen_200: "rgba(52, 168, 83, 0.2)",
  colorsBlue500: "#3479e9",
  colorsBlue600: "#2463eb",
  colorsBlue300: "#91c3fd",
  colorsBlue400: "#61a6fa",
  colorsBlue100: "#dcebfe",
  colorMidnightblue: "#012169",
  gray2: "#4f4f4f",
};
/* Style Variables */
export const StyleVariable = {
  radiusRadi6: 12,
  space7: 16,
  space9: 24,
  space4: 8,
  space11: 32,
  space17: 64,
  space2: 2,
  space3: 4,
  space8: 20,
  radiusRadi5: 10,
  radiusRadi4: 8,
  radiusRadi1: 2,
  space10: 28,
};
/* Gaps */
export const Gap = {
  gap_4xs: 2,
  gap_3xs: 4,
  gap_2xs: 6,
  gap_xs: 8,
  gap_sm: 10,
  gap_md: 13,
  gap_lg: 14,
  gap_xl: 16,
  gap_2xl: 24,
  gap_3xl: 32,
  gap_4xl: 35,
};
/* Paddings */
export const Padding = {
  p_base: 16,
  p_5xs: 8,
  p_3xs: 10,
  p_13xl: 32,
  p_xl: 20,
  p_65xl: 84,
  p_6xs: 7,
  p_5xl: 24,
  p_11xs: 2,
  p_sm: 14,
  p_9xs: 4,
};
/* border radiuses */
export const Border = {
  br_xl: 20,
  br_81xl: 100,
  br_xs: 12,
  br_9xs: 4,
  br_5xs: 8,
  br_3xs: 10,
  br_7xs: 6,
  br_11xs: 2,
  br_5xl: 24,
  br_sm: 14,
  br_31xl: 50,
  br_lg: 18,
};

export const GlobalStyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
    display: "flex",
    flexDirection: "column",
  },
  border: {
    borderColor: Color.modeBase200,
    borderWidth: 1,
  },
})
