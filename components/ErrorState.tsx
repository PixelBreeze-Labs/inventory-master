import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native';
import { Color, FontFamily, FontSize } from "@/GlobalStyles";


interface ErrorStateProps {
    message: string;
    onRetry: () => void;
    containerStyle?: object; // Allow custom container styling
    isRetrying?: boolean;    // Add loading state
}

export const ErrorState = ({
                               message,
                               onRetry,
                               containerStyle,
                               isRetrying = false
                           }: ErrorStateProps) => (
    <View style={[styles.errorContainer, containerStyle]}>
        <Text
            style={styles.errorText}
            accessible={true}
            accessibilityRole="text"
        >
            {message}
        </Text>
        <TouchableOpacity
            style={[
                styles.retryButton,
                isRetrying && styles.retryButtonDisabled
            ]}
            onPress={onRetry}
            disabled={isRetrying}
            accessible={true}
            accessibilityLabel="Retry button"
            accessibilityRole="button"
            accessibilityHint="Taps to retry the failed operation"
        >
            {isRetrying ? (
                <ActivityIndicator color={Color.modeBase00} size="small" />
            ) : (
                <Text style={styles.retryButtonText}>Try Again</Text>
            )}
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    errorContainer: {
        minHeight: 300, // Minimum height instead of flex: 1
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorIcon: {
        width: 60,
        height: 60,
        marginBottom: 16,
    },
    errorText: {
        fontFamily: FontFamily.manropeMedium,
        fontSize: FontSize.textBaseFontRegular_size,
        color: Color.textListPrimaryDay,
        textAlign: 'center',
        marginBottom: 16,
        maxWidth: '80%', // Prevent too wide text
    },
    retryButton: {
        backgroundColor: Color.textListPrimaryDay,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        minWidth: 120, // Ensure consistent button width
        alignItems: 'center',
        justifyContent: 'center',
    },
    retryButtonDisabled: {
        opacity: 0.7,
    },
    retryButtonText: {
        color: Color.modeBase00,
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
    },
});