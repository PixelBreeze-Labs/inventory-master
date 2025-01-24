import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    options: any;
    setSelected: any;
    selected: any;
}
// @ts-ignore
const MultiSelectComponent = ({ options, setSelected, selected }:Props) => {
    return (
        <View style={styles.container}>
            <SelectList
                setSelected={(val: React.SetStateAction<never[]>) => setSelected(val)}
                data={options}
                // @ts-ignore
                save="label"
                placeholder="Search for customers"
                searchPlaceholder="Search"
                multiple={true}
                label="Selected Customers"
                boxStyles={styles.multiSelect}
                dropdownStyles={styles.dropdown}
                inputStyles={styles.input}
                dropdownTextStyles={styles.dropdownText}
                badgeStyles={styles.badge}
                badgeTextStyles={styles.badgeText}
                labelStyles={styles.labelStyle}
                arrowicon={
                    <Ionicons
                        name="chevron-down"
                        size={20}
                        color={Color.textContentSecondaryDay}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    multiSelect: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        paddingHorizontal: 12,
        height: 48,
        alignItems: 'center',
        shadowColor: 'transparent',
    },
    dropdown: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        marginTop: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    input: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        color: Color.textListPrimaryDay,
    },
    dropdownText: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        color: Color.textListPrimaryDay,
        paddingVertical: 8,
    },
    badge: {
        backgroundColor: '#5C1C8120',
        borderWidth: 1,
        borderColor: '#5C1C81',
    },
    badgeText: {
        color: '#5C1C81',
    },
    labelStyle: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        color: Color.textListPrimaryDay,
        marginBottom: 8,
    }
});

export default MultiSelectComponent;