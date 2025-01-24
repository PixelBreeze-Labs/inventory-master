import FilterIcon from "@/assets/notifications/FilterIcon";
import SettingIcon from "@/assets/notifications/SettiongIcon";
import { notifications as defaultNotifications } from "@/constants/collections";
import { Color } from "@/GlobalStyles";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import NotificationItemView from "./components/NotificationItemView";
import { router, useNavigation } from "expo-router";
import ProfileIcon from "@/assets/notifications/ProfileIcon";
import Popover from "react-native-popover-view";
import NotificationSettingModal from "./components/NotificationSettingModal";
import {Ionicons} from "@expo/vector-icons";

const NotificationsScreen = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [settingModalVisible, setSettingModalVisible] = useState(false);

  const [notifications, setNotifications] =
    useState(defaultNotifications);
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: "Notifications",
  });

  const onPressTabHandler = (tab: number) => {
    setSelectedTab(tab);
  };

  navigation.setOptions({
    headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeftIcon}>
          <Ionicons name="arrow-back" size={24} color={Color.black} />
        </TouchableOpacity>
    ),
    headerRight: () => (
      <Pressable
        style={styles.headerRightIcon}
        onPress={() => router.push("/(tabs)/account")}
      >
        <ProfileIcon color={Color.black} />
      </Pressable>
    ),
  });

  useEffect(() => {
    // Filter notifications data based on read or not
    const newNotifications = defaultNotifications.filter((notification: any) =>
      selectedTab == 1 ? !notification.read : notification.read
    );
    setNotifications(newNotifications);
  }, [selectedTab]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabBarView}>
        <View style={styles.leftSideView}>
          <Pressable
            style={[
              styles.newNotificationTab,
              selectedTab == 1 ? styles.activeTabBorderBottom : {},
            ]}
            onPress={() => onPressTabHandler(1)}
          >
            <Text
              style={[
                styles.buttonPlaceHoder,
                selectedTab == 1 ? styles.activeTabPlaceholder : {},
              ]}
            >
              New
            </Text>
            <View style={styles.counts}>
              <Text style={styles.countsText}>10</Text>
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.newNotificationTab,
              selectedTab == 2 ? styles.activeTabBorderBottom : {},
            ]}
            onPress={() => onPressTabHandler(2)}
          >
            <Text
              style={[
                styles.buttonPlaceHoder,
                selectedTab == 2 ? styles.activeTabPlaceholder : {},
              ]}
            >
              Read
            </Text>
            {/* <View style={styles.counts}>
                <Text style={styles.countsText}>10</Text>
            </View> */}
          </Pressable>
        </View>
        <View style={styles.rightSideView}>
          <TouchableOpacity style={styles.newTabIcons} onPress={() => setSettingModalVisible(true)}>
            <SettingIcon color={"#64748B"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.newTabIcons}>
            <FilterIcon color={"#64748B"} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Notification List */}
      <FlatList
        data={notifications}
        renderItem={({ item, index }) => (
          <NotificationItemView key={index} data={item} index={index} />
        )}
      />
      <Modal
                animationType="slide"
                transparent={true}
                visible={settingModalVisible}
                onRequestClose={() => setSettingModalVisible(false)}
            >
               <NotificationSettingModal setEditModalVisible={setSettingModalVisible}/>
            </Modal>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6f7",
    width: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  placeholder: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  tabBarView: {
    height: 50,
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
    borderBottomWidth: 0.5,
    borderColor: "#E5E7EB",
  },
  leftSideView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  rightSideView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  newTab: {},
  newNotificationTab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 18,
    marginRight: 5,
    // width: 100,
  },
  activeTabBorderBottom: {
    borderBottomWidth: 3,
    borderBottomColor: Color.black,
  },
  counts: {
    padding: 5,
    fontSize: 14,
    borderRadius: 50,
    backgroundColor: "#F2F4F7",
    marginLeft: 5,
  },
  countsText: {
    color: Color.black,
    fontWeight: "600",
    fontSize: 12,
  },
  buttonPlaceHoder: {
    fontSize: 16,
    fontWeight: "400",
    color: Color.black,
  },
  activeTabPlaceholder: {
    fontSize: 16,
    fontWeight: "600",
  },
  newTabIcons: {
    marginLeft: 12,
  },
  headerRightIcon: {
    height: 30,
    width: 30,
  },
  headerLeftIcon: {
    marginLeft: 10,
  },
});

export default NotificationsScreen;
