import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Border, Color, FontSize } from '@/GlobalStyles';

const ProjectStatus = () => {
    const projects = [
        {
            id: '1',
            title: 'Marketing Page Redesign',
            progress: 100,
            status: 'On Track',
            statusColor: '#219653', // Green
            date: '14 Mar',
        },
        {
            id: '2',
            title: 'Pitch Deck',
            progress: 70,
            status: 'At Risk',
            statusColor: '#F59E0B', // Orange
            date: '19 Mar',
        },
        {
            id: '3',
            title: 'New iOS Development',
            progress: 85,
            status: 'Off Track',
            statusColor: '#EF4444', // Red
            date: '25 Mar',
        },
    ];

    const renderProject = ({ item }: any) => (
        <View style={styles.projectCard}>
            <View style={styles.projectInfo}>
                <View style={styles.statusIcon}>
                    <Ionicons
                    name={item.progress === 100 ? 'checkmark-circle' : 'ellipse-outline'}
                    size={24}
                    color={item.progress === 100 ? 'green' : '#BDBDBD'}
                />
                </View>
                <View style={styles.projectDetails}>
                    <Text style={styles.projectTitle}>{item.title}</Text>
                    <View style={styles.progressBarContainer}>
                        <Progress.Bar
                            progress={item.progress / 100}
                            width={160}
                            height={6}
                            color={item.statusColor}
                            unfilledColor="#F3F4F6"
                            borderWidth={0}
                            style={styles.progressBar}
                        />
                        <Text style={styles.progressText}>{`${item.progress}%`}</Text>
                    </View>
                </View>

                <View style={styles.statusInfo}>
                    <View style={styles.dateContainer}>
                        <View style={[styles.dateIcon, { backgroundColor: item.statusColor }]}></View>
                        <Text style={[styles.statusText, { color: item.statusColor }]}>
                            {item.status}
                        </Text>
                    </View>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>Project Status</Text>
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
                showsVerticalScrollIndicator={false}
                data={projects}
                renderItem={renderProject}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_5xs,
    },
    sectionTitleContainer:{
        marginBottom: 12,
        color: '#111827',
        borderBottomWidth: 1,
        padding: 16,
        borderBottomColor: '#E5E7EB',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: FontSize.textBaseFontRegular_size,
        fontWeight: '700', 
    },
    listContainer: {
        gap: 12,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    projectCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    progressBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    projectInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusIcon: {
        marginRight: 12,
    },
    projectDetails: {
        flex: 1,
    },
    projectTitle: {
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 4,
    },
    progressBar: {
        borderRadius: 4,
    },
    progressText: {
        fontSize: FontSize.size_xs,
        fontWeight: '600',
        color: '#6B7280',
        marginLeft: 8,
    },
    statusInfo: {
        width: '20%'
    },
    statusText: {
        fontSize: FontSize.size_xs,
        fontWeight: '600',
        marginBottom: 4,
    },
    dateContainer: {
        flex: 1,
        gap: 4,
        alignItems: 'center',
        flexDirection: 'row',
    },
    dateIcon: {
        backgroundColor: '#F3F4F6',
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    dateText: {
        fontSize: FontSize.size_xs,
        color: '#9CA3AF',
    },
    iconThreeDot:{
        width: 24,
        height: 24,
    }
});

export default ProjectStatus;
