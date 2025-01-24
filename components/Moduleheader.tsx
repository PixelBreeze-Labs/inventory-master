import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Moduleheader = () => {
  return (
    <View style={styles.moduleheader}>
      <Text style={styles.title}>Attendance Record Configuration</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: FontSize.calloutBold_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.textContentSecondaryDay,
    textAlign: "left",
  },
  moduleheader: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 343,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Moduleheader;
