import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '@/GlobalStyles'
import SalesCharts from '@/components/SalesCharts'
import TopPerfomingProducts from '../components/TopPerfomingProducts'
import { products } from '@/constants/collections'
import GeographicalSalesMap from '../components/GeographicalSalesMap'
import GoalTracking from '../components/GoalTracking'

const Analysis = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
    <View style={styles.container}>
      <View style={styles.calendarExportView}>
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("@assets/calendarline.png")}
            />
            <Text style={styles.text}>Today, 10 October</Text>
          </TouchableOpacity>

          {/* Export Button */}
          <TouchableOpacity style={styles.button}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("@assets/shareforward2fill.png")}
            />
            <Text style={styles.text}>Export</Text>
          </TouchableOpacity>
        </View>

        {/* Last Updated View */}
        <View style={styles.lastUsedContainer}>
              <Text style={styles.lastUsedText}>
              Last updated: 20/02/2024 22:00
              </Text>
          </View>

          {/* Sales Perfomance */}
          <SalesCharts
            isShowRevenueUnitsTabs={true}
          />

          {/* Top Perfoming Products */}
          <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Top Performing Products</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <TopPerfomingProducts
                item={item}
                index={index}
              />
            )}
            contentContainerStyle={{
              borderWidth: 1,
              borderColor: Color.modeBase200,
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: Color.modeBase00,
              padding: 10,
            }}
          />
        </View>

        {/* Customer Segments */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Customer Segments</Text>
          <View style={styles.row}>
          {customerSegments.map((item, index) => (
            <View key={item.id} style={styles.sagementCard}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.percentage}>{item.percentage}</Text>
            </View>
          ))}
      </View>
        </View>

      {/* Inventory Status */}
      <View style={styles.sectionContainerWhite}>
        <View style={styles.titleView}>
      <Text style={styles.inventoryTitle}>Inventory Status</Text>
        </View>
      {inventoryData.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={[styles.status, item.link && styles.link]}>
            {item.status}
          </Text>
        </View>
      ))}
      </View>

      {/* Geographical Sales Map */}
      <GeographicalSalesMap />

      {/* Goal Tracking */}
      <GoalTracking />
        
    </View>
  </ScrollView>
  )
}

export default Analysis

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
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
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.textListPrimaryDay,
    fontWeight: "500",
  },
  icon: {
    width: 20,
    height: 20,
  },
  lastUsedContainer:{
    paddingVertical: 8,
    backgroundColor: `${Color.modeAlpha900}10`,
    borderRadius: 10
  },
  lastUsedText: {
    fontSize: FontSize.textSmFontMedium_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.colorGray_100,
    textAlign: "center",
    paddingHorizontal: 18
  },
  sectionContainer: {
    marginTop: 18,
    gap: 16,
  },
  sectionTitle: {
    fontSize: FontSize.textBaseFontRegular_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "bold",
    color: Color.textContentSecondaryDay,
  },
  // Customer segments card
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  sagementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 16,
    marginVertical: 8,
    width: '48%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.modeBase200,
  },
  label: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: 'bold',
    color: '#202226',
    marginBottom: 8,
  },
  percentage: {
    fontSize: 24,
    fontFamily: FontFamily.manropeBold,
    fontWeight: '800',
    color: '#212B36',
    lineHeight: 48,
  },
  // Inventory Status
  sectionContainerWhite: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.modeBase200,
    paddingVertical: 16,
    paddingHorizontal: 5,
    gap: 10
  },
  titleView:{
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: Color.modeBase200,
  },
  inventoryTitle:{
    fontSize: FontSize.textBaseFontRegular_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: 'bold',
    color: Color.textListPrimaryDay,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 12,
    paddingVertical: 9,
    paddingHorizontal: 16,
  },
  category: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.manropeBold,
    fontWeight: 'bold',
    marginBottom: 4,
    color: Color.textListPrimaryDay,
  },
  status: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: '500',
    color: Color.colorGray_300,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
})

const customerSegments = [
  { id: '1', label: 'Loyal Customers', percentage: '30%' },
  { id: '2', label: 'One-Time Buyers', percentage: '10%' },
  { id: '3', label: 'Occasional Shoppers', percentage: '45%' },
  { id: '4', label: 'New Customers', percentage: '15%' },
];

const inventoryData = [
  {
    id: '1',
    category: 'Clothing',
    status: '70% well-stocked, 20% low stock, 10% out of stock',
    link: false,
  },
  {
    id: '2',
    category: 'Watches',
    status: '60% well-stocked, 30% low stock, 10% out of stock',
    link: false,
  },
  {
    id: '3',
    category: 'Home Goods',
    status: '80% well-stocked, 15% low stock, 5% out of stock',
    link: false,
  },
  {
    id: '4',
    category: 'Accessories',
    status: '65% well-stocked, 25% low stock, 10% out of stock',
    link: false,
  },
];