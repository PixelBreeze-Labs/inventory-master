import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Border, FontSize } from '@/GlobalStyles';

const ProjectMembers = () => {
    const members = [
        { id: '1', name: 'Emily Johns', role: 'Project Manager' },
        { id: '2', name: 'Laura Will', role: 'UI/UX Designer' },
        { id: '3', name: 'Arlene McCoy', role: 'Web Designer' },
        { id: '4', name: 'John Kerry', role: 'Software Dev' },
    ];

    const renderMember = ({ item }: any) => (
        <View style={styles.memberCard}>
            <View style={styles.avatarContainer}>
                {/* <FontAwesome name="user-circle" size={40} color="#6B7280" /> */}
                <Image
                    style={styles.avatarStyle}
                    // @ts-ignore
                    contentFit="cover"
                    source={require("../../assets/avtarImage.png")}
                />
            </View>
            <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{item.name}</Text>
                <Text style={styles.memberRole}>{item.role}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.sectionTitleContainer}>
                <Text style={styles.sectionTitle}>Project Members</Text>
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
                data={members}
                renderItem={renderMember}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // padding: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: Border.br_5xs,
        shadowColor: '#000'
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
    iconThreeDot:{
        width: 24,
        height: 24,
    },
    sectionTitle: {
        fontSize: FontSize.textBaseFontRegular_size,
        fontWeight: '700',
        color: '#111827',
    },
    listContainer: {
        gap: 12,
        paddingHorizontal: 16,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        paddingBottom: 12,
        // gap: 12,
    },
    memberCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        flex: 0.48,
    },
    avatarContainer: {
        marginRight: 12,
    },
    memberInfo: {
        flex: 1,
    },
    avatarStyle:{
        width: 42,
        height: 42,
        borderRadius: 20,
    },
    memberName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
    },
    memberRole: {
        fontSize: FontSize.size_xs,
        color: '#6B7280',
        marginTop: 2,
    },
});

export default ProjectMembers;
