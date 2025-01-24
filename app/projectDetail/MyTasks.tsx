import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import { router } from 'expo-router';

const tasks = [
    { id: '1', title: 'Create Wireframe', subtitle: 'Task Subtitle', time: '20 h', completed: false },
    { id: '2', title: 'Slack Logo Design', subtitle: 'Task Subtitle', time: '20 h', completed: false },
    { id: '3', title: 'Dashboard Design', subtitle: 'Task Subtitle', time: '20 h', completed: false },
    { id: '4', title: 'Create style', subtitle: 'Task Subtitle', time: '20 h', completed: true },
    { id: '5', title: 'Slack Logo Design', subtitle: 'Task Subtitle', time: '20 h', completed: true },
    { id: '6', title: 'App Icon Design', subtitle: 'Task Subtitle', time: '20 h', completed: false },
];

const TaskItem = ({ title, subtitle, time, completed }: any) => {
    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskSubContainer}>
            <View style={styles.taskLeft}>
                {
                    completed ? (
                        <Image
                            style={styles.checkIcon}
                            // @ts-ignore
                            contentFit="cover"
                            source={require("../../assets/complitedTask.png")}
                        />
                    ) : (
                        <Image
                            style={styles.checkIcon}
                            // @ts-ignore
                            contentFit="cover"
                            source={require("../../assets/uncomplitedtask.png")}
                        />
                    )
                }
                <View style={styles.textContainer}>
                    <Text style={[styles.title, completed && styles.completedText]}>{title}</Text>
                    <Text style={[styles.subtitle, completed && styles.completedText]}>{subtitle}</Text>
                </View>
            </View>
            <View style={styles.taskRight}>
                <Text style={styles.timeText}>{time}</Text>
                <TouchableOpacity onPress={() => router.push("/timeTracking")}>
                    <Ionicons name="add-circle-outline" size={24} color={Color.primary} />
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

const MyTasks = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>My Tasks <Text style={styles.taskCountText}>(05)</Text></Text>
                <TouchableOpacity>
                <Image
                    style={styles.iconThreeDot}
                    // @ts-ignore
                    contentFit="cover"
                    source={require("../../assets/ellipsishorizontalsharp.png")}
                />
                </TouchableOpacity>
            </View>
            <FlatList
                scrollEnabled={false}
                data={tasks}
                renderItem={({ item }) => (
                    <TaskItem
                        title={item.title}
                        subtitle={item.subtitle}
                        time={item.time}
                        completed={item.completed}
                    />
                )}
                contentContainerStyle={{  }}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 16,
        backgroundColor: '#fff',
        borderRadius: Border.br_5xs,
    },
    sectionTitleContainer:{
        color: '#111827',
        borderBottomWidth: 1,
        padding: 16,
        borderBottomColor: '#E5E7EB',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconThreeDot:{
        width: 24,
        height: 24,
    },
    sectionTitle: {
        fontSize: FontSize.textBaseFontRegular_size,
        fontWeight: '700',
        color: '#111827',
    },
    taskCountText:{
        color: Color.gray3,
        fontFamily: FontFamily.manropeMedium,
        fontSize: FontSize.textBaseFontRegular_size,
    },
    taskContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    taskSubContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    taskLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 10,
    },
    title: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeBold,
        fontWeight: '700',
        color: Color.textListPrimaryDay
    },
    subtitle: {
        fontSize: 14,
        color: '#6c6c6c',
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#9e9e9e',
    },
    timeText: {
        fontSize: FontSize.size_xs,
        marginRight: 10,
        color: Color.colorGray_300
    },
    checkIcon: {
        height: 28,
        width: 28,
        marginRight: 8,
    },
    taskRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default MyTasks;
