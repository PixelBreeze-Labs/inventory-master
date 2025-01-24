import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';

// @ts-ignore
const ProductItem = ({ product, isLast = false, isViewDetail = false }) => {
    return (
        <View style={[styles.container]}>
            {product.isInCart && <View style={styles.cartIndicator} />}
        <View style={[styles.subContainer, !isLast && styles.borderBottom]}>
            <Image
                source={require("@assets/watch_item.png")}  // Change this
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.info}>
                <Text style={styles.title}>{product.title}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>
                        {product.price} {product.currency}
                    </Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Swatch</Text>
                    </View>
                </View>
            </View>

            <Menu>
                <MenuTrigger>
                    <View style={styles.menuTrigger}>
                        <Ionicons name="ellipsis-horizontal" size={24} color={Color.primary} />
                    </View>
                </MenuTrigger>

                <MenuOptions customStyles={menuOptionsStyles}>
                    <MenuOption onSelect={() => {}} text="Add to cart" />
                    <MenuOption
                        onSelect={() => {}}
                        text={isViewDetail ? "View Details" : "Remove"}
                    />
                </MenuOptions>
            </Menu>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 12,
        paddingVertical: 16,
        marginLeft: 10,
        marginRight: 21,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: Color.colorWhitesmoke_100,
    },
    cartIndicator: {
        position: 'absolute',
        left: 0,
        top: 8,
        bottom: 8,
        width: 3,
        backgroundColor: '#5C1C81',
        borderRadius: 5,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    info: {
        flex: 1,
        marginLeft: 16,
    },
    title: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    price: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: '800',
    },
    badge: {
        backgroundColor: '#5C1C8120',
        borderWidth: 1,
        borderColor: '#5C1C81',
        borderRadius: Border.br_7xs,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    badgeText: {
        color: '#5C1C81',
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.manropeRegular,
        fontWeight: '400',
    },
    menuTrigger: {
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        borderRadius: Border.br_31xl,
        padding: 8,
    },
});

const menuOptionsStyles = {
    optionsContainer: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
        padding: 8,
    },
    optionWrapper: {
        padding: 12,
    },
    optionText: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        color: Color.textContentSecondaryDay,
    },
};

export default ProductItem;