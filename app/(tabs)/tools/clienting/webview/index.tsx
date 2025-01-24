import { Ionicons } from '@expo/vector-icons';
import { router, Stack, useLocalSearchParams, useNavigation } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  const { url,title } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: title ?  title as string : 'Webview',
          headerLeft: () => (
            //@ts-ignore
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
      {/* @ts-ignore */}
      <WebView source={{ uri: url }} style={{ height: '100%', width: '100%', overflow: 'hidden' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});

export default WebViewScreen;
