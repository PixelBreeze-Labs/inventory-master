import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import { MaterialIcons } from "@expo/vector-icons";
import CalendarExportView from "./components/CalendarExportView";
import AttendanceOverview from "./components/AttendanceOverview";
import TaskReportView from "./components/TaskReportView";
import { useNavigation } from "expo-router";

const Home = () => {
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: "Home",
  })
  return (
    <ScrollView>
    <View style={styles.container}>
        {/* Welcome View */}
      <View style={styles.welcomeView}>
        <View style={styles.leftSideView}>
          <View style={styles.welcomeTitleView}>
            <Text style={styles.welcomeTitleText}>Hi, John</Text>
            <Image
              style={styles.icon}
              // @ts-ignore
              contentFit="cover"
              source={require("../../assets/PngItem_175396 1.png")}
            />
          </View>
          <Text style={styles.subTitle}>Welcome to Sales Associate</Text>
        </View>
        <View style={styles.rightSideView}>
            <View style={styles.dateView}>
                <Text style={styles.dateText}>Today, October 16</Text>
            </View>
        </View>
      </View>

      {/* Options View */}
      <TouchableOpacity style={styles.card}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.cardItemIcon}
            // @ts-ignore
            contentFit="cover"
            source={require("../../assets/Icon L.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Attendance</Text>
          <Text style={styles.subtitle}>
          Manage your daily check-ins, view attendance history, and request time off or sick leave.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Time Tracking */}
      <TouchableOpacity style={styles.card}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.cardItemIcon}
            // @ts-ignore
            contentFit="cover"
            source={require("../../assets/IconClock.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Time Tracking</Text>
          <Text style={styles.subtitle}>
          Log your work hours, track time across various projects. Generate timesheets and analyze your productivity patterns.
          </Text>
        </View>
      </TouchableOpacity>

      {/* My Accounts */}
      <TouchableOpacity style={styles.card}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.cardItemIcon}
            // @ts-ignore
            contentFit="cover"
            source={require("../../assets/IconMyAccount.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>My Account</Text>
          <Text style={styles.subtitle}>
          Update personal information, customize app settings, manage notifications, and much more.
          </Text>
        </View>
      </TouchableOpacity>

      {/*  */}
      <TouchableOpacity style={styles.card}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.cardItemIcon}
            // @ts-ignore
            contentFit="cover"
            source={require("../../assets/IconReport.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Reports</Text>
          <Text style={styles.subtitle}>
          Access detailed analytics, generate performance summaries, view team productivity metrics.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Calendar Export View */}
      <CalendarExportView />
      
      {/* Weekly Attendance overview Chart */}
      <AttendanceOverview />

      {/* Task/Project Report */}
      <TaskReportView />
    </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  welcomeView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "",
    alignItems: "center",
    marginBottom: 24,
  },
  welcomeTitleView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  welcomeTitleText: {
    fontSize: FontSize.textXlFontSemibold_size,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: "#111827",
  },
  subTitle:{
    fontSize: FontSize.textBaseFontRegular_size,
    fontWeight: "500",
    fontFamily: FontFamily.manropeSemiBold,
    marginTop: 6,
    color: Color.colorGray_300
  },
  icon: {
    width: 20,
    height: 20,
  },
  leftSideView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "50%",
  },
  rightSideView:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "50%",
  },
  dateView:{
    borderRadius: 10,
    backgroundColor: Color.colorWhitesmoke_100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24
  },
  dateText:{
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.textListPrimaryDay
  },
  // Card
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.modeBase00,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    gap: 16,
    marginBottom: 12
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  cardItemIcon:{
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: '600',
    color: Color.black,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeMedium,
    width: '90%',
  },
});
