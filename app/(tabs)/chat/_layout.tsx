import {
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import BellIcon from "@/components/icons/BellIcon";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const ChatPagesLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
            title: "Chat",
            headerRight: () => (
              <Pressable onPress={() => router.push('/notifications')} style={{ marginRight: 15 }}>
                  {({ pressed }) => (
                      <BellIcon
                          color={Colors[colorScheme ?? 'light'].text}
                          style={{ opacity: pressed ? 0.5 : 1 }}
                      />
                  )}
              </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="conversation/[id]"
        options={{
            headerLeft: () => (
              <Pressable onPress={() => router.back()} style={{ marginRight: 15 }}>
                  {({ pressed }) => (
                      <Ionicons
                        color={Colors[colorScheme ?? 'light'].text}
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

export default ChatPagesLayout;

const styles = StyleSheet.create({});
