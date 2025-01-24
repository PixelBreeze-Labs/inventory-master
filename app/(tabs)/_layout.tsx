import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { Image, Platform, Pressable, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useAuth } from '../../hooks/useAuth';
import { useClientOnlyValue } from "../../components/useClientOnlyValue";
import BellIcon from '../../components/icons/BellIcon';
import CogIcon from '../../components/icons/CogIcon';
import DashboardIcon from '@/assets/tabIcons/DashboardIcon';
import TasksIcon from '@/assets/tabIcons/CustomerIcon';
import ChatIcon from '@/assets/tabIcons/ChatIcon';
import ShiftsIcon from '@/assets/tabIcons/ShiftsIcon';
import TrainingIcon from '@/assets/tabIcons/TrainingIcon';
import { Color } from '@/GlobalStyles';
import ToolsIcon from '@/assets/tabIcons/ShiftsIcon';
import { getFirebaseToken } from '@/config/firebaseConfig';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
}) {
    return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    
    const  [activeTab, setActiveTab] = React.useState('dashboard');
    if (!isAuthenticated) {
        return null;
    }

    useEffect(() => {
      const getToken = async () => {
        const token = await getFirebaseToken()
        console.log('Firebase token:', token);
      }
      getToken()
    }, [])
    
    const activeTabCSS = {
        borderTopWidth: 2,
        borderColor: Color.primary
    };
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: useClientOnlyValue(false, true),
                tabBarStyle: {
                    paddingHorizontal: 18,
                    height: Platform.OS === 'ios' ? 80 : 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            }}
            screenListeners={{
                // Monitor tab press and if 'test' tab is pressed, toggle value in zustand to trigger refetching of data from server
                focus: (e: any) => {
                    const parts = e.target.split("-");
                    const tabName = parts[0];
                    setActiveTab(tabName);
                }
              }}>
            <Tabs.Screen
                name="dashboard"
                options={{
                    // header: () => null,
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color }) => <DashboardIcon color={color} />,
                    tabBarItemStyle: activeTab == 'dashboard' ? activeTabCSS : {},  
                }}
            />
            <Tabs.Screen
                name="customers"
                options={{
                    header: () => null,
                    title: 'Customers',
                    tabBarIcon: ({ color }) => <TasksIcon color={color} />,
                    tabBarItemStyle: activeTab == 'customers' ? activeTabCSS : {},  
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    headerShown: false,
                    title: 'Chat',
                    tabBarIcon: ({ color }) => <ChatIcon color={color} />,
                    tabBarItemStyle: activeTab == 'chat' ? activeTabCSS : {},  
                }}
            />
            <Tabs.Screen
                name="tools"
                options={{
                    header: () => null,
                    title: 'Tools',
                    tabBarIcon: ({ color }) => <ToolsIcon color={color} />,
                    tabBarItemStyle: activeTab == 'tools' ? activeTabCSS : {},  
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color }) => <TrainingIcon name="person-outline" color={color} />,
                    tabBarItemStyle: activeTab == 'account' ? activeTabCSS : {},  
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 15 }}>
                            <Pressable onPress={() => router.push('/settings')} style={{ marginRight: 15 }}>
                                {({ pressed }) => (
                                    <CogIcon
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{ opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                            <Pressable onPress={() => router.push('/notifications')}>
                                {({ pressed }) => (
                                    <BellIcon
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{ opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}