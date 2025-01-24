import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import {AntDesign, EvilIcons, Ionicons} from '@expo/vector-icons';
import {useNavigation} from "expo-router";

const loyaltyPrograms = [
    {
        title: "Bronze",
        description: "Customer first step towards exclusivity",
        range: " 0-499 EUR",
        pointsMultiplier: "1x",
        birthdayReward: "5 EUR",
        referalPoints: "5",
        img: require("@assets/bronze.png"),
        background: "#FFF1DF",
        textColor: "#C1763C",
    },
    {
        title: "Silver",
        description: "Shine with expanded privileges",
        range: "500-999 EUR",
        pointsMultiplier: "1.5x",
        birthdayReward: "5 EUR",
        referalPoints: "10",
        img: require("@assets/silver.png"),
        background: "#F2F2F2",
        textColor: "#A9AAAE",
    },
    {
        title: "Gold",
        description: "Experience true luxury",
        range: "1000-2499 EUR",
        pointsMultiplier: "2x",
        birthdayReward: "20 EUR",
        referalPoints: "15",
        img: require("@assets/bronze.png"),
        background: "#FFE8B9",
        textColor: "#A96F29",
    },
    {
        title: "Platinum",
        description: "The pinnacle of the By Best Shop experience",
        range: "2500+ EUR",
        pointsMultiplier: "2.5x",
        birthdayReward: "30 EUR",
        referalPoints: "20",
        img: require("@assets/platinum.png"),
        background: "#F2F2F2",
        textColor: "rgba(26, 26, 26, 0.7)",
    },
];

const LoyaltyPrograms = () => {
    const navigation = useNavigation();
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeftIcon}>
                <Ionicons name="arrow-back" size={24} color={Color.black} />
            </TouchableOpacity>
        ),
        headerTitle: "Loyalty Programs",
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.programsList}>
                    {loyaltyPrograms.map((program, index) => (
                        <View
                            key={index}
                            style={[
                                styles.programCard,
                                { backgroundColor: program.background }
                            ]}
                        >
                            <View style={styles.titleContainer}>
                                <Image
                                    source={program.img}
                                    style={styles.programIcon}
                                    resizeMode="contain"
                                />
                                <Text style={[
                                    styles.titleText,
                                    { color: program.textColor }
                                ]}>
                                    {program.title}
                                </Text>
                            </View>

                            <View style={styles.detailsContainer}>
                                <Text style={styles.descriptionText}>
                                    {program.description}
                                </Text>

                                <View style={styles.benefitsList}>
                                    <Text style={styles.benefitText}>
                                    • Spend Range: {program.range}
                                    </Text>
                                    <Text style={styles.benefitText}>
                                    • Points Multiplier: {program.pointsMultiplier}
                                    </Text>
                                    <Text style={styles.benefitText}>
                                    •  Birthday Reward: {program.birthdayReward}
                                    </Text>
                                    <Text style={styles.benefitText}>
                                    •  Referal Points: {program.referalPoints}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorWhitesmoke_200,
        display: "flex",
        flexDirection: "column",
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 30,
        paddingHorizontal: 18,
        gap: 12,
    },
    headerLeftIcon: {
        marginLeft: 10,
    },
    programsList: {
        gap: 14,
    },
    programCard: {
        borderRadius: Border.br_xs,
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        gap: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    programIcon: {
        width: 34,
        height: 34,
    },
    titleText: {
        fontFamily: FontFamily.manropeBold,
        fontWeight: '800',
        fontSize: FontSize.textXlFontSemibold_size,
    },
    detailsContainer: {
        alignItems: 'center',
        gap: 8,
    },
    descriptionText: {
        fontFamily: FontFamily.manropeSemiBold,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: '600',
        marginBottom: 6
    },
    benefitsList: {
        gap: 4,
    },
    benefitText: {
        fontFamily: FontFamily.manropeRegular,
        fontSize: FontSize.size_smi,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 24,
    },
});

export default LoyaltyPrograms;