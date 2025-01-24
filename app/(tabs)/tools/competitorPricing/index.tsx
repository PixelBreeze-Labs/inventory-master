import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import {Stack, useNavigation} from "expo-router";
import SearchBar from "@/components/SearchBar";
import {AntDesign, Ionicons} from "@expo/vector-icons";

const CompetitorPricing = () => {

  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeftIcon}>
          <Ionicons name="arrow-back" size={24} color={Color.black} />
        </TouchableOpacity>
    ),
    headerTitle: "Competitor Pricing",
  });

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Competitor Pricing" }} />
      <SearchBar />
      {/* Static Top Section */}
      <View style={styles.topSection}>
        <View style={styles.topItem}>
          <View style={styles.dot}/>
          <Text style={styles.topText}>Swatch</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.topItem}>
          <View style={[styles.dot, {backgroundColor: '#C4C4C4'}]}/>
          <Text style={styles.topText}> Watches.net</Text> 
          <AntDesign name="closecircleo" size={13} color={'#C4C4C4'} />
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ gap: 14 }}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 14 }}
      />
    </View>
  );
};

const ProductCard = ({ product }: any) => (
  <View style={styles.card}>
    <Text style={styles.productName}>{product.name}</Text>
    <View style={styles.row}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.oldPrice}>{product.oldPrice}</Text>
        <Text style={styles.difference}>{product.difference}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Edit Price</Text>
    </TouchableOpacity>
  </View>
);

export default CompetitorPricing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 18,
    paddingVertical: 10,
    gap: 14,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 11,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Color.modeBase200,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: '#000000',
  },
  topItem: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  topText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: '600',
    color: '#131118',
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#CCCCCC',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    paddingHorizontal: 12,
    width: "48%",
    borderWidth: 1,
    borderColor: Color.modeBase200,
    gap: 16,
  },
  productName: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.black,
    textAlign: "left",
  },
  productImage: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  priceContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 10,
    gap: 5,
  },
  price: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "bold",
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#000000",
  },
  oldPrice: {
    fontSize: FontSize.size_xs,
    color: "#B0B0B0",
    fontFamily: FontFamily.manropeMedium,
  },
  difference: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: "#CB0000",
  },
  button: {
    backgroundColor: "#6B2D92",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    textAlign: "center",
  },
  headerLeftIcon: {
    marginLeft: 10,
  },
});

const products = [
  {
    id: "1",
    name: "Swatch Indigo Glow (Ø 47.00)",
    price: "12,000 ALL",
    oldPrice: "11,500 ALL",
    difference: "+ 500 ALL",
    image: require("@assets/watch.png"),
  },
  {
    id: "2",
    name: "Swatch Indigo Glow (Ø 47.00)",
    price: "12,000 ALL",
    oldPrice: "11,500 ALL",
    difference: "+ 500 ALL",
    image: require("@assets/watch2.png"),
  },
  {
    id: "3",
    name: "Swatch Indigo Glow (Ø 47.00)",
    price: "12,000 ALL",
    oldPrice: "11,500 ALL",
    difference: "+ 500 ALL",
    image: require("@assets/watch2.png"),
  },
  {
    id: "4",
    name: "Swatch Indigo Glow (Ø 47.00)",
    price: "12,000 ALL",
    oldPrice: "11,500 ALL",
    difference: "+ 500 ALL",
    image: require("@assets/watch.png"),
  },
  {
    id: "5",
    name: "Swatch Indigo Glow (Ø 47.00)",
    price: "12,000 ALL",
    oldPrice: "11,500 ALL",
    difference: "+ 500 ALL",
    image: require("@assets/watch.png"),
  },

];
