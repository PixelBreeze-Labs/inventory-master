// components/LoadingSpinner.tsx
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Color } from '@/GlobalStyles';

export const LoadingSpinner = ({ fullScreen = false }) => (
    <View style={[styles.loadingContainer, fullScreen && styles.fullScreen]}>
        <ActivityIndicator size="large" color={Color.textListPrimaryDay} />
    </View>
);

const styles = StyleSheet.create({
    loadingContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
    },
});