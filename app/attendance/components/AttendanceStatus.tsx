import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Make sure to install 'react-native-vector-icons'
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import CheckOutConfirmationModal from "@/app/attendance/components/CheckOutConfirmationModal";

const AttendanceStatus = () => {
  const [checkOutModalVisible, setCheckOutModalVisible] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.statusRow}>
        {/* Status Icon and Text */}
        <View style={styles.iconTextRow}>
          <Image
            source={require("../../../assets/Vector.png")}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.label}>Current Status:</Text>
        </View>
        <Text style={styles.status}>Checked-in</Text>
      </View>

      <View style={styles.timeRow}>
        {/* Check-in Time Icon and Text */}
        <View style={styles.iconTextRow}>
          <Image
            source={require("../../../assets/timeline.png")}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.label}>Check-in time:</Text>
        </View>
        <Text style={styles.time}>08:30 AM</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCheckOutModalVisible(true)}
      >
        <Image
          source={require("../../../assets/ic_checkout.png")}
          resizeMode="contain"
          style={[styles.icon, { tintColor: "#fff", marginRight: 10 }]}
        />
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={checkOutModalVisible}
        onRequestClose={() => setCheckOutModalVisible(false)}
      >
        <CheckOutConfirmationModal
          setCheckOutModalVisible={setCheckOutModalVisible}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.modeBase00,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "100%",
    alignSelf: "center",
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  iconTextRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginLeft: 8,
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeMedium,
    color: Color.colorDarkslategray,
    fontWeight: "500",
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorMidnightblue,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
    tintColor: "black",
  },
});

export default AttendanceStatus;
