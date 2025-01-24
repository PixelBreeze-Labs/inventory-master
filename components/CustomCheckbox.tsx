// components/CustomCheckbox.tsx
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '@/GlobalStyles';

interface CustomCheckboxProps {
    label: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const CustomCheckbox = ({ label, value, onValueChange }: CustomCheckboxProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onValueChange(!value)}
        >
            <View style={[styles.checkbox, value && styles.checked]}>
                {value && <Ionicons name="checkmark" size={16} color="white" />}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        backgroundColor: Color.primary,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default CustomCheckbox;