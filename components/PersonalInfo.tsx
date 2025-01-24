import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// @ts-ignore
const PersonalInfo = ({ user }) => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Personal Information</Text>
                <View style={styles.card}>
                    <InfoItem label="Full name:" value={user.name} />
                    <InfoItem label="Email:" value={user.email} />
                    <InfoItem label="Phone:" value={user.phone} />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Employment Details</Text>
                <View style={styles.card}>
                    <InfoItem label="Position:" value={user.position} />
                    <InfoItem label="Department:" value={user.department} />
                    <InfoItem label="Employee ID:" value={user.employeeId} />
                    <InfoItem label="Start Date:" value={user.startDate} />
                    <InfoItem label="Work Schedule:" value={user.workShedule} />
                </View>
            </View>
        </View>
    );
};

// @ts-ignore
const InfoItem = ({ label, value }) => (
    <View style={styles.infoItem}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        gap: 20,
    },
    section: {
        gap: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        gap: 12,
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        color: '#484C52',
    },
    value: {
        fontWeight: 'bold',
    },
});

export default PersonalInfo;