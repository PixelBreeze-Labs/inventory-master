import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const OrderDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen
          options={{
            title: "Order Details",
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color={Color.black} />
              </TouchableOpacity>
          ),
        }}
      />
      {/* Order Info Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Order info</Text>
        <View style={styles.section}>
          <View style={[styles.row]}>
              <Text style={styles.orderText}>Order #2100</Text>
              <View style={styles.orderStatus}>
              <Text style={styles.delivered}>Delivered</Text>
              </View>
          </View>
          <View style={[styles.row, {justifyContent: 'flex-start', paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: Color.colorGainsboro_100}]}>
          <View style={styles.dateRow}>
                <Image source={require('@/assets/money_icon.png')} resizeMode="contain" style={styles.icon} />
                <Text style={styles.dateText}>12000 ALL</Text>
              </View>
          <View style={[styles.dateRow]}>
                <Image source={require('@/assets/timeline.png')} style={styles.icon} />
                <Text style={styles.dateText}>20/10/2024</Text>
              </View>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.noteButton}>
              <Text style={styles.noteText}>Leave a note</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statusButton}>
              <Text style={styles.statusText}>Change status</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Product Info Section */}
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Product info</Text>
      <View style={styles.section}>
        
        {/* Product 1 */}
        <View style={styles.productRow}>
          <Image source={require('@/assets/watch_item.png')} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>
              Swatch Indigo Glow (Ø 47.00)
            </Text>
            <Text style={styles.skuText}>SKU: SB05N113</Text>
            <View style={styles.priceRow}>
              <Text style={styles.priceText}>2 × 23,000 ALL</Text>
              <Text style={styles.oldPrice}>30,000 ALL</Text>
            </View>
            <Text style={styles.totalPrice}>46,000 ALL</Text>
            <View style={styles.giftRow}>
            <Text style={styles.packageText}>Package as a gift please</Text>
            </View>
          </View>
        </View>
       

        {/* Product 2 */}
        <View style={[styles.productRow, {borderBottomWidth: 0}]}>
        <Image source={require('@/assets/watch_item_2.png')} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>
              Swatch Aqua Shimmer (Ø 47.00)
            </Text>
            <Text style={styles.skuText}>SKU: SB07S100G</Text>
            <Text style={styles.totalPrice}>18,400 ALL</Text>
          </View>
        </View>
      </View>
      </View>

      {/* Payment Info Section */}
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Payment info</Text>
      <View style={[styles.section, {marginBottom: 10, paddingVertical: 16}]}>
      <View style={[styles.row,{marginBottom: 0, justifyContent: 'flex-start'}]}>
          <Image source={require('@/assets/ic_paymentcard.png')} resizeMode="contain" style={[{marginRight: 12, height: 28, width: 28}]} />
          <Text style={styles.paymentMethod}>Paid with Card</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.paymentDetails}>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentText}>Subtotal</Text>
            <Text style={styles.priceText}>64,400 ALL</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentText}>Shipping fee</Text>
            <Text style={styles.priceText}>500 ALL</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentText}>Discount</Text>
            <Text style={[styles.priceText, styles.discount]}>-500 ALL</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentText}>Total</Text>
            <Text style={styles.priceText}>64,400 ALL</Text>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F8F8F8",
  },
  sectionContainer: {
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: FontSize.textBaseFontRegular_size,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.textContentSecondaryDay,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  orderText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  priceText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "900",
    color: Color.black,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  delivered: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsMedium,
    color: '#00AB56',
  },
  orderStatus: {
    paddingHorizontal: 12, 
    paddingVertical: 6,
    borderRadius: 50,
    marginBottom: 4,
    backgroundColor: '#EFFFF4',
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
  },
  dateText: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    color: Color.modeAlpha900,
    marginLeft: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 16,
  },
  noteButton: {
    borderColor: "#7D3C98",
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "48%",
  },
  statusButton: {
    backgroundColor: "#7D3C98",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "48%",
  },
  noteText: {
    fontSize: 14,
    color: "#7D3C98",
    textAlign: "center",
  },
  statusText: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    color: "#FFF",
    fontWeight: "600",
    textAlign: "center",
  },
  productRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.black,
    marginBottom: 4,
  },
  skuText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    color: "#888",
    marginBottom: 8,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#FF0000",
    marginLeft: 8,
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    marginTop: 4,
  },
  giftRow: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 8,
  },
  packageText: {
    fontSize: 12,
    color: "#888",
  },
  paymentDetails: {
    // marginTop: 16,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingVertical: 8,

  },
  paymentText: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "500",
    color: Color.textListPrimaryDay,
  },
  discount: {
    color: "#FF0000",
  },
  paymentMethod: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
});

export default OrderDetails;
