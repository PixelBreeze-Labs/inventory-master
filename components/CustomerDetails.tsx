import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Border, Color, FontFamily, FontSize} from '@/GlobalStyles';

// @ts-ignore
const LoyaltyStatuses = ({ loyalty_level }) => {
    const loyaltyLevelColor = {
        Bronze: {
            bg: '#FFF3E3',
            text: '#D6925D',
        },
        Active: {
            bg: '#17ce8c33',
            text: '#17CE8C',
        },
        // ... other status colors
    };

    // @ts-ignore
    const statusStyle = loyaltyLevelColor[loyalty_level] || loyaltyLevelColor.Bronze;

    return (
        <View style={[styles.statusContainer, { backgroundColor: statusStyle.bg }]}>
            <Text style={[styles.statusText, { color: statusStyle.text }]}>
                {loyalty_level}
            </Text>
        </View>
    );
};
type Props = {
    customer: any;
    showArrow?: boolean;
    showClose?: boolean;
    onClick?: () => void;
    onRemove?: () => void;
};

// @ts-ignore
const CustomersDetails = ({ customer, showArrow = true, showClose = false, onClick, onRemove }:Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onClick}
        >
            {showClose && (
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={onRemove}
                >
                    <Ionicons name="close" size={16} color={Color.textContentSecondaryDay} />
                </TouchableOpacity>
            )}

            <View style={styles.content}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        {customer.name.slice(0, 2).toUpperCase()}
                    </Text>
                </View>

                <View style={styles.info}>
                    <View style={styles.header}>
                        <Text style={styles.name}>{customer.name}</Text>
                        <LoyaltyStatuses loyalty_level={customer.loyalty_level} />
                    </View>
                    <Text style={styles.email}>{customer.email}</Text>
                </View>

                {showArrow && (
                    <Ionicons name="chevron-forward" size={24} color={Color.textContentSecondaryDay} />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: Color.modeBase00,
        borderRadius: 20,
        height: 25,
        width: 25,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#5C1C81',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: Color.modeBase00,
        fontSize: FontSize.textBaseFontRegular_size,
        fontFamily: FontFamily.manropeBold,
        fontWeight: 'bold',
    },
    info: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        gap: 14,
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeSemiBold,
        color: '#182135',
        fontWeight: '600',
    },
    email: {
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.manropeRegular,
        fontWeight: '400',
        color: '#626264',
    },
    statusContainer: {
        paddingHorizontal: 9,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.manropeMedium,
        fontWeight: 'bold',
    },
});

export default CustomersDetails;