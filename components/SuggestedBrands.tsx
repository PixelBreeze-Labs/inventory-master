import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';

const brandData = [
    {
        name: "Swarovski",
        suggestions: "19 Products suggestions",
        image: require("@assets/brand.png"),
    },
    {
        name: "Swatch",
        suggestions: "22 Products suggestions",
        image: require("@assets/swatch_img.png"),
    },
    {
        name: "Mopita",
        suggestions: "5 Products suggestions",
        image: require("@assets/mopita_img.png"),
    },
];

const SuggestedBrands = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Suggested Brands</Text>
            <View style={styles.brandsList}>
                {brandData.map((brand, index) => (
                    <View
                        key={index}
                        style={[
                            styles.brandItem,
                            index !== brandData.length - 1 && styles.brandBorder
                        ]}
                    >
                        <View style={styles.brandImage}>
                            <Image
                                source={brand.image}
                                style={styles.image}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.brandInfo}>
                            <View>
                                <Text style={styles.brandName}>{brand.name}</Text>
                                <Text style={styles.suggestions}>{brand.suggestions}</Text>
                            </View>
                            <TouchableOpacity style={styles.arrowButton}>
                                <Ionicons name="chevron-forward" size={20} color="#626264" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_xl,
    },
    title: {
        padding: 16,
        paddingBottom: 0,
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: 'bold',
    },
    brandsList: {
        // gap: 8,
    },
    brandItem: {
        flexDirection: 'row',
        gap: 16,
        paddingVertical: 14,
        marginLeft: 10,
        marginRight: 17,
    },
    brandBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9',
    },
    brandImage: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: Border.br_3xs,
        margin: 4,
        padding: 4,
    },
    image: {
        width: 45,
        height: 45,
    },
    brandInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    brandName: {
        fontWeight: 'bold',
        marginBottom: 4,
        fontFamily: FontFamily.manropeBold,
    },
    suggestions: {
        color: '#626264',
        fontFamily: FontFamily.manropeBold,
    },
    arrowButton: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 20,
        padding: 8,
    },
});

export default SuggestedBrands;