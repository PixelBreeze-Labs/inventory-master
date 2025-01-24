import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

export type DividerIconType = {
  divider?: ImageSourcePropType;
};

const DividerIcon = ({ divider }: DividerIconType) => {
  return (
    <Image style={styles.dividerIcon} contentFit="cover" source={divider} />
  );
};

const styles = StyleSheet.create({
  dividerIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    height: 0,
    width: "100%",
  },
});

export default DividerIcon;
