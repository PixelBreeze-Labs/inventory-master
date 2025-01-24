import * as React from "react";
import { StyleSheet, View } from "react-native";
import Moduleheader from "./Moduleheader";
import MainInfo from "./MainInfo";

const GroupComponent2 = () => {
  return (
    <View style={styles.moduleheaderParent}>
      <Moduleheader />
      <MainInfo
        labelValue1="Use NFC technology for quick and secure check-ins and check-outs"
        labelValue="NFC Check-in/Check-out"
        iconWrapper={require("../assets/icon-wrapper.png")}
        divider={require("../assets/divider.png")}
        divider1={require("../assets/divider1.png")}
        divider2={require("../assets/divider1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  moduleheaderParent: {
    position: "absolute",
    top: 364,
    left: 24,
    width: 344,
    height: 121,
  },
});

export default GroupComponent2;
