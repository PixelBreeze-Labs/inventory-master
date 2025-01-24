import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const LayoutMasonryLineIcon = () => {
  return (
    <Image
      style={styles.layoutMasonryLineIcon}
      contentFit="cover"
      source={require("../assets/layoutmasonryline.png")}
    />
  );
};

const styles = StyleSheet.create({
  layoutMasonryLineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default LayoutMasonryLineIcon;
