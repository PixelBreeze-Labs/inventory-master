import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";

const GeographicalSalesMap = () => {
  return (
    <View style={styles.sectionContainerWhite}>
      <Text style={styles.inventoryTitle}>Inventory Status</Text>
      <View style={styles.tableContainer}>
        {/* Table Header */}
        <View style={styles.tableHeaderRow}>
          <Text style={[styles.tableHeaderCell, styles.cityColumn]}></Text>
          <Text style={[styles.tableHeaderCell, styles.orderColumn]}>
            Orders
          </Text>
          <Text style={[styles.tableHeaderCell, styles.salesColumn]}>
            Sales
          </Text>
        </View>

        {/* Table Rows */}
        {salesData.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.cityColumn,
                { color: Color.modeAlpha400 },
              ]}
            >
              {item.city}
            </Text>
            <Text style={[styles.tableCell, styles.orderColumn]}>
              {item.orders}
            </Text>
            <Text style={[styles.tableCell, styles.salesColumn]}>
              {item.sales}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default GeographicalSalesMap;

const styles = StyleSheet.create({
  sectionContainerWhite: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 5,
    gap: 16,
  },
  inventoryTitle: {
    fontSize: FontSize.textXlFontSemibold_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "bold",
    color: Color.textListPrimaryDay,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  // Table section styles
  tableContainer: {
    // marginTop: 20,
  },
  tableHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: Color.modeBase100,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: Color.modeBase100,
  },
  tableHeaderCell: {
    fontSize: 14,
    fontWeight: "bold",
    color: Color.modeAlpha400,
  },
  tableCell: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.textSmFontMedium,
    fontWeight: "500",
    color: Color.modeAlpha900,
  },
  cityColumn: {
    flex: 3,
    maxWidth: "60%",
  },
  orderColumn: {
    flex: 1,
    textAlign: "center",
  },
  salesColumn: {
    flex: 1.5,
    textAlign: "right",
  },
  geographicalMap: {
    
  }
});

const salesData = [
  { city: "Tirana", orders: "2222", sales: "$450k" },
  { city: "Durres", orders: "2222", sales: "$320k" },
  { city: "Fier", orders: "2222", sales: "$450k" },
  { city: "Vlore", orders: "2222", sales: "$520k" },
  { city: "Saranda", orders: "2222", sales: "$380k" },
];
