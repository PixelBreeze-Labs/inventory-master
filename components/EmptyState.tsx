import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '@/GlobalStyles';

type Props = {
    title: string
    description: string
    icon?: any
}

const EmptyState = (props: Props) => {
    const { title, description, icon } = props
    return (
        <View style={styles.emptyStateContainer}>
            {icon && <Image
                style={styles.emptyStateIcon}
                resizeMode="contain"
                source={icon}
            />}
            <View style={styles.textContainer}>
                <Text style={styles.emptyStateTitle}>{title}</Text>
                <Text style={styles.emptyStateDescription}>{description}</Text>
            </View>
        </View>
    );
}

export default EmptyState

const styles = StyleSheet.create({
    emptyStateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12, // Reduced from 16
    },
    emptyStateIcon: {
        width: 48, // Reduced from 65
        height: 48, // Reduced from 65
        marginBottom: 4, // Added to bring text closer
    },
    textContainer: {
        alignItems: 'center',
        gap: 4, // Small gap between title and description
    },
    emptyStateTitle: {
        fontSize: FontSize.textXlFontSemibold_size,
        fontFamily: FontFamily.manropeSemiBold,
        color: Color.modeAlpha900,
        fontWeight: '600',
        textAlign: 'center',
        width: '70%',
    },
    emptyStateDescription: {
        fontSize: FontSize.textBaseFontRegular_size,
        fontFamily: FontFamily.manropeRegular,
        color: Color.colorGray_300,
        textAlign: 'center',
        width: '70%',
        marginTop: -2, // Brings description slightly closer to title
    },
})