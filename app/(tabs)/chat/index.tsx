import React from 'react';
import { View, TextInput, FlatList, StyleSheet, TouchableOpacity, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Chat } from '@/interfaces/chat';
import { Color, FontFamily, FontSize } from '@/GlobalStyles';
import SingleChat from '@/components/SingleChat';

const ChatScreen = () => {
    const chats: Chat[] = [
        {
            id: 1,
            name: "Alice Johnson",
            message: "Hey, how's it going?",
            time: "2m ago",
            unread: 2,
            isOnline: true,
        },
        {
            id: 2,
            name: "Bob Smith",
            message: "Can you send me that file?",
            time: "15m ago",
            isOnline: false,
        },
        {
            id: 3,
            name: "Charlie Brown",
            message: "Lunch at 1pm?",
            time: "17/6",
            isOnline: false,
        },
        {
            id: 4,
            name: "Diana Ross",
            message: "Great job on the presentation!",
            time: "3h ago",
            isOnline: false,
        },
        {
            id: 5,
            name: "Ethan Hunt",
            message: "Mission accomplished 😎",
            time: "5h ago",
            isOnline: true,
        },
        {
            id: 6,
            name: "Frankie Vega",
            message: "Happy birthday!",
            time: "17/6",
            isOnline: false,
        },
        {
            id: 7,
            name: "Grace Cooper",
            message: "Thanks for the reminder!",
            time: "15/6",
            isOnline: true,
        },
    ];

    const [selectedTab, setSelectedTab] = React.useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <Pressable style={[styles.tabItem, selectedTab == 0 && styles.selectedTabItem]} onPress={() => setSelectedTab(0)}>
                    <Text style={[styles.tabText, selectedTab == 0 && styles.selectedTabText]}>Customers</Text>
                </Pressable>
                <Pressable style={[styles.tabItem, selectedTab == 1 && styles.selectedTabItem]} onPress={() => setSelectedTab(1)}>
                    <View style={styles.row}>
                    <Text style={[styles.tabText, selectedTab == 1 && styles.selectedTabText]}>Staff </Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>2</Text>
                    </View>
                    </View>
                </Pressable>
            </View>
            <View style={styles.searchContainer}>
                <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search chats"
                    style={styles.searchInput}
            />
            </View>
            <FlatList
                data={chats}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <SingleChat chat={item} />}
                contentContainerStyle={styles.chatList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    searchContainer: {
        padding: 16,
        position: 'relative',
    },
    searchIcon: {
        position: 'absolute',
        left: 28,
        top: 28,
        zIndex: 1,
    },
    searchInput: {
        backgroundColor: '#F2F2F2',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 36,
    },
    chatList: {
        paddingHorizontal: 16,
    },
    tabContainer:{
        marginTop: 16,
        marginHorizontal: 16,
        backgroundColor: '#F2F2F2',
        borderRadius: 14,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 6,
        paddingHorizontal: 10,
    },
    tabItem: {
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    selectedTabItem: {
        backgroundColor: Color.modeBase00,
    },
    tabText: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeMedium,
        fontWeight: '500',
        color: '#999999',
    },
    selectedTabText: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeMedium,
        fontWeight: '500',
        color: Color.black,
    },
    badge: {
        backgroundColor: '#EFD4FF',
        borderRadius: 10,
        padding: 2,
        paddingHorizontal: 4,
        marginLeft: 4,
    },
    badgeText: {
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.manropeBold,
        fontWeight: '800',
        color: '#5C1C81',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default ChatScreen;