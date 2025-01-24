import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const StatusBarBatteryIcon = () => {
  return (
    <Image
      style={styles.statusbarBatteryIcon}
      contentFit="cover"
      source={require("../assets/-statusbarbattery.png")}
    />
  );
};

const styles = StyleSheet.create({
  statusbarBatteryIcon: {
    position: "absolute",
    marginLeft: 11.3,
    top: 0,
    left: "50%",
    width: 27,
    height: 13,
  },
});

export default StatusBarBatteryIcon;
