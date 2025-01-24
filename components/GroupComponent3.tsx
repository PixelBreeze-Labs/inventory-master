import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import LayoutMasonryLineIcon from "./LayoutMasonryLineIcon";
import ListCheck2Icon from "./ListCheck2Icon";
import ArrowUpCircleLineIcon from "./ArrowUpCircleLineIcon";
import { Color, FontFamily, FontSize, Gap, Border } from "../GlobalStyles";

const GroupComponent3 = () => {
  return (
    <View style={styles.bottomNavParent}>
      <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={[styles.container, styles.bottomNavPosition1]}>
          <View style={styles.home}>
            <LayoutMasonryLineIcon />
            <Text style={[styles.dashboard, styles.shiftsTypo]}>Dashboard</Text>
          </View>
          <View style={styles.home}>
            <ListCheck2Icon />
            <Text style={[styles.dashboard, styles.shiftsTypo]}>Tasks</Text>
          </View>
          <View style={styles.home}>
            <Image
              style={styles.settingsChild}
              contentFit="cover"
              source={require("../assets/frame-1171275489.png")}
            />
            <Text style={[styles.dashboard, styles.shiftsTypo]}>Chat</Text>
          </View>
          <View style={styles.home}>
            <ArrowUpCircleLineIcon />
            <Text style={[styles.shifts, styles.shiftsTypo]}>Shifts</Text>
          </View>
          <View style={styles.home}>
            <Image
              style={styles.settingsChild}
              contentFit="cover"
              source={require("../assets/phchalkboardteacher.png")}
            />
            <Text style={[styles.dashboard, styles.shiftsTypo]}>Training</Text>
          </View>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.background} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavPosition: {
    backgroundColor: Color.backgroundPanelDay,
    bottom: 0,
    position: "absolute",
  },
  bottomNavPosition1: {
    marginLeft: -195,
    width: 390,
    left: "50%",
  },
  shiftsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  dashboard: {
    color: Color.colorDarkslategray,
  },
  home: {
    alignItems: "center",
  },
  settingsChild: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  shifts: {
    color: Color.colorCrimson_100,
  },
  container: {
    top: 9,
    height: 58,
    flexDirection: "row",
    justifyContent: "center",
    gap: Gap.gap_xl,
    alignItems: "center",
    position: "absolute",
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorSilver_100,
    width: 135,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  iphoneIndicator: {
    left: 0,
    width: 393,
    height: 30,
  },
  bottomNav: {
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    overflow: "hidden",
    marginLeft: -195,
    width: 390,
    left: "50%",
    height: 88,
  },
  background: {
    top: 0,
    left: 229,
    backgroundColor: Color.colorCrimson_100,
    width: 80,
    height: 2,
    position: "absolute",
  },
  bottomNavParent: {
    marginLeft: -194.5,
    bottom: 1,
    height: 88,
    width: 390,
    left: "50%",
    position: "absolute",
  },
});

export default GroupComponent3;
