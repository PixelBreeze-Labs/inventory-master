import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import { router, useNavigation } from "expo-router";
import Svg, { Rect } from "react-native-svg";
import SalesCharts from "@/components/SalesCharts";
import { products } from "@/constants/collections";
import TopPerfomingProducts from "./components/TopPerfomingProducts";

const metricsData = [
  {
    id: "1",
    title: "Total Sales",
    value: "$45,678",
    change: "12% from last week",
    changePositive: true,
    chart: [30, 40, 25, 35, 45, 40, 20, 40, 35],
  },
  {
    id: "2",
    title: "Average Order Value",
    value: "$250",
    change: "3% from last week",
    changePositive: false,
    chart: [35, 30, 40, 25, 35, 45, 30, 20, 40],
  },
  {
    id: "3",
    title: "Conversion Rate",
    value: "3.5%",
    change: "0.5% from last week",
    changePositive: true,
    chart: [40, 35, 25, 40, 30, 35, 45, 20, 30],
  },
  {
    id: "4",
    title: "New Customers",
    value: "87",
    change: "15% from last week",
    changePositive: true,
    chart: [30, 40, 35, 30, 45, 25, 40, 35, 20],
  },
];

const data = [
  {
    id: "1",
    icon: require("@assets/dashboard/products.png"),
    title: "Products",
    subtitle:
      "Complete guide to the product inventory. Access detailed information for each product.",
    navigation: "dashboard/products",
  },
  {
    id: "2",
    icon: require("@assets/dashboard/customers.png"),
    title: "Customers",
    subtitle:
      "Overview of customer profiles and interactions. Access details, view history, and manage relationships efficiently.",
      navigation: "(tabs)/customers",
  },
  {
    id: "3",
    icon: require("@assets/dashboard/analysis.png"),
    title: "Analysis",
    subtitle:
      "Insight into key business metrics and trends. Visualize data and track performance",
    navigation: "dashboard/analysis",
  },
];

const DashboardScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: "Home",
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Options List */}
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 14 }}
          key={"1"}
        />

        {/* Key Metrics */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Key Metrics</Text>
          <FlatList
            data={metricsData}
            scrollEnabled={false}
            contentContainerStyle={{
              gap: 14,
            }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MetricCard
                key={item.id}
                title={item.title}
                value={item.value}
                change={item.change}
                changePositive={item.changePositive}
                chart={item.chart}
              />
            )}
          />
        </View>

        {/* Sales Charts */}
        <SalesCharts />

        {/* Top Performing Products */}
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
      </View>
    </ScrollView>
  );
};

const RenderItem = ({ item }: any) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(item.navigation)}
    >
      <View style={styles.iconContainer}>
        <Image
          style={styles.cardItemIcon}
          resizeMode="contain"
          source={item.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MetricCard = ({ title, value, change, changePositive, chart }: any) => {
  return (
    <View style={styles.metricCard}>
      <View style={styles.metricInfo}>
        <Text style={styles.metricTitle}>{title}</Text>
        <Text
          style={
            changePositive
              ? styles.metricChangePositive
              : styles.metricChangeNegative
          }
        >
          {changePositive ? `↑ ${change}` : `↓ ${change}`}
        </Text>
        <Text style={styles.metricValue}>{value}</Text>
      </View>
      <View style={styles.chartContainer}>
        <Svg height="50" width="140">
          {chart.map((height: any, index: any) => (
            <Rect
              key={index}
              x={5 + index * 15}
              y={50 - height}
              width="5"
              height={height}
              rx={2}
              ry={2}
              fill={index === 5 ? "#000" : "#E0E0E0"}
            />
          ))}
        </Svg>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 34,
  },
  // Card
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.modeBase00,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
    gap: 16,
    borderWidth: 1,
    borderColor: Color.modeBase200,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  cardItemIcon: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "600",
    color: Color.black,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeMedium,
    width: "90%",
  },
  //
  sectionContainer: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: FontSize.textBaseFontRegular_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "bold",
    color: Color.textContentSecondaryDay,
  },
  metricCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.modeBase00,
    padding: 16,
    paddingVertical: 13,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.modeBase200,
  },
  metricCardBorder: {
    borderColor: "#007BFF",
    borderWidth: 1,
  },
  metricInfo: {
    width: "50%",
    gap: 12,
  },
  metricTitle: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.black,
  },
  metricChangePositive: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    color: "#22C55E",
  },
  metricChangeNegative: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    color: "#CB0000",
  },
  metricValue: {
    fontSize: 24,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "800",
    color: "@212B36",
  },
  chartContainer: {
    alignItems: "flex-end",
    flex: 1,
    width: "60%",
    marginLeft: 16,
  },
  // Product Card
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  productTitle: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: '700',
    color: Color.black,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  units: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: '500',
    color: '#848484',
  },
  revenue: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: 'bold',
    color: '#000',
  },
});
