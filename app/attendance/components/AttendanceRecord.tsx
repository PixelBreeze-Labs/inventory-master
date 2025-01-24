import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; // Ensure you have installed react-native-vector-icons
import { Color, FontSize } from "@/GlobalStyles";

const attendanceData = [
  {
    id: "1",
    status: "On-time",
    timeIn: "8:30AM",
    timeOut: "6:00PM",
    methodIn: "NFC",
    methodOut: "NFC",
    date: "10 October",
    backgroundColor: "#EAF7EC", // Light green background
    iconColor: "#4CD17020", // Green for on-time
    methodIcon: require("../../../assets/material-symbols_nfc-outline.png"),
  },
  {
    id: "2",
    status: "Late",
    timeIn: "8:30AM",
    timeOut: "6:00PM",
    methodIn: "Scan",
    methodOut: "Scan",
    date: "9 October",
    backgroundColor: "#FDEAEA", // Light red background
    iconColor: "#DD123420", // Red for late
    methodIcon: require("../../../assets/ph_hand-tap-bold.png"),
  },
  {
    id: "3",
    status: "Early",
    timeIn: "8:30AM",
    timeOut: "6:00PM",
    methodIn: "Self",
    methodOut: "Self",
    date: "8 October",
    backgroundColor: "#EEF1FD", // Light blue background
    iconColor: "#4285F420", // Blue for early
    methodIcon: require("../../../assets/gg_qr.png"),
  },
  {
    id: "4",
    status: "On-time",
    timeIn: "8:30AM",
    timeOut: "6:00PM",
    methodIn: "NFC",
    methodOut: "NFC",
    date: "7 October",
    backgroundColor: "#EAF7EC", // Light green background
    iconColor: "#4CD17020", // Green for on-time
    methodIcon: require("../../../assets/material-symbols_nfc-outline.png"),
  },
];

const AttendanceRecord = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance Records</Text>

      <FlatList
        scrollEnabled
        data={attendanceData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Date Tag */}
            <View style={styles.dateTagContainer}>
              <Text style={styles.dateTag}>{item.date}</Text>
            </View>

            {/* Left Section - Status and Check-in Info */}
            <View style={styles.leftSection}>
              <View
                style={[styles.iconCircle, { backgroundColor: item.iconColor }]}
              >
                <Image
                  source={require("../../../assets/calendarclearoutline.png")}
                  resizeMode="contain"
                  style={[styles.icon, { tintColor: "black" }]}
                />
              </View>
              <View style={styles.statusInfo}>
                <Text style={styles.status}>{item.status}</Text>
                <View style={styles.timeRow}>
                  <Text style={styles.time}>{item.timeIn}</Text>
                  <Image
                    source={item.methodIcon}
                    resizeMode="contain"
                    style={[styles.methodIcon, {}]}
                  />
                  <Text style={styles.methodText}>{item.methodIn}</Text>
                </View>
              </View>
            </View>

            {/* Right Section - Total Time and Check-out Info */}
            <View style={styles.rightSection}>
              <Text style={styles.totalTime}>8h Total</Text>
              <View style={styles.timeRow}>
                <Text style={styles.time}>{item.timeOut}</Text>
                <Image
                    source={item.methodIcon}
                    resizeMode="contain"
                    style={[styles.methodIcon, {}]}
                  />
                <Text style={styles.methodText}>{item.methodOut}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    position: "relative",
  },
  dateTagContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#EAEAEA",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 10,
  },
  dateTag: {
    fontSize: FontSize.size_xs,
    color: Color.modeAlpha900,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  statusInfo: {
    justifyContent: "center",
  },
  status: {
    fontSize: FontSize.textBaseFontRegular_size,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  time: {
    fontSize: FontSize.textSmFontMedium_size,
    color: "gray",
  },
  methodIcon: {
    height: 20,
    width: 20,
    marginLeft: 6,
    marginRight: 4,
  },
  methodText: {
    fontSize: FontSize.textSmFontMedium_size,
    color: "gray",
  },
  rightSection: {
    width: "40%",
    alignItems: "flex-start",
  },
  totalTime: {
    fontSize: FontSize.textBaseFontRegular_size,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default AttendanceRecord;
