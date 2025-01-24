import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type StatusBarTimeType = {
  time?: string;
};

const StatusBarTime = ({ time = "9:41" }: StatusBarTimeType) => {
  return (
    <View style={[styles.statusbarTime, styles.timeLayout]}>
      <Text style={[styles.time, styles.timeLayout]}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  time: {
    top: 1,
    left: 0,
    fontSize: FontSize.calloutBold_size,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: FontFamily.calloutBold,
    color: Color.modeAlpha900,
    textAlign: "center",
    height: 20,
  },
  statusbarTime: {
    marginLeft: -27,
    top: 0,
    left: "50%",
    borderRadius: Border.br_5xl,
    height: 21,
  },
});

export default StatusBarTime;
