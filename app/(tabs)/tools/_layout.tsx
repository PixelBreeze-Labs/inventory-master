import {
    Pressable,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from "react-native";
  import React from "react";
  import { Slot, Stack, useRouter } from "expo-router";
  import BellIcon from "@/components/icons/BellIcon";
  import Colors from "@/constants/Colors";
  
  const CustomerPagesLayout = () => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
              title: "Tools",
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
      </Stack>
    );
  };
  
  export default CustomerPagesLayout;
  
  const styles = StyleSheet.create({});
  