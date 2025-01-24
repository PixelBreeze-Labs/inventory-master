import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

export type GroupComponent1Type = {
  prop?: string;
  circle?: ImageSourcePropType;
  upcoming?: string;
  arrowRight?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
  propBackgroundColor?: string;
  propColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent1 = ({
  prop,
  circle,
  upcoming,
  arrowRight,
  propTop,
  propBackgroundColor,
  propColor,
}: GroupComponent1Type) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const upcomingStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.cardWrapper, styles.cardPosition, groupView1Style]}>
      <View style={[styles.card, styles.cardPosition]}>
        <View style={styles.rowStyles}>
          <View style={[styles.lockup, styles.lockupFlexBox]}>
            <Image
              style={styles.lockupChild}
              contentFit="cover"
              source={require("../assets/group-1261163548.png")}
            />
            <View style={styles.parent}>
              <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
              <Text style={[styles.text, styles.textTypo]}>
                9:00 AM - 5:00 PM
              </Text>
            </View>
            <View style={[styles.button, styles.lockupFlexBox, buttonStyle]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={circle}
              />
              <Text style={[styles.upcoming, styles.textTypo, upcomingStyle]}>
                {upcoming}
              </Text>
              <Image
                style={[styles.arrowRightIcon, styles.iconLayout]}
                contentFit="cover"
                source={arrowRight}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    width: 344,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lockupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  iconLayout: {
    display: "none",
    height: 24,
    width: 24,
  },
  lockupChild: {
    width: 44,
    height: 44,
  },
  text: {
    fontSize: FontSize.base14pxBold_size,
    lineHeight: 21,
    color: Color.textListPrimaryDay,
    alignSelf: "stretch",
  },
  parent: {
    flex: 1,
    gap: Gap.gap_2xs,
  },
  upcoming: {
    fontSize: FontSize.size_xs,
    lineHeight: 17,
    color: Color.colorRoyalblue_100,
  },
  arrowRightIcon: {
    overflow: "hidden",
  },
  button: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue_200,
    width: 88,
    height: 26,
    justifyContent: "center",
    paddingHorizontal: Padding.p_65xl,
    paddingVertical: Padding.p_base,
    gap: Gap.gap_md,
    overflow: "hidden",
  },
  lockup: {
    width: 311,
    gap: Gap.gap_sm,
  },
  rowStyles: {
    height: 58,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  card: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.backgroundPanelDay,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
  },
  cardWrapper: {
    height: 78,
  },
});

export default GroupComponent1;
