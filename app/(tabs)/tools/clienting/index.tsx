import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import {AntDesign, EvilIcons, Ionicons} from '@expo/vector-icons';
import {useNavigation} from "expo-router";
import CustomersDetails from '../../../../components/CustomerDetails';
import MultiSelectComponent from '../../../../components/MultiSelectComponent';
import Wishlist from '@/components/Wishlist';

const options = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
];

const Clienting = () => {
    const [searchText, setSearchText] = React.useState("");
    const [selectedClient, setSelectedClient] = React.useState([]);
    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: 'Kate Simpson',
            email: 'katesimpson@outlook.com',
            loyalty_level: 'Bronze',
            phone: '',
            sizes: [],
            stylePreferences: {},
        },
    ]);

    const navigation = useNavigation();
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeftIcon}>
                <Ionicons name="arrow-back" size={24} color={Color.black} />
            </TouchableOpacity>
        ),
        headerTitle: "Clienting",
    });

    useEffect(() => {
        console.log("selectedClient", selectedClient);
    }, [selectedClient])
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.content}>
                    <View style={styles.searchContainer}>
                        <MultiSelectComponent options={options} setSelected={setSelectedClient} selected={selectedClient} />
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
                                }} onClick={undefined}/>
                        ))}
                    </View>

                    <View style={styles.wishlistContainer}>
                        <Wishlist wishlistAdded={true} isButton={true} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Clienting

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
    searchContainer: {
        flexDirection: "row",
        backgroundColor: Color.modeBase00,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_sm,
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginRight: 10,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
    },
    searchText: {
        flex: 1,
        marginLeft: 10,
        fontFamily: FontFamily.manropeBold,
        color: Color.textListPrimaryDay,
        fontSize: FontSize.textSmFontMedium_size,
        paddingRight: 10,
    },
    icon: {
        width: 20,
        height: 20,
    },
    list: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },
    filterButton: {
        aspectRatio: 1,
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_sm,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
    },
    iconLayout: {
        width: 24,
        height: 24,
    },
    //Account card
    accountCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    headerLeftIcon: {
        marginLeft: 10,
    },
    avatarText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.poppinsSemiBold,
        color: Color.black,
        fontWeight: '600',
    },
    email: {
        color: '#777',
    },
    relationship: {
        color: '#777',
        marginTop: 4,
    },
    statusContainer: {
        backgroundColor: '#E3F9F0',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    statusBronze: {
        color: '#F4A261',
        fontWeight: 'bold',
    },
    statusActive: {
        color: '#34D399',
        fontWeight: 'bold',
    },
    statusInactive: {
        color: '#9CA3AF',
        fontWeight: 'bold',
    },
    metrics: {
        gap: 12,
    },
    sectionTitle: {
        fontSize: FontSize.textBaseFontRegular_size,
        fontFamily: FontFamily.manropeBold,
        fontWeight: "bold",
        color: Color.textContentSecondaryDay,
    },
    metricBox: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    metricTitle: {
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: '600',
        fontFamily: FontFamily.manropeBold,
        color: Color.black,
    },
    metricValue: {
        lineHeight: 48,
        fontSize: 24,
        fontWeight: '700',
        fontFamily: FontFamily.manropeBold,
        color: Color.black,
        marginTop: 4,
    },
    content: {
        padding: 0,
        gap: 16,
    },

    customersList: {
        gap: 16,
    },
    wishlistContainer: {
    },
})