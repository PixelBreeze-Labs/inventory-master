import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";

const filterDropdownData = [
  { label: "Pending", value: "pending" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Completed", value: "completed" },
];

// StatusBadge component
const StatusBadge = ({ status }: any) => {
  const statusStyles: any = {
    Pending: { backgroundColor: "#FF9C0110", color: "#FF9C01" },
    Cancelled: { backgroundColor: "#CB000010", color: "#CB0000" },
    Delivered: { backgroundColor: "#0C940910", color: "#0C9409" },
  };

  return (
    <View
      style={[
        styles.statusBadge,
        { backgroundColor: statusStyles[status].backgroundColor },
      ]}
    >
      <Text style={[styles.statusText, { color: statusStyles[status].color }]}>
        {status}
      </Text>
    </View>
  );
};

// OrderCard component
const OrderCard = ({ order, userId }: any) => (
  <TouchableOpacity style={styles.cardContainer} key={order.id} onPress={() => router.push(`/customers/detail/${userId}/order/${order.id}`)}>
    <View style={styles.orderDetails}>
      <View style={styles.row}>
        <Image
          style={styles.orderIcon}
          source={require("../../../../../../assets/ic_order_info.png")}
        ></Image>
        <Text style={styles.orderNumber}>Order #{order.id}</Text>
        <StatusBadge status={order.status} />
      </View>
      <View style={styles.price_time_container}>
        <View style={styles.row}>
          <Ionicons name="pricetag" size={20} color="#BCBCBC" />
          <Text style={styles.price}>{order.price} ALL</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="time-sharp" size={20} color="#BCBCBC" />
          <Text style={styles.date}>{order.date}</Text>
        </View>
      </View>
    </View>
      <Entypo name="chevron-thin-right" size={20} color="#808089" />
  </TouchableOpacity>
);

// OrderListScreen component
const OrderListScreen = () => {
  const navigation = useNavigation();
  
  const orders = [
    { id: 2100, status: "Pending", price: "12,000", date: "20/10/2024" },
    { id: 2101, status: "Cancelled", price: "12,000", date: "20/10/2024" },
    { id: 2102, status: "Delivered", price: "12,000", date: "20/10/2024" },
    { id: 2103, status: "Delivered", price: "12,000", date: "20/10/2024" },
    { id: 2104, status: "Delivered", price: "12,000", date: "20/10/2024" },
  ];

  const { id } = useLocalSearchParams();

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter by </Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={filterDropdownData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={"Status"}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <Image
              style={[styles.orderIcon, { marginRight: 10 }]}
              source={require("../../../../../../assets/ic_setting_dropdown.png")}
            ></Image>
          )}
        />
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString() + item.status}
        renderItem={({ item }) => <OrderCard order={item} userId={id} />}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerLeftIcon: {
    marginLeft: 10,
  },
  container: {
    height: "100%",
    backgroundColor: "#F7FAFC",
  },
  filterContainer: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 30,
    paddingHorizontal: 16,
  },
  filterText: {
    fontSize: FontSize.textSmFontMedium_size,
    color: "#00000050",
    paddingRight: 10,
  },
  dropdown: {
    height: 40,
    width: 150,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: FontSize.textBaseFontRegular_size,
    color: "#3B3C3F",
  },
  selectedTextStyle: {
    fontSize: FontSize.textBaseFontRegular_size,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: FontSize.textBaseFontRegular_size,
  },
  listContainer: {
    height: "100%",
    padding: 16,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  orderIcon: {
    height: 16,
    width: 16,
    objectFit: "contain",
  },
  orderDetails: {
    flex: 1,
    gap: 8,
  },
  row: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  orderNumber: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: "#1A202C",
    marginRight: 8,
  },
  price_time_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusBadge: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  statusText: {
    fontSize: FontSize.size_xs,
  },
  price: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "900",
    fontFamily: FontFamily.manropeBold,
    color: Color.modeAlpha900,
    marginVertical: 4,
  },
  dateIcon: {
    marginRight: 4,
    color: "#A0AEC0",
  },
  date: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.textContentSecondaryDay,
  },
  arrow: {
    fontSize: 18,
    color: "#A0AEC0",
  },
});

export default OrderListScreen;
