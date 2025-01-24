import {
    Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import RNPickerSelect from "react-native-picker-select";

type Props = {
  isVisible: boolean;
  setModal: any;
};

const data = [
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

const CustomerFilterModal = ({ isVisible, setModal }: Props) => {
    const [customerType, setCustomerType] = useState(''); //Regular
    const [values, setValues] = useState([0, 500]);
    const [type, setType] = useState<string>("Vacation");
    const width = Dimensions.get("window").width;

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {/* Header */}
        <View style={styles.headerStyle}>
          <Text style={styles.modalTitle}>Filter by:</Text>
          <TouchableOpacity onPress={() => setModal(false)}>
            <Ionicons name="close" size={20} color="#00000050" />
          </TouchableOpacity>
        </View>

        {/* Customer Type */}
        <View style={styles.section}>
            <Text style={styles.label}>Customer type</Text>
            <View style={styles.customerTypeContainer}>
              <TouchableOpacity
                style={[styles.customerTypeButton, customerType === 'Regular' && styles.selectedType]}
                onPress={() => setCustomerType('Regular')}>
                <Text style={[styles.customerTypeText, customerType === 'Regular' && {color: '#ffffff'}]}>Regular</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.customerTypeButton,
                  customerType === 'VIP' && styles.selectedType
                ]}
                onPress={() => setCustomerType('VIP')}
              >
                <Text style={[styles.customerTypeText, customerType === 'VIP' && {color: '#ffffff'}]}>VIP</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Amount Spent */}
          <View style={styles.section}>
            <Text style={styles.label}>Amount Spent</Text>
            <View style={styles.amountContainer}>
              <TextInput
                style={styles.input}
                value={values[0].toString()}
                keyboardType="numeric"
                onChangeText={text => setValues([Number(text), values[1]])}
                placeholder="Min"
              />
              <TextInput
                style={styles.input}
                value={values[1].toString()}
                keyboardType="numeric"
                onChangeText={text => setValues([values[0], Number(text)])}
                placeholder="Max"
              />
            </View>

            <View style={styles.sliderContainer}>
            <View style={styles.sliderLabels}>
              <Text style={styles.amountLabel}>€0</Text>
              <Text style={styles.amountLabel}>€500</Text>
            </View>
            <MultiSlider
              values={values}
              min={0}
              max={500}
              step={1}
              containerStyle={styles.slider}
              onValuesChange={setValues}
              sliderLength={width - 105}
              trackStyle={{ height: 8 }}
              selectedStyle={{ backgroundColor: '#5B267B' }}
              unselectedStyle={{ backgroundColor: '#ddd' }}
              markerStyle={{
                backgroundColor: '#5B267B',
                marginTop: 8,
                shadowOpacity: 0,
                width: 18,
                height: 18,
                borderRadius: 100,
              }}
            />
            </View>
          </View>

          {/* Loyalty Level */}
          <View style={styles.section}>
            <Text style={styles.label}>Loyalty Level</Text>
            <View style={styles.pickerContainer}>
              <RNPickerSelect
                    onValueChange={(value) => setType(value)}
                    items={data}
                    placeholder={{ label: "Select type", value: "0" }}
                    style={{
                        inputIOS: styles.pickerInput,
                        inputAndroid: styles.pickerInput,
                    }}
                    value={type}
                    Icon={() => (
                    <View style={styles.pickerIconView}>
                        <Ionicons
                        name="chevron-down"
                        size={24}
                        color={Color.colorGray_200}
                        style={styles.pickerIcon}
                        />
                    </View>
                    )}
                />
            </View>
          </View>

        {/* Footer buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.saveButton]}>
            <Text style={styles.saveButtonText}>Save filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomerFilterModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 18,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 16, 
    paddingTop: 25, 
    paddingBottom: 18,
    top: '15%',
  },
  modalTitle: {
    fontSize: FontSize.textSmFontMedium_size,
    color: "#240B3B",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  headerStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  cancelButtonText: {
    fontSize: 16,
    color: Color.red600,
    fontWeight: "600",
  },
  container: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
    marginVertical: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: Color.primary,
    marginLeft: 8,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "600",
  },
  selectTypeContainer: {
    marginBottom: 18,
    gap: 12,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    marginBottom: 10,
    fontWeight: '600',
    color: '#240B3B',
  },
  customerTypeContainer: {
    flexDirection: 'row',
  },
  customerTypeButton: {
    marginTop: 8,
    padding: 8,
    paddingHorizontal: 18,
    borderRadius: 50,
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedType: {
    backgroundColor: '#5B267B',
  },
  customerTypeText: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: '600',
    color: '#4B4B4B',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginHorizontal: 5,
    textAlign: 'left',
  },
  slider: {
    height: 0,
    marginTop: 14,
    alignItems: 'center',
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  amountLabel: {
    color: '#5B267B',
    fontSize: FontSize.size_xs,
    fontWeight: '700',
    fontFamily: FontFamily.manropeBold,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  picker: {
    height: 40,
    color: '#5B267B',
  },
  pickerInput: {
    padding: 12,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerIconView: {
    height: 50,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerIcon: {
    alignSelf: "center",
    marginRight: 10,
  },

});
