import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { AuthProvider } from '../contexts/AuthContext';
import {MenuProvider} from "react-native-popup-menu";
import { initializeFirebase, requestUserPermission } from '@/config/firebaseConfig';
import OverlayController from '@/components/OverlayController';
import { useAuth } from '@/hooks/useAuth';

export {
  ErrorBoundary,
} from 'expo-router';

// export const unstable_settings = {
//   initialRouteName: '(auth)/login',
// };

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMonoRegular: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);  

  const initFirebase = async () => {
    try {
      await initializeFirebase();
      requestUserPermission();
      setFirebaseInitialized(true);
    } catch (error) {
      console.error("Firebase initialization error:", error);
    }
  };

  useEffect(() => {
    initFirebase();
  }, []);


  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded && firebaseInitialized) {
      SplashScreen.hideAsync();
    }
  }, [loaded, firebaseInitialized]);

  if (!loaded || !firebaseInitialized) {
    return null;
  }
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MenuProvider>
        <AuthProvider>
        <RootLayoutNav />
        <OverlayController />
        {/* <Slot /> */}
        </AuthProvider>
      </MenuProvider>
      </ThemeProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null; // Or return a loading component
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
  </Stack>
  );
}