import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SingleChatProps } from '@/interfaces/chat';

const SingleChat = ({ chat }: SingleChatProps) => {
    const router = useRouter();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => router.push(`/conversation/${chat.id}`)}
        >
            <View style={styles.avatarContainer}>
                {chat.isOnline && <View style={styles.onlineIndicator} />}
                {chat.avatar ? (
                    <Image source={chat.avatar} style={styles.avatar} />
                ) : (
                    <View style={styles.avatarPlaceholder}>
                        <Text style={styles.avatarText}>
                            {chat.name.slice(0, 2).toUpperCase()}
                        </Text>
                    </View>
                )}
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.nameTimeContainer}>
                    <Text style={styles.name}>{chat.name}</Text>
                    <Text style={styles.time}>{chat.time}</Text>
                </View>
                <Text style={styles.message} numberOfLines={1}>
                    {chat.message}
                </Text>
            </View>
            {chat.unread && (
                <View style={styles.unreadContainer}>
                    <Text style={styles.unreadText}>{chat.unread}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    avatarPlaceholder: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#5C1C81',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#2CC069',
        borderWidth: 2,
        borderColor: 'white',
        zIndex: 1,
    },
    contentContainer: {
        flex: 1,
        marginLeft: 16,
    },
    nameTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    time: {
        fontSize: 12,
        color: '#A4A4A4',
    },
    message: {
        fontSize: 14,
        color: '#ADB5BD',
        marginTop: 4,
    },
    unreadContainer: {
        backgroundColor: '#EFD4FF',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    unreadText: {
        color: '#5C1C81',
        fontWeight: 'bold',
        fontSize: 12,
    },
});

export default SingleChat;