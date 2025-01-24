import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "@/GlobalStyles";
import CustomerFilterModal from "@/app/(tabs)/customers/components/CustomerFilterModal";
import CustomerItemView from "./components/CustomerItemView";
import useCustomers from "@/hooks/useCustomers";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorState } from "@/components/ErrorState";

const CustomersScreen = () => {
  const [searchText, setSearchText] = React.useState("");
  const [isShowFilterModal, setIsShowFilterModal] = React.useState(false);
  const { customersList, isLoading, error, refresh } = useCustomers();
  
  if (isLoading && !customersList?.customers) {
    return (
      <View style={styles.emptyContainer}>
        <LoadingSpinner />
      </View>
    );
  }

  if (!isLoading && error) {
    return (
      <ErrorState message={error} onRetry={refresh} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={refresh}
        />
      }>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../../../assets/search-normal.png")}
            />
            <TextInput
              style={styles.searchText}
              placeholderTextColor={Color.textListPrimaryDay}
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
              }}
              placeholder="Search for customers"
            />
            <TouchableOpacity onPress={() => setIsShowFilterModal(true)}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../../../assets/setting-4.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Project */}
        <FlatList
          scrollEnabled={false}
          data={customersList?.customers}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => <CustomerItemView user={item} />}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowFilterModal}
        onRequestClose={() => setIsShowFilterModal(false)}
      >
        <CustomerFilterModal
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
    display: "flex",
    flexDirection: "column",
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 18,
    gap: 12,
  },
  searchContainer: {
    flexDirection: "row",
    // marginBottom: 10,
  },
  searchBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.modeBase00,
    borderRadius: Border.br_3xs,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
  },
  searchText: {
    flex: 1,
    marginLeft: 10,
    fontFamily: FontFamily.manropeBold,
    color: Color.textListPrimaryDay,
    fontSize: FontSize.textSmFontMedium_size,
    paddingRight: 10,
  },
  filterButton: {
    backgroundColor: Color.modeBase00,
    borderRadius: Border.br_3xs,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
  },
  icon: {
    width: 20,
    height: 20,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "600",
    color: "#28282B",
    marginTop: 10,
    width: "70%",
    textAlign: "center",
  },
});

export default CustomersScreen;
