import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomSwitch from './CustomSwitch'

const CommunicationPreferences = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Communication Preferences</Text>
            <View style={styles.card}>
                <PreferenceItem
                    title="Email"
                    description="Receive notifications to your email"
                    defaultValue={false}
                    disabled={false}
                />
                <PreferenceItem
                    title="SMS"
                    description="Receive notifications to your phone"
                    defaultValue={true}
                    disabled={true}
                />
            </View>
        </View>
    );
};

// @ts-ignore
const PreferenceItem = ({ title, description, defaultValue, disabled }) => (
    <View style={styles.preferenceItem}>
        <View style={styles.preferenceTextContainer}>
            <Text style={styles.preferenceTitle}>{title}</Text>
            <Text style={styles.preferenceDescription}>{description}</Text>
            {disabled && <Text style={styles.alwaysEnabledText}>Always on</Text>}
        </View>
        <CustomSwitch defaultChecked={defaultValue} disabled={disabled} />
    </View>
);
const styles = StyleSheet.create({
    container: {
        gap: 12,
    },
    title: {
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
    preferenceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    preferenceTitle: {
        fontWeight: '600',
    },
    preferenceDescription: {
        color: '#7B7B7B',
        fontSize: 12,
    },
    preferenceTextContainer: {
        flex: 1,
    },
    alwaysEnabledText: {
        color: '#4CAF50',
        fontSize: 12,
        fontWeight: '500',
        marginTop: 4,
    },
});

export default CommunicationPreferences;