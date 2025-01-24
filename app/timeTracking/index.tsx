import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {Stack, useRouter} from 'expo-router';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import TimerTracker from './TimeTracker';
import {Ionicons} from "@expo/vector-icons";

const TimeTracking = () => {
    const router = useRouter();
    
  return (
      <>
          <Stack.Screen
              options={{
                  title: 'Time Tracking',
                  headerLeft: () => (
                      <TouchableOpacity onPress={() => router.back()}>
                          <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
                      </TouchableOpacity>
                  ),
                  presentation: 'card',
              }}
          />
        <View style={styles.container}>
            <View style={styles.projectDetailContainer}>
                <View style={styles.itemView}>
                    <View style={styles.itemTitleView}>
                        <Image
                            style={{width: 24, height: 24}}
                            //@ts-ignore
                            contentFit="cover"
                            source={require("../../assets/survey-line.png")}
                        />
                        <Text style={styles.itemTitle}>Project:</Text>
                    </View>
                    <Text style={styles.itemTitleValue}>Project 1</Text>
                </View>

                <View style={styles.itemView}>
                    <View style={styles.itemTitleView}>
                        <Image
                            style={{width: 24, height: 24}}
                            //@ts-ignore
                            contentFit="cover"
                            source={require("../../assets/time-line.png")}
                        />
                        <Text style={styles.itemTitle}>Task:</Text>
                    </View>
                    <Text style={styles.itemTitleValue}>Task 1</Text>
                </View>

                <View style={styles.itemView}>
                    <View style={styles.itemTitleView}>
                        <Image
                            style={{width: 24, height: 24}}
                            //@ts-ignore
                            contentFit="cover"
                            source={require("../../assets/calendarline.png")}
                        />
                        <Text style={styles.itemTitle}>Due date:</Text>
                    </View>
                    <Text style={styles.itemTitleValue}>2024/11/10</Text>
                </View>

                <View style={styles.itemView}>
                    <View style={styles.itemTitleView}>
                        <Image
                            style={{width: 24, height: 24}}
                            //@ts-ignore
                            contentFit="cover"
                            source={require("../../assets/fluent_status-32-regular.png")}
                        />
                        <Text style={styles.itemTitle}>Current status:</Text>
                    </View>
                    {/* <Text style={styles.itemTitleValue}>In  Progress</Text> */}
                    <Text style={styles.currentStatusValue}>In Progress</Text>
                </View>
            </View>

            <Text style={styles.timerTrackerTitle}>Timer Tracker</Text>
            <TimerTracker />
        </View>
      </>
  )
}

export default TimeTracking

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  projectDetailContainer: {
    backgroundColor: Color.modeBase00,
    borderRadius: Border.br_5xs,
    paddingVertical: 16
  },
  itemView:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 9
  },
  itemTitle:{
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: "500",
        color: Color.colorDarkslategray
  },
  itemTitleView:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8
  },
  itemTitleValue:{
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeBold,
        color: Color.textListPrimaryDay,
        fontWeight: "700",
  },
  currentStatusValue:{
        fontSize: 10,
        fontFamily: FontFamily.manropeBold,
        color: Color.colorOrange_100,
        backgroundColor: Color.colorOrange_200,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
  },
  timerTrackerTitle:{
        fontSize: FontSize.textBaseFontRegular_size,
        fontWeight: "700",
        color: Color.textContentSecondaryDay,
        fontFamily: FontFamily.manropeBold,
        marginTop: 8,
  },
  timerTrackerContainer:{
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_5xs,
        paddingVertical: 16,
        paddingHorizontal: 16
  },
  enterTaskNameView:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Color.colorLightgray,
        borderRadius: Border.br_3xs,
        // gap: 8
  },
  enterTaskName:{
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: "500",
        color: Color.colorDarkslategray
  },
})