import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

export type GroupComponentType = {
  calendarLine?: ImageSourcePropType;
  label?: string;

  /** Style props */
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({
  propLeft,
  calendarLine,
  label,
}: GroupComponentType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.inputPosition, groupViewStyle]}>
      <View style={[styles.input, styles.inputPosition]}>
        <Image
          style={styles.calendarLineIcon}
          contentFit="cover"
          source={calendarLine}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    height: 42,
    width: 167,
    left: 0,
    top: 0,
    position: "absolute",
  },
  calendarLineIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  label: {
    fontSize: FontSize.textSmFontMedium_size,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.textListPrimaryDay,
    textAlign: "left",
  },
  input: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.modeBase00,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_6xs,
    gap: Gap.gap_2xs,
  },
});

export default GroupComponent;
