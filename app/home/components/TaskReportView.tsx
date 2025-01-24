import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";

const TaskReportView = () => {
  // Data for the bar chart
  const data = [
    {
      name: "In-Progress Tasks",
      population: 40,
      color: Color.colorsBlue900,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Overdue Tasks",
      population: 25,
      color: Color.colorsBlue400,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Upcoming Tasks",
      population: 20,
      color: Color.colorsBlue300,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Completed Tasks",
      population: 15,
      color: Color.colorsBlue500,
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Task/Project Report</Text>
      <Text style={styles.subtitle}>
        Hours worked vs. expected, including punctuality metrics
      </Text>

      {/* Bar Chart */}
      {/* @ts-ignore */}
      <View style={styles.pieChart}>
        <PieChart
          data={data}
          width={300}
          height={300}
          chartConfig={{
            backgroundColor: Color.modeBase00,
            backgroundGradientFrom: Color.modeBase00,
            backgroundGradientTo: Color.modeBase00,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 0,
            },
          }}
          
          hasLegend={false}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"40"}
          center={[30, 0]}
        />
      </View>

      {/* Legend Section */}
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View
              style={[
                styles.legendColor,
                { backgroundColor: item.color },
              ]}
            />
            <Text style={styles.legendText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Color.modeBase00,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: FontSize.textLgFontMedium_size,
    fontWeight: "600",
    fontFamily: FontFamily.manropeBold,
    color: Color.modeAlpha900,
    marginBottom: 8,
    width: "90%",
  },
  subtitle: {
    fontSize: FontSize.size_mini,
    color: Color.modeAlpha400,
    fontFamily: FontFamily.manropeRegular,
    marginBottom: 28,
    width: "90%",
  },
  chart: {
    marginVertical: 10,
    borderRadius: 10,
  },
  pieChart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.modeBase50,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Color.modeBase200,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 28,
    flexWrap: "wrap",
    // borderWidth: 1,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    paddingTop: 18,
  },
  legendText: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.modeAlpha700,
    marginLeft: 8,
  },
  legendColor: {
    width: 18,
    height: 18,
    marginRight: 6,
    borderRadius: 2,
  },
});

export default TaskReportView;
