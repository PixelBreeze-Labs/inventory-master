import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';

const BookIcon = () => (
    <Svg
    width={21}
    height={21}
    fill="none">
    <Path
      fill="#28282B"
      d="M18.427 10.195v7.795c0 .46-.373.834-.833.834H4.26a.833.833 0 0 1-.833-.834v-7.795a3.32 3.32 0 0 1-.833-2.205v-5c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833v5a3.32 3.32 0 0 1-.833 2.205ZM16.76 11.22a3.342 3.342 0 0 1-3.333-1.024 3.325 3.325 0 0 1-2.5 1.129c-.995 0-1.89-.437-2.5-1.129a3.325 3.325 0 0 1-3.333 1.024v5.938H16.76v-5.938ZM12.594 7.99a.833.833 0 1 1 1.666 0 1.667 1.667 0 1 0 3.334 0V3.824H4.26V7.99a1.667 1.667 0 1 0 3.334 0 .833.833 0 1 1 1.666 0 1.667 1.667 0 1 0 3.334 0Z"
    />
  </Svg>
);

const FilterPrimeIcon = () => (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
        <Path
            d="M10.0738 14.057C10.1072 14.307 10.0238 14.5737 9.83217 14.7487C9.75508 14.8259 9.6635 14.8872 9.56269 14.929C9.46188 14.9709 9.35381 14.9924 9.24467 14.9924C9.13553 14.9924 9.02746 14.9709 8.92665 14.929C8.82584 14.8872 8.73427 14.8259 8.65717 14.7487L5.31551 11.407C5.22467 11.3181 5.1556 11.2095 5.11368 11.0895C5.07176 10.9695 5.05813 10.8415 5.07384 10.7154V6.44869L1.08217 1.34036C0.946847 1.16663 0.885785 0.946405 0.91233 0.727798C0.938875 0.509191 1.05087 0.309978 1.22384 0.17369C1.38217 0.0570231 1.55717 -0.00964355 1.74051 -0.00964355H13.4072C13.5905 -0.00964355 13.7655 0.0570231 13.9238 0.17369C14.0968 0.309978 14.2088 0.509191 14.2353 0.727798C14.2619 0.946405 14.2008 1.16663 14.0655 1.34036L10.0738 6.44869V14.057ZM3.44051 1.65702L6.74051 5.87369V10.4737L8.40717 12.1404V5.86536L11.7072 1.65702H3.44051Z"
            fill="#28282B"
        />
    </Svg>
);

const AnalysisOrderFilters = () => {
    const analyticsOptions = [
        {
            id: 1,
            icon: <BookIcon />,
            title: "All Shops",
        },
        {
            id: 2,
            icon: <FilterPrimeIcon />,
            title: "All Status",
        },
    ];

    return (
        <View style={styles.container}>
            {analyticsOptions.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={styles.filterCard}
                    onPress={() => {}}
                >
                    <View style={styles.filterContent}>
                        {item.icon}
                        <Text style={styles.filterText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
    },
    filterCard: {
        flex: 1,
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_3xs,
        padding: 16,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
    },
    filterContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    filterText: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        color: Color.textContentSecondaryDay,
        fontWeight: '600',
    },
});

export default AnalysisOrderFilters;