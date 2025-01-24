import {
    Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import RNPickerSelect from "react-native-picker-select";
import RNDateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const RequestTimeOffModal = ({ setShowModal }: Props) => {
  const [type, setType] = useState<string>("Vacation");
  const [reason, setReason] = useState<string>(
    "Vacation with my wife and kids for 2 days"
  );
  const [startDate, setStartDate] = useState(new Date())
  const data = [
    { label: "Vacation", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {/* Header */}
        <View style={styles.headerStyle}>
          <Text style={styles.modalTitle}>Request Time Off</Text>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Select Type */}
        <View style={styles.selectTypeContainer}>
          <Text style={styles.selectTypeTitle}>Select Type</Text>
          {/* Dropdown */}
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

        {/* Select Start Date */}
        <View style={styles.selectTypeContainer}>
          <Text style={styles.selectTypeTitle}>Start Date</Text>
          {/* Date Picker */}
          <TouchableOpacity style={styles.datePickerContainer}>
            <Image
              source={require("../assets/calendarline.png")}
              style={styles.datePickerIcon}
            />
            <Text style={styles.datePickerText}>{startDate.toDateString()}</Text>
          </TouchableOpacity>
          {/* <RNDateTimePicker style={styles.datePicker} on value={startDate} display="clock" mode="date"/> */}
        </View>

        {/* End Date */}
        <View style={styles.selectTypeContainer}>
          <Text style={styles.selectTypeTitle}>End Date</Text>
          {/* End Date */}
          <TouchableOpacity style={styles.datePickerContainer}>
            <Image
              source={require("../assets/calendarline.png")}
              style={styles.datePickerIcon}
            />
            <Text style={styles.datePickerText}>{startDate.toDateString()}</Text>
          </TouchableOpacity>
        </View>

        {/* Total Days: */}
        <View style={styles.selectTypeContainer}>
          <Text style={styles.selectTypeTitle}>Total Days:</Text>
          <View style={styles.selectorContainer}>
            <Text style={styles.selectedValue}>5 Days</Text>
          </View>
        </View>

        {/* Reason */}
        <View style={styles.selectTypeContainer}>
          <Text style={styles.selectTypeTitle}>Reason: </Text>
          <TextInput
            placeholder="Enter reason"
            value={reason}
            numberOfLines={3}
            multiline
            onChangeText={(reason) => setReason(reason)}
            style={styles.reasonInput}
          />
        </View>

        {/* Remaining Time off Balance: */}
        <View style={styles.selectTypeContainer}>
          <Text style={styles.selectTypeTitle}>
            Remaining Time off Balance:
          </Text>
          <View style={styles.selectorContainer}>
            <Text style={styles.selectedValue}>22 Days</Text>
          </View>
        </View>

        {/* Footer buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => setShowModal(false)}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.saveButton]}>
            <Text style={styles.saveButtonText}>Submit Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RequestTimeOffModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // paddingVertical: 20,
    // paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "semibold",
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
    borderRadius: 16,
    alignItems: "center",
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: Color.red600,
    marginRight: 8,
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
  selectTypeTitle: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.textContentSecondaryDay,
    fontWeight: "600",
  },
  pickerInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectorContainer: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#E2E2E2",
  },
  dateInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
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
  selectedValue: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.textContentSecondaryDay,
    fontWeight: "600",
  },
  reasonInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    height: 100,
  },
  datePickerIcon: {
    height: 22,
    width: 22,  
  },
  datePicker:{
    // width: 250,
  },
  datePickerText: {
    fontSize: FontSize.textSmFontMedium_size,  
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.textContentSecondaryDay,
    fontWeight: "500",
  },
  datePickerContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
  },
});
