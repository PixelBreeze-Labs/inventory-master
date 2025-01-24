import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import ProductItem from "./components/ProductItem";
import { router, Stack, useNavigation } from "expo-router";
import { Color } from "@/GlobalStyles";
import { products } from "@/constants/collections";
import ProductFilterModal from "./components/ProductFilterModal";
import { Ionicons } from "@expo/vector-icons";

const ProductsScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerTitle: "Products",
  });

  const [viewType, setViewType] = useState("list");
  const [isShowFilterModal, setIsShowFilterModal] = React.useState(false);
  const keyExtractor = viewType === "list" ? "listView" : "gridView";

  const renderItem = ({ item }: { item: any }) => (
    <ProductItem viewType={viewType} product={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
            title: "Products",
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color="#0f172a" />
              </TouchableOpacity>
          ),
        }}
      />

      <ScrollView>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Image
              source={require("@assets/search-normal.png")}
              style={styles.icon}
            />
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              placeholderTextColor="#A9A9A9"
            />
            <TouchableOpacity onPress={() => setIsShowFilterModal(true)}>
              <Image
                source={require("@assets/setting-4.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewToggle}>
            <TouchableOpacity onPress={() => setViewType("list")}>
              <View
                style={[
                  styles.iconButton,
                  viewType === "list" && styles.activeButton,
                ]}
              >
                <Image
                  source={require("@assets/ic_list_view.png")}
                  style={[styles.icon, viewType === "list" && styles.activeTintColor]}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setViewType("grid")}>
              <View
                style={[
                  styles.iconButton,
                  viewType === "grid" && styles.activeButton,
                ]}
              >
                <Image
                  source={require("@assets/ic_grid_view.png")}
                  style={[styles.icon, viewType === "grid" && styles.activeTintColor]}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={viewType === "grid" ? 2 : 1}
          contentContainerStyle={styles.productList}
          key={keyExtractor} // Changes key when layout type changes
        />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowFilterModal}
        onRequestClose={() => setIsShowFilterModal(false)}
      >
        <ProductFilterModal
          isVisible={isShowFilterModal}
          setModal={setIsShowFilterModal}
        />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#fff",
    height: 50,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingLeft: 8,
    paddingRight: 8,
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: "#000000",
  },
  viewToggle: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#d1d5db",
    borderWidth: 1,
    borderRadius: 12,
    padding: 4,
    marginLeft: 10,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: Color.primary,
    color: "#fff",
  },
  activeTintColor: {
    tintColor: "#fff",
  },
  productList: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});

export default ProductsScreen;
