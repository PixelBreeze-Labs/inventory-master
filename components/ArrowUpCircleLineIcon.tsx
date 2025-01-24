import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const ArrowUpCircleLineIcon = () => {
  return (
    <Image
      style={styles.arrowUpCircleLineIcon}
      contentFit="cover"
      source={require("../assets/arrowupcircleline1.png")}
    />
  );
};

const styles = StyleSheet.create({
  arrowUpCircleLineIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default ArrowUpCircleLineIcon;
