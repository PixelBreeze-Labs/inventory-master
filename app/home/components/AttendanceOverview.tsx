import { Color, FontFamily, FontSize } from '@/GlobalStyles';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const AttendanceOverview = () => {
  // Data for the bar chart
  const data = {
    labels: ['1-10', '11-20', '21-31'],
    datasets: [
      {
        data: [8, 6, 5], // On-time (green)
        color: () => 'rgba(92, 184, 92, 1)', // green
      },
      {
        data: [2, 1, 2], // Early (blue)
        color: () => 'rgba(0, 123, 255, 1)', // blue
      },
      {
        data: [1, 1, 1], // Late (red)
        color: () => 'rgba(220, 53, 69, 1)', // red
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Weekly Attendance Overview</Text>
      <Text style={styles.subtitle}>
      Hours worked vs. expected, including punctuality metrics
      </Text>

      {/* Bar Chart */}
      {/* @ts-ignore */}
      <BarChart
        data={data}
        width={Dimensions.get('window').width - 100}
        height={220}
        chartConfig={{
          backgroundColor: Color.modeBase00,
          backgroundGradientFrom: Color.modeBase00,
          backgroundGradientTo: Color.modeBase00,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        fromZero={true}
      />

      {/* Legend Section */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: 'rgba(92, 184, 92, 1)' }]} />
          <Text>On-time</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: 'rgba(0, 123, 255, 1)' }]} />
          <Text>Early</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: 'rgba(220, 53, 69, 1)' }]} />
          <Text>Late</Text>
        </View>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: FontSize.textLgFontMedium_size,
    fontWeight: '600',
    fontFamily: FontFamily.manropeBold,
    color: Color.modeAlpha900,
    marginBottom: 8,
    width: '90%',
  },
  subtitle: {
    fontSize: FontSize.size_mini,
    color: Color.modeAlpha400,
    fontFamily: FontFamily.manropeRegular,
    marginBottom: 28,
    width: '90%',
  },
  chart: {
    marginVertical: 10,
    borderRadius: 10,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 28,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 15,
    height: 15,
    marginRight: 5,
    borderRadius: 2,
  },
});

export default AttendanceOverview;
