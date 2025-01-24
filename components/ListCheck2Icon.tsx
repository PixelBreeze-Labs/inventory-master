import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const ListCheck2Icon = () => {
  return (
    <Image
      style={styles.listCheck2Icon}
      contentFit="cover"
      source={require("../assets/listcheck2.png")}
    />
  );
};

const styles = StyleSheet.create({
  listCheck2Icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default ListCheck2Icon;
