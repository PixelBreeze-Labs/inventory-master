import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import {AntDesign, EvilIcons, Ionicons} from '@expo/vector-icons';
import {useNavigation} from "expo-router";
import Svg, {Path} from "react-native-svg";
import ProductItem from "@/components/ProductItem";
import SearchBar from '@/components/SearchBar';

const products = [
    {
        id: 1,
        title: "Indigo Glow (Ø 47.00)",
        price: "12,000",
        currency: "ALL",
        image_path: require("@assets/ic_watch.png"),
        isInCart: false,
    },
    {
        id: 2,
        title: "Indigo Glow (Ø 47.00)",
        price: "12,000",
        currency: "ALL",
        image_path: require("@assets/ic_watch.png"),
        isInCart: false,
    },
    {
        id: 3,
        title: "Indigo Glow (Ø 47.00)",
        price: "12,000",
        currency: "ALL",
        image_path: require("@assets/ic_watch.png"),
        isInCart: false,
    },
    {
        id: 4,
        title: "Indigo Glow (Ø 47.00)",
        price: "12,000",
        currency: "ALL",
        image_path: require("@assets/ic_watch.png"),
        isInCart: false,
    },
];
const CrossIcon = () => (
    <Svg width={17} height={20} viewBox="0 0 17 20" fill="none">
        <Path
            d="M9.4375 3.33329H3.60417C3.16214 3.33329 2.73822 3.50889 2.42566 3.82145C2.11309 4.13401 1.9375 4.55793 1.9375 4.99996V15C1.9375 15.442 2.11309 15.8659 2.42566 16.1785C2.73822 16.491 3.16214 16.6666 3.60417 16.6666H9.4375M12.7708 3.33329H13.6042C14.0462 3.33329 14.4701 3.50889 14.7827 3.82145C15.0952 4.13401 15.2708 4.55793 15.2708 4.99996V5.83329M15.2708 14.1666V15C15.2708 15.442 15.0952 15.8659 14.7827 16.1785C14.4701 16.491 14.0462 16.6666 13.6042 16.6666H12.7708M15.2708 9.16663V10.8333M8.60417 1.66663V18.3333"
            stroke="black"
            strokeWidth={2.08333}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

const SearchIcon = () => (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
        <Path
            d="M11.6493 18.8525C15.2956 18.8525 18.2516 15.8965 18.2516 12.2501C18.2516 8.60369 15.2956 5.64771 11.6493 5.64771C8.00286 5.64771 5.04688 8.60369 5.04688 12.2501C5.04688 15.8965 8.00286 18.8525 11.6493 18.8525Z"
            stroke="#202226"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M18.9447 19.5474L17.5547 18.1575"
            stroke="#202226"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

const FilterIcon = () => (
    <Svg width={20} height={21} viewBox="0 0 20 21" fill="none">
        <Path
            d="M18.3359 6.01428H13.3359"
            stroke="#212121"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M4.9974 6.01428H1.66406"
            stroke="#212121"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M8.33073 8.93099C9.94156 8.93099 11.2474 7.62515 11.2474 6.01432C11.2474 4.40349 9.94156 3.09766 8.33073 3.09766C6.7199 3.09766 5.41406 4.40349 5.41406 6.01432C5.41406 7.62515 6.7199 8.93099 8.33073 8.93099Z"
            stroke="#212121"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M18.3333 15.181H15"
            stroke="#212121"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M6.66406 15.181H1.66406"
            stroke="#212121"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M11.6667 18.0976C13.2775 18.0976 14.5833 16.7918 14.5833 15.1809C14.5833 13.5701 13.2775 12.2643 11.6667 12.2643C10.0558 12.2643 8.75 13.5701 8.75 15.1809C8.75 16.7918 10.0558 18.0976 11.6667 18.0976Z"
            stroke="#212121"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

const crossBrandRecommendations = () => {
    const [searchText, setSearchText] = React.useState("");

    const navigation = useNavigation();
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeftIcon}>
                <Ionicons name="arrow-back" size={24} color={Color.black} />
            </TouchableOpacity>
        ),
        headerTitle: "Cross Brand Recommendations",
    });
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.content}>
                    <SearchBar />

                    <View style={styles.productSection}>
                        {products.map((product, index) => (
                            <ProductItem
                                key={index}
                                product={product}
                                isLast={index === products.length - 1}
                            />
                        ))}
                    </View>

                    <View style={styles.productSection}>
                        <Text style={styles.sectionTitle}>You Might Also Like</Text>
                        {products.map((product, index) => (
                            <ProductItem
                                key={index+10}
                                product={product}
                                isLast={index === products.length - 1}
                            />
                        ))}
                    </View>

                    <View style={styles.productSection}>
                        <Text style={styles.sectionTitle}>Recent Viewed</Text>
                        {products.map((product, index) => (
                            <ProductItem
                                key={index+20}
                                product={product}
                                isLast={index === products.length - 1}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.updateButton]}>
                                <Text style={styles.updateButtonText}>Add to Wishcart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.updateButton]}>
                                <Text style={styles.updateButtonText}>Add to Order</Text>
                            </TouchableOpacity>
                        </View>
        </SafeAreaView>
    )
}

export default crossBrandRecommendations

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorWhitesmoke_200,
        display: "flex",
        flexDirection: "column",
    },
    scrollViewContent: {
        flexGrow: 1,
        padding: 22,
        paddingVertical: 12,
        gap: 12,
    },
    headerLeftIcon: {
        marginLeft: 10,
    },
    avatarText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
    },
    crossButton: {
        width: 48,
        height: 48,
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productSection: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
        paddingVertical: 12,
    },
    sectionTitle: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        marginBottom: 8,
    },
    content: {
        padding: 0,
        gap: 20,
    },
    // Buttons
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 18,
        paddingHorizontal: 24,
        gap: 10,
        backgroundColor: Color.modeBase00,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    button: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
    },
    updateButton: {
        backgroundColor: Color.primary,
    },
    updateButtonText: {
        color: 'white',
        fontWeight: '600',
    },
})