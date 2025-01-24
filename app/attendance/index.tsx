import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {Stack, useRouter} from 'expo-router'
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import AttendanceStatus from "./components/AttendanceStatus";
import AttendanceRecord from "./components/AttendanceRecord";
import {Ionicons} from "@expo/vector-icons";

const Attendance = () => {
  const router = useRouter();
  return (
      <>
        <Stack.Screen
            options={{
              title: 'Attendance',
              headerLeft: () => (
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
                  </TouchableOpacity>
              ),
              presentation: 'card',
            }}
        />
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.calendarExportView}>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              // @ts-ignore
              contentFit="cover"
              source={require("../../assets/calendarline.png")}
            />
            <Text style={styles.text}>Today's October 2024</Text>
          </TouchableOpacity>

          {/* Export Button */}
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              // @ts-ignore
              contentFit="cover"
              source={require("../../assets/shareforward2fill.png")}
            />
            <Text style={styles.text}>Export</Text>
          </TouchableOpacity>
        </View>

        {/* Attendance Status */}
        <AttendanceStatus />

        <AttendanceRecord />
      </View>
    </ScrollView>
        </>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
  },
  calendarExportView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical: 6,
    // marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.modeBase00,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    width: "48%",
  },
  text: {
    marginLeft: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.textListPrimaryDay,
    fontWeight: "500",
  },
  icon: {
    width: 22,
    height: 22,
  },
});
