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
    icon: require('@assets/tools/clienting.png'),
    title: 'Clienting',
    subtitle: 'Managing customer wishlist and creating orders',
    navigation: '/tools/clienting',
  },
  {
    id: '2',
    icon: require('@assets/tools/cross-brand-recommendation.png'),
    title: 'Cross Brand Recommendation',
    subtitle: 'Intuitive and visual approach to product recommendations',
    navigation: '/tools/crossBrandRecommendations',
  },
  {
    id: '3',
    icon: require('@assets/tools/gift-advisory.png'),
    title: 'Gift Advisory',
    subtitle: 'Intuitive and visual approach to product recommendations',
    navigation: '/tools/giftAdvisory',
  },
  {
    id: '4',
    icon: require('@assets/tools/customer-feedback.png'),
    title: 'Customer Feedback',
    subtitle: 'Collect feedback from your customers when they visit your store',
    navigation: '/tools/customerFeedback',
  },
  {
    id: '5',
    icon: require('@assets/tools/manage-loyalty-programs.png'),
    title: 'Manage Loyalty Programs',
    subtitle: 'View and manage customer loyalty levels, benefits, and progress',
    navigation: '/tools/loyaltyPrograms',
  },
  {
    id: '6',
    icon: require('@assets/tools/family-account-link.png'),
    title: 'Family Account Link',
    subtitle: 'Connect & manage related customer accounts and loyalty rewards',
    navigation: 'tools/familyAccounts',
  },
  {
    id: '7',
    icon: require('@assets/tools/competitor-pricing.png'),
    title: 'Competitor Pricing',
    subtitle: 'Compare your product prices based on real-time market data',
    navigation: '/tools/competitorPricing',
  },
  {
    id: '8',
    icon: require('@assets/tools/omnichannel-orders.png'),
    title: 'Omnichannel Orders',
    subtitle: 'Manage and fulfill customer orders from multiple sales channels',
    navigation: '/tools/omniChannelOrders',
  },
];

const ToolsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          {/* Title View */}
          <Text style={styles.screenTopText}>Clienting tool at your disposal. Manage customer wishlist, orders and preferences on his/her behalf.</Text>
          <View style={styles.lastUsedContainer}>
              <Text style={styles.lastUsedText}>
              Last used: 20/02/2024 22:00
              </Text>
          </View>

          {/* Tools List */}
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
