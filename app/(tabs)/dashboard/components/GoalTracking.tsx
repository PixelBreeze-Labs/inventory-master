import { Color, FontFamily, FontSize } from '@/GlobalStyles';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { G, Circle, Text as SvgText } from 'react-native-svg';

const GoalTrackingCard = () => {
  // Define the progress values for the three goals
  const revenueProgress = 1.2 / 1.5; // 80% progress
  const satisfactionProgress = 4.0 / 4.5; // ~93% progress
  const acquisitionProgress = 2000 / 2500; // 80% progress

  // Config
  const circleRadius = 80;
  const circleStrokeWidth = 12;
  const unselectedStrokeWidth = 5

  const calculateStrokeDashoffset = (progress:any) => {
    const circumference = 2 * Math.PI * circleRadius;
    return circumference - circumference * progress;
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Goal Tracking</Text>

      {/* Circular Progress Chart */}
      <View style={styles.chartContainer}>
        <Svg height="250" width="250" viewBox="0 0 250 250">
          <G rotation="-90" origin="125, 75">
            {/* Background Circles */}
            <Circle
              cx="75"
              cy="75"
              r={circleRadius}
              stroke="#e6e6e6"
              strokeWidth={unselectedStrokeWidth}
              fill="none"
            />
            <Circle
              cx="75"
              cy="75"
              r={circleRadius + 12}
              stroke="#e6e6e6"
              strokeWidth={unselectedStrokeWidth}
              fill="none"
            />
            <Circle
              cx="75"
              cy="75"
              r={circleRadius + 24}
              stroke="#e6e6e6"
              strokeWidth={unselectedStrokeWidth}
              fill="none"
            />

            {/* Progress Circles */}
            {/* Monthly Revenue */}
            <Circle
              cx="75"
              cy="75"
              r={circleRadius}
              stroke="#BE7DE3" // Dark Purple for Monthly Revenue
              strokeWidth={circleStrokeWidth}
              strokeDasharray={`${2 * Math.PI * circleRadius}`}
              strokeDashoffset={calculateStrokeDashoffset(revenueProgress)}
              strokeLinecap="square"
              fill="none"
            />

            {/* Customer Satisfaction */}
            <Circle
              cx="75"
              cy="75"
              r={circleRadius + 12}
              stroke="#8E34C1" // Medium Purple for Customer Satisfaction
              strokeWidth={circleStrokeWidth}
              strokeDasharray={`${2 * Math.PI * (circleRadius + 12)}`}
              strokeDashoffset={calculateStrokeDashoffset(satisfactionProgress)}
              strokeLinecap="square"
              fill="none"
            />

            {/* New Customer Acquisition */}
            <Circle
              cx="75"
              cy="75"
              r={circleRadius + 24}
              stroke="#5C1C81" // Light Purple for New Customer Acquisition
              strokeWidth={circleStrokeWidth}
              strokeDasharray={`${2 * Math.PI * (circleRadius + 24)}`}
              strokeDashoffset={calculateStrokeDashoffset(acquisitionProgress)}
              strokeLinecap="square"
              fill="none"
            />
          </G>

          {/* Center Text */}
          <SvgText
            x="50%"
            y="50%"
            textAnchor="middle"
            fontSize="16"
            fontWeight="500"
            fill="#333"
          >
            Income
          </SvgText>
          <SvgText
            x="50%"
            y="60%"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill={Color.modeAlpha900}
          >
            $1,200,000
          </SvgText>
        </Svg>
      </View>

      {/* Goal Details */}
      <View style={styles.details}>
        <Text style={styles.detailText}>
          <View style={styles.squareDarkPurple} /> Monthly Revenue: $1.2M / $1.5M
        </Text>
        <Text style={styles.detailText}>
          <View style={styles.squareMediumPurple} /> Customer Satisfaction: 4.2 / 4.5
        </Text>
        <Text style={styles.detailText}>
          <View style={styles.squareLightPurple} /> New Customer Acquisition: 2,000 / 2,500
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    gap: 24,
  },
  title: {
    fontSize: FontSize.textXlFontSemibold_size,
    fontFamily: FontFamily.manropeBold,
    color: Color.modeAlpha900,
    fontWeight: '700'
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: Color.modeBase50,
    borderColor: Color.modeBase200,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  details: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  detailText: {
    fontSize: FontSize.textSmFontMedium_size,
    color: Color.modeAlpha700,
    fontFamily: FontFamily.textSmFontMedium,
    marginVertical: 6,
  },
  squareDarkPurple: {
    width: 16,
    height: 16,
    backgroundColor: '#BE7DE3',
    marginRight: 8,
    borderRadius: 2,
  },
  squareMediumPurple: {
    width: 16,
    height: 16,
    borderRadius: 2,
    backgroundColor: '#8E34C1',
    marginRight: 8,
  },
  squareLightPurple: {
    width: 16,
    height: 16,
    backgroundColor: '#5C1C81',
    marginRight: 8,
    borderRadius: 2,
  },
});

export default GoalTrackingCard;
