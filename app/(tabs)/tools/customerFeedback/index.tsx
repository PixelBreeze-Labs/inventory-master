// CustomerFeedback.tsx
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from "expo-router";
import MultiSelectComponent from '../../../../components/MultiSelectComponent';
import CustomersDetails from '../../../../components/CustomerDetails';
import CustomerFeedbackForm from '../../../../components/CustomerFeedbackForm';
import useCustomers from '@/hooks/useCustomers';

const CustomerFeedback = () => {
    const {customersList, isLoading, error} = useCustomers();
    const [customers, setCustomers] = useState<any>([]);
    const navigation = useNavigation();

    const options = customersList?.customers.map((customer:any) => ({
        key: `${customer.id}`,
        value: customer.name,
    })) || [];
    
    const onSelectCustomer = (val: any) => {
            customersList?.customers.map((customer:any) => {
                if(customer.id == val){
                    setCustomers([customer]);
                }
            })
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ 
                title: "Customer Feedback" ,
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeftIcon}>
                        <Ionicons name="arrow-back" size={24} color={Color.black} />
                    </TouchableOpacity>
                ),
                headerTitle: "Customer Feedback",
            }}
            />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.content}>
                    <View style={styles.searchContainer}>
                        <MultiSelectComponent options={options} setSelected={onSelectCustomer} selected={customers} />
                    </View>

                    <View style={styles.customersList}>
                        {customers && customers.map((customer:any, index:any) => (
                            <CustomersDetails
                                key={index}
                                customer={customer}
                                showClose={true}
                                showArrow={false}
                                onRemove={() => {
                                    setCustomers(
                                        customers.filter((c:any) => c.id !== customer.id)
                                    );
                                }} onClick={undefined}/>
                        ))}
                    </View>
                    <View style={styles.feedbackSection}>
                    <Text style={styles.sectionTitle}>Customer Feedback</Text>
                    <View style={styles.formContainer}>
                        <CustomerFeedbackForm customerId={customers[0]?.id} />
                    </View>
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
        padding: 16,
        paddingBottom: 80,
    },
    content: {
        gap: 14,
    },
    customersList: {
        gap: 16,
    },
    feedbackSection: {
    },
    sectionTitle: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textBaseFontRegular_size,
        fontWeight: 'bold',
    },
    formContainer: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: Color.modeBase200,
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
});

export default CustomerFeedback;