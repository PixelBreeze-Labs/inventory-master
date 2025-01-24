import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type ListlabelType = {
  labelValue?: string;
  iconWrapper?: ImageSourcePropType;
};

const Listlabel = ({ labelValue, iconWrapper }: ListlabelType) => {
  return (
    <View style={styles.listlabel}>
      <Text style={styles.labelValue}>{labelValue}</Text>
      <Image
        style={styles.iconWrapper}
        contentFit="cover"
        source={iconWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelValue: {
    fontSize: FontSize.base14pxBold_size,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.textListPrimaryDay,
    textAlign: "left",
  },
  iconWrapper: {
    width: 16,
    height: 16,
    overflow: "hidden",
    display: "none",
  },
  listlabel: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_2xs,
  },
});

export default Listlabel;
