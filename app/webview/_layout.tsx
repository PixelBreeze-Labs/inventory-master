import {
    StyleSheet,
  } from "react-native";
  import React from "react";
  import { Stack } from "expo-router";
  
  const CustomerPagesLayout = () => {
    return (
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "WebView",
          }}
        />
      </Stack>
    );
  };
  
  export default CustomerPagesLayout;
  
  const styles = StyleSheet.create({});
  