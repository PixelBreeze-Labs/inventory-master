import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import SuggestedBrands from "@/components/SuggestedBrands";

const budgetOptions = [
    { key: '50', value: 50 },
    { key: '100', value: 100 },
    { key: '150', value: 150 },
    { key: '200', value: 200 },
    { key: '500 More', value: 500 },
];

type Props = {
    onPressSuggested: (occasion: string, budget: number) => void;
}
const Occasion = ({ onPressSuggested }:Props) => {
    const [occasion, setOccasion] = React.useState("");
    const [budget, setBudget] = React.useState(0);

    const onPressSuggestedButton = () => {
        // validate occasion and budget
        if(!occasion || occasion == ""){
            return Alert.alert("Please enter occasion")
        }else if (!budget || budget == 0){
            return Alert.alert("Please select valid budget")
        }
        onPressSuggested(occasion, budget);
    };

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.label}>Occasion</Text>
                <TextInput
                    placeholder="Set Occasion"
                    value={occasion}
                    onChangeText={setOccasion}
                    placeholderTextColor="#4B4B4B"
                    style={styles.input}
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Budget</Text>
                <SelectList
                    setSelected={setBudget}
                    data={budgetOptions}
                    placeholder="Set Budget"
                    save='value'
                    boxStyles={styles.selectBox}
                    inputStyles={styles.selectInput}
                    dropdownStyles={styles.dropdown}
                    search={false}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => onPressSuggestedButton()}>
                <Text style={styles.buttonText}>Suggested</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.modeBase00,
        padding: 20,
        borderRadius: Border.br_xl,
        gap: 20,
    },
    section: {
        gap: 12,
    },
    label: {
        fontSize: FontSize.textSmFontMedium_size,
        color: '#27272A',
        fontWeight: '600',
        fontFamily: FontFamily.manropeSemiBold,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: Border.br_3xs,
        paddingHorizontal: 10,
        paddingVertical: 14,
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeSemiBold,
        color: '#4B4B4B',
        fontWeight: '600',
    },
    selectBox: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: Border.br_3xs,
        paddingHorizontal: 10,
        paddingVertical: 14,
    },
    selectInput: {
        color: '#4B4B4B',
        fontFamily: FontFamily.manropeSemiBold,
        fontSize: FontSize.textSmFontMedium_size,
        borderRadius: Border.br_3xs,
        fontWeight: '600',
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: Border.br_3xs,
        marginTop: 8,
    },
    button: {
        backgroundColor: Color.primary,
        padding: 16,
        borderRadius: Border.br_3xs,
        alignItems: 'center',
    },
    buttonText: {
        color: Color.modeBase00,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: '600',
        fontFamily: FontFamily.manropeSemiBold,
    },
});

export default Occasion;