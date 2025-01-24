import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import StatusBarTime from "./StatusBarTime";
import StatusBarBatteryIcon from "./StatusBarBatteryIcon";

export type StatusBar1Type = {
  time?: string;
};

const StatusBar1 = ({ time }: StatusBar1Type) => {
  return (
    <View style={[styles.statusbar, styles.sideIconPosition]}>
      <Image
        style={[styles.notchIcon, styles.sideIconPosition]}
        contentFit="cover"
        source={require("../assets/notch.png")}
      />
      <View style={[styles.leftSide, styles.sideIconPosition]}>
        <StatusBarTime time={time} />
      </View>
      <View style={[styles.rightSide, styles.sideIconPosition]}>
        <StatusBarBatteryIcon />
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.iconMobileSignal, styles.sideIconPosition]}
          contentFit="cover"
          source={require("../assets/icon--mobile-signal.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sideIconPosition: {
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -86,
    width: 0,
    height: 0,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
    width: 54,
    height: 21,
    left: "50%",
    position: "absolute",
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  iconMobileSignal: {
    marginLeft: -38.7,
    top: 1,
    width: 18,
    height: 12,
    left: "50%",
    position: "absolute",
  },
  rightSide: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
    left: "50%",
    position: "absolute",
  },
  statusbar: {
    marginLeft: -194.5,
    width: 390,
    height: 47,
    overflow: "hidden",
    top: 0,
    left: "50%",
    position: "absolute",
  },
});

export default StatusBar1;
