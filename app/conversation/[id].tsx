import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { messages } from '@/constants/collections';
import { Color } from '@/GlobalStyles';

const ConversationPage = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [message, setMessage] = useState('');
    const scrollViewRef = useRef<ScrollView>(null);
    const inputRef = useRef<TextInput>(null);

    // Assume we have a function to get the conversator's name based on id
    const getConversatorName = (id: string) => {
        // This should be replaced with actual logic to get the name
        return "Jenny Doe";
    };

    const conversatorName = getConversatorName(id as string);

    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const handleSend = () => {
        if (message.trim()) {
            // Handle sending message logic here
            setMessage('');
            inputRef.current?.focus();
        }
    };

    return (
        <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <Stack.Screen
                options={{
                    title: conversatorName,
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color={Color.black} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <ScrollView
                ref={scrollViewRef}
                style={styles.messagesContainer}
                contentContainerStyle={styles.messagesContent}
            >
                {messages.map((message) => (
                    <View
                        key={message.id}
                        style={[
                            styles.messageWrapper,
                            message.sender === "user" ? styles.userMessage : styles.otherMessage
                        ]}
                    >
                        <View style={[
                            styles.messageBubble,
                            message.sender === "user" ? styles.userBubble : styles.otherBubble
                        ]}>
                            {message.reply && (
                                <View style={styles.replyContainer}>
                                    <View style={styles.replyBar} />
                                    <Text style={styles.replyName}>You</Text>
                                    <Text style={styles.replyContent}>{message.reply}</Text>
                                </View>
                            )}
                            <Text style={[
                                styles.messageContent,
                                message.sender === "user" ? styles.userContent : styles.otherContent
                            ]}>
                                {message.content}
                            </Text>
                            <Text style={[
                                styles.messageTime,
                                message.sender === "user" ? styles.userTime : styles.otherTime
                            ]}>
                                {message.timestamp}
                                {message.sender === "user" && " • Read"}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput
                    ref={inputRef}
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type a message here"
                    multiline
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Ionicons name="send" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backButton: {
        fontSize: 16,
        color: '#007AFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    headerTitle: {
        marginLeft: 16,
        fontSize: 18,
        fontWeight: 'bold',
    },
    messagesContainer: {
        flex: 1,
    },
    messagesContent: {
        padding: 16,
    },
    messageWrapper: {
        marginBottom: 16,
        flexDirection: 'row',
    },
    userMessage: {
        justifyContent: 'flex-end',
    },
    otherMessage: {
        justifyContent: 'flex-start',
    },
    messageBubble: {
        maxWidth: '80%',
        padding: 12,
        borderRadius: 20,
    },
    userBubble: {
        backgroundColor: '#5C1C81',
        borderBottomRightRadius: 4,
    },
    otherBubble: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 4,
    },
    messageContent: {
        fontSize: 16,
    },
    userContent: {
        color: 'white',
    },
    otherContent: {
        color: 'black',
    },
    messageTime: {
        fontSize: 12,
        marginTop: 4,
    },
    userTime: {
        color: 'rgba(255, 255, 255, 0.7)',
    },
    otherTime: {
        color: '#ADB5BD',
    },
    replyContainer: {
        backgroundColor: '#EDEDED',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
    },
    replyBar: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 4,
        backgroundColor: '#5C1C81',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    replyName: {
        color: '#5C1C81',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    replyContent: {
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#5C1C81',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        maxHeight: 100,
    },
    sendButton: {
        marginLeft: 8,
        backgroundColor: '#5C1C81',
        borderRadius: 20,
        padding: 8,
    },
});

export default ConversationPage;