import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { Slot, Stack, useRouter } from "expo-router";
import BellIcon from "@/components/icons/BellIcon";
import Colors from "@/constants/Colors";
import CustomSwitch from "@/components/CustomSwitch";
import { Color } from "@/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";

const CustomerPagesLayout = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
            title: "Customers",
          headerRight: () => (
            <Pressable
              onPress={() => router.push("/notifications")}
              style={{ marginRight: 15 }}
            >
              {({ pressed }) => (
                <BellIcon
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="detail/[id]/index"
        options={{
          title: "Order Details",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color={Color.black} />
            </TouchableOpacity>
        ),
      }}
      />
      <Stack.Screen
        name="detail/[id]/order/order-list"
        options={{
          title: "Customer Orders",
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color={Color.black} />
              </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="detail/[id]/order/[orderId]/index"
        options={{
          title: "Order Detail",
        }}
      />
    </Stack>
  );
};

export default CustomerPagesLayout;

const styles = StyleSheet.create({});
