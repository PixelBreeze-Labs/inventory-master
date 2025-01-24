import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {
  FontFamily,
  FontSize,
  Color,
} from "@/GlobalStyles";
import { router } from "expo-router";

const data = [
  {
    id: '1',
    icon: require('@assets/tools/barcode-scan.png'),
    title: 'Scan & Track',
    subtitle: 'Scan barcodes for quick inventory updates and tracking',
    navigation: '/tools/scanner',
  },
  {
    id: '2',
    icon: require('@assets/tools/inventory-adjust.png'),
    title: 'Inventory Adjustment',
    subtitle: 'Add, remove or adjust product quantities',
    navigation: '/tools/adjustment',
  },
  {
    id: '3',
    icon: require('@assets/tools/location.png'),
    title: 'Location Management',
    subtitle: 'Manage warehouse locations and product placement',
    navigation: '/tools/locations',
  },
  {
    id: '4',
    icon: require('@assets/tools/stocktake.png'),
    title: 'Stock Take',
    subtitle: 'Conduct inventory counts and reconciliation',
    navigation: '/tools/stocktake',
  },
  {
    id: '5',
    icon: require('@assets/tools/reports.png'),
    title: 'Reports',
    subtitle: 'View inventory reports and analytics',
    navigation: '/tools/reports',
  },
  {
    id: '6',
    icon: require('@assets/tools/movement.png'),
    title: 'Stock Movement',
    subtitle: 'Track and manage product transfers between locations',
    navigation: '/tools/movement',
  },
  {
    id: '7',
    icon: require('@assets/tools/import.png'),
    title: 'Import Products',
    subtitle: 'Bulk import products via CSV/Excel or brand API sync',
    navigation: '/tools/import',
  },
  {
    id: '8',
    icon: require('@assets/tools/settings.png'),
    title: 'Settings',
    subtitle: 'Configure warehouses, locations and app preferences',
    navigation: '/tools/settings',
  }
];

const ToolsScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            <Text style={styles.screenTopText}>
              Inventory management tools for scanning, tracking, and managing stock levels across locations.
            </Text>
            <View style={styles.lastUsedContainer}>
              <Text style={styles.lastUsedText}>
                Last scan: 24/01/2024 14:30
              </Text>
            </View>

            <FlatList
                scrollEnabled={false}
                data={data}
                renderItem={({ item }) => <ToolsScreenTabItem item={item} />}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap: 18}}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const ToolsScreenTabItem = ({ item }:any) => {
  return (
     <TouchableOpacity style={styles.card} onPress={() => router.push(item.navigation)}>
     <View style={styles.iconContainer}>
       <Image
         style={styles.cardItemIcon}
         resizeMode="contain"
         source={item.icon}
       />
     </View>
     <View style={styles.textContainer}>
       <Text style={styles.title}>{item.title}</Text>
       <Text style={styles.subtitle}>
       {item.subtitle}
       </Text>
     </View>
     <View style={styles.arrowContainer}>
       <Image
         style={styles.arrowIcon}
         resizeMode="cover"
         source={require("@assets/expand-down.png")}
       />
     </View>
   </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    padding: 18,
    gap: 18
  },
  screenTopText: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.colorGray_100,
    flex: 1,
  },
  lastUsedContainer:{
    paddingVertical: 8,
    backgroundColor: Color.colorWhitesmoke_100,
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeMedium,
    width: '90%',
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 20,
    width: 20,
  },
  arrowIcon: {
    width: '100%',
    height: '100%',
    tintColor: Color.colorGray_100,
  },
})

export default ToolsScreen;
