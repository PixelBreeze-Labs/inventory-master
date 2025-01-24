// Wishlist.tsx
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductItem from './ProductItem';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import EmptyState from './EmptyState';
import { router, usePathname } from 'expo-router';

const data = [
    {
        id: 1,
        title: 'Indigo Glow (Ø 47.00)',
        price: '12,000',
        currency: 'ALL',
        image_path: './assets/ic_watch.png',
        isInCart: false,
    },
    {
        id: 2,
        title: 'Indigo Glow (Ø 47.00)',
        price: '12,000',
        currency: 'ALL',
        image_path: './assets/ic_watch.png',
        isInCart: true,
    },
    {
        id: 2,
        title: 'Indigo Glow (Ø 47.00)',
        price: '12,000',
        currency: 'ALL',
        image_path: './assets/ic_watch.png',
        isInCart: true,
    },
    {
        id: 2,
        title: 'Indigo Glow (Ø 47.00)',
        price: '12,000',
        currency: 'ALL',
        image_path: './assets/ic_watch.png',
        isInCart: false,
    },
    {
        id: 2,
        title: 'Indigo Glow (Ø 47.00)',
        price: '12,000',
        currency: 'ALL',
        image_path: './assets/ic_watch.png',
        isInCart: true,
    },
    // ... other products
];

// @ts-ignore
const Wishlist = ({ wishlistAdded, isButton }) => {
    const [products, setProducts] = React.useState<any>([]);
    const pathname = usePathname();

    useEffect(() => {
       setTimeout(() => {
           setProducts(data);
       }, 5000);
    }, []);

    const navigateToWebview = () => {
        router.push({
            pathname: '/tools/clienting/webview',
            params: { url: 'https://bybest.shop?from_sa=true&cs_id=xxxxx',
            title: 'Emily Johns',
        },
        })
    }
    return (
        <View style={styles.container}>
            {wishlistAdded && (
                <View style={styles.header}>
                    <Text style={styles.title}>Wishlist</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => navigateToWebview()}>
                        <Ionicons name="add" size={16} color={Color.textContentSecondaryDay} />
                        <Text style={styles.addButtonText}>Add more products</Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.productsList}>
                {(products && products.length > 0) ? products.map((product: unknown, index: React.Key | null | undefined) => (
                    <ProductItem
                        key={index}
                        product={product}
                        isLast={index === products.length - 1}
                    />
                )) : (
                    <View style={[styles.emptyStateContainer]}>
                        <Text style={styles.emptyStateTitle}>Your wishlist is empty</Text>
                        <Text style={styles.emptyStateDescription}>Add products to your wishlist to get started</Text>
                    </View>
                )}
            </View>

            {isButton && (
                <TouchableOpacity style={styles.orderButton} onPress={() => navigateToWebview()}>
                    <Text style={styles.orderButtonText}>Order for customer</Text>
                    <View style={styles.orderCount}>
                        <Text style={styles.orderCountText}>2</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 13,
    },
    title: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textBaseFontRegular_size,
        color: Color.black,
        fontWeight: '700',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: Color.modeBase00,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        borderRadius: Border.br_5xs,
        padding: 10,
        paddingHorizontal: 8
    },
    addButtonText: {
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.manropeSemiBold,
        fontWeight: '600',
        color: Color.textContentSecondaryDay,
    },
    productsList: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
    },
    orderButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#5C1C81',
        padding: 16,
        borderRadius: Border.br_xl,
        marginTop: 28,
    },
    orderButtonText: {
        color: Color.modeBase00,
        fontSize: 14,
        fontWeight: '600',
    },
    orderCount: {
        backgroundColor: Color.modeBase00,
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    orderCountText: {
        color: Color.black,
    },
    emptyStateContainer: {
        width: '100%',
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_5xs,
        padding: 20,
        borderWidth: 1,
        paddingBottom: 0,
        borderColor: Color.colorWhitesmoke_100,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 200,
    },
    emptyStateTitle: {
        fontSize: FontSize.textLgFontMedium_size,
        fontFamily: FontFamily.manropeSemiBold,
        color: Color.modeAlpha900,
        fontWeight: '600',
        width: '70%',
        textAlign: 'center',
        marginBottom: 12,
    },
    emptyStateDescription: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeRegular,
        color: Color.modeAlpha400,
        width: '75%',
        textAlign: 'center',
    },
});

export default Wishlist;