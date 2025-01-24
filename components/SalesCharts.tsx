import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Color, FontFamily, FontSize } from '@/GlobalStyles'
import { LineChart } from 'react-native-chart-kit'
import { screenWidth } from '@/constants/variables'

const data = [
  {
    data: [1.6, 2, 1.5, 3, 2, 3],
    strokeWidth: 2, // Optional
    color: () => `rgba(0, 255, 0, 0.6)`,
  },
  {
    data: [1.5, 1.8, 2.4, 2.6, 1.5, 1.9],
    strokeWidth: 2, // Optional
    color: () => `rgba(255, 0, 0, 0.6)`, 
  },
  {
    data: [1.2, 1.4, 1.8, 2, 1.5, 1.8],
    strokeWidth: 2, // Optional
    color: () => `rgba(100, 100, 100, 0.6)`, 
  },
]

type Props = {
  // default false
  isShowRevenueUnitsTabs?: boolean 
}

const SalesCharts = (props: Props) => {
  const { isShowRevenueUnitsTabs = false } = props

  const [tab, setTab ] = useState(0)


  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartText}>Sales Chart</Text>
      {/* Revenue and Units tabs */}
      {isShowRevenueUnitsTabs && <View style={styles.tabs}>
        <Pressable onPress={() => setTab(0)} style={[styles.tab, tab === 0 ? styles.activeTab : styles.inactiveTab]}>
          <Text style={[styles.tabText, tab === 0 ? styles.activeTabText : styles.inactiveTabText]}>Revenue</Text>
        </Pressable>
        <Pressable onPress={() => setTab(1)} style={[styles.tab, tab === 1 ? styles.activeTab : styles.inactiveTab]}>
          <Text style={[styles.tabText, tab === 1 ? styles.activeTabText : styles.inactiveTabText]}>Units</Text>
        </Pressable>
      </View>}

      <View style={styles.chartView}>
      <LineChart
        data={{
          labels: [],
          datasets: data
        }}
        width={screenWidth - 100}
        height={300}
        withDots={false}
        bezier
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: '2',
            strokeWidth: '0',
            stroke: '#ffa726',
          },
          propsForBackgroundLines: {
            stroke: '#e3e3e3',
          },
        }}
        style={{
          paddingRight: 0,
          paddingLeft: 0,
        }}
      />
      </View>

      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.dot, { borderColor: 'rgba(0, 255, 0, 0.6)' }]} />
          <Text>In-Store</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.dot, { borderColor: 'rgba(255, 0, 0, 0.6)' }]} />
          <Text>Online</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.dot, { borderColor: 'rgba(100, 100, 100, 0.6)' }]} />
          <Text>Mobile App</Text>
        </View>
      </View>
    </View>
  )
}

export default SalesCharts

const styles = StyleSheet.create({
  chartContainer:{
    backgroundColor: Color.modeBase00,
    padding: 16,
    borderRadius: 10,
  },
  chartText:{
    fontSize: FontSize.textXlFontSemibold_size,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: '#1A1A1A',
    lineHeight: 30,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 8,
    borderWidth : 2,
    borderColor : '#B7B7B9',
  },
  chartView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5', // Background of the tab container
    borderRadius: 10, // Rounded corners for the container
    padding: 6,
    marginBottom: 24
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 10
  },
  tabText: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: '500',
    color: Color.modeAlpha900,
  },
  activeTab: {
    backgroundColor: '#FFFFFF', // Active tab background
  },
  inactiveTab: {
    backgroundColor: 'transparent', // Inactive tab background (same as container)
  },
  activeTabText: {
    color: Color.modeAlpha900, // Active tab text color
  },
  inactiveTabText: {
    color: '#999999', // Inactive tab text color
  },
})