// GiftAdvisory.tsx
import {View, ScrollView, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import CustomersDetails from '../../../../components/CustomerDetails';
import ProductItem from '../../../../components/ProductItem';
import Occasion from '../../../../components/Occasion';
import SuggestedBrands from '../../../../components/SuggestedBrands';
import MultiSelectComponent from '../../../../components/MultiSelectComponent';
import { useNavigation } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import useGiftAdvisory from '@/hooks/useGiftAdvisory';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorState } from '@/components/ErrorState';

const options = [
    { value: 'kate_simpson', key: 'Kate Simpson' },
    { value: 'kate_simpson1', key: 'Kate Simpson' },
    { value: 'kate_simpson2', key: 'Kate Simpson' },
    { value: 'kate_simpson3', key: 'Kate Simpson' },
];

    // id: 1,
    // title: "Indigo Glow (Ø 47.00)",
    // price: "12,000",
    // currency: "ALL",
    // image_path: require("@assets/ic_watch.png"),
    // isInCart: false,


const GiftAdvisory = () => {
    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: "Kate Simpson",
            email: "katesimpson@outlook.com",
            loyalty_level: "Bronze",
            phone: "",
            sizes: [],
            stylePreferences: {},
        },
    ]);
    const {fetchSuggestedList, giftSuggetions, isLoading, error} = useGiftAdvisory();

    const navigation = useNavigation();
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeftIcon}>
                <Ionicons name="arrow-back" size={24} color={Color.black} />
            </TouchableOpacity>
        ),
        headerTitle: "Find Gift Suggestions",
    });

    const onPressSuggested = (occasion: string, budget: number ) => {
        console.log("onPressSuggested", occasion, budget);
        fetchSuggestedList({occasion, budget, store_id: 1});
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.content}>
                    <View style={styles.searchContainer}>
                    <MultiSelectComponent key={Math.random()} options={options} setSelected={setCustomers} selected={customers}/>
                    </View>

                    <View style={styles.customersList}>
                        {customers.map((customer, index) => (
                            <CustomersDetails
                                key={index}
                                customer={customer}
                                showClose={true}
                                showArrow={false}
                                onRemove={() => {
                                    setCustomers(
                                        customers.filter((c) => c.id !== customer.id)
                                    );
                                }} onClick={undefined}                            />
                        ))}
                    </View>

                    <Occasion onPressSuggested={onPressSuggested}/>

                    <View style={styles.suggestedBrandsSection}>
                        <Text style={styles.sectionTitle}>Suggested Products</Text>
                        {
                            isLoading ? (
                                <View style={styles.emptyContainer}>
                                    <LoadingSpinner />
                                    </View>
                            ) : error ? (
                                <ErrorState message={error} onRetry={() => {}} />
                            ) : (
                                (giftSuggetions?.suggestions && giftSuggetions?.suggestions.length > 0) ?
                                giftSuggetions?.suggestions.map((product, index) => (
                                    <ProductItem
                                        key={index}
                                        product={product}
                                        isLast={index == giftSuggetions.suggestions.length - 1}
                                        isViewDetail={true}
                                    />
                                )) : (
                                    <View style={styles.emptyContainer}>
                                        <Text style={styles.emptyText}>No products found</Text>
                                    </View>
                                )
                            )
                        }
                        {/* {giftSuggetions?.suggestions.map((product, index) => (
                            <ProductItem
                                key={index}
                                product={product}
                                isLast={index === products.length - 1}
                                isViewDetail={true}
                            />
                        ))} */}
                    </View>

                    <View style={styles.brandsContainer}>
                        <SuggestedBrands />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorWhitesmoke_200,
    },
    scrollViewContent: {
        flexGrow: 1,
        padding: 22,
        paddingVertical: 12,
        gap: 12,
    },
    content: {
        flex: 1,
        gap: 16,
    },
    customersList: {
        gap: 16,
    },
    suggestedBrandsSection: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
        overflow: 'hidden',
    },
    sectionTitle: {
        padding: 16,
        paddingBottom: 0,
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: 'bold',
    },
    brandsContainer: {
        // marginTop: 20,
        // marginBottom: 80,
    },
    headerLeftIcon: {
        marginLeft: 10,
    },
    searchContainer: {
        flexDirection: "row",
        backgroundColor: Color.modeBase00,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minHeight: 150,
      },
      emptyText: {
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: "600",
        color: "#28282B",
        marginTop: 10,
        width: "70%",
        textAlign: "center",
      },
});

export default GiftAdvisory;