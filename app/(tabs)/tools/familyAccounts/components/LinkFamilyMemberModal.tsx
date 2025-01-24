import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import RNPickerSelect from "react-native-picker-select";

const data = [
    { label: "Spouse", value: "spouse" },
    { label: "Child", value: "child" },
    { label: "Parent", value: "parent" },
  ];

const LinkFamilyMemberModal = ({ visible, onClose }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [relationship, setRelationship] = useState("");

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.headerStyle}>
            <Text style={styles.modalTitle}>Link Family Member</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={26} color="#000000" />
            </TouchableOpacity>
          </View>

          {/* content */}
          <View style={styles.singleInputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.singleInputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.singleInputContainer}>
          <Text style={styles.label}>Relationship</Text>
          <View style={styles.input}>
          <RNPickerSelect
            onValueChange={(value) => setRelationship(value)}
            items={data}
            placeholder={{ label: "Select Relationship", value: "0" }}
            style={{
              inputIOS: styles.pickerInput,
              inputAndroid: styles.pickerInput,
            }}
            value={relationship}
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

          {/* Button container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.button, styles.cancelButton]}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.submitButton]}>
              <Text style={styles.submitText}>Link Member</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    gap: 15,
  },
  modalTitle: {
    fontSize: FontSize.textLgFontMedium_size,
    color: Color.textContentSecondaryDay,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    alignContent: "flex-start",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 18,
  },
  headerStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.textListPrimaryDay,
    marginBottom: 10,
  },
  singleInputContainer: {},
  input: {
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 10,
    padding: 10,
    paddingVertical: 14,
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeRegular,
    color: "#4B4B4B",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 12,
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#000080",
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: "#000080",
    marginLeft: 10,
  },
  cancelText: {
    color: "#000080",
    fontWeight: "600",
    fontSize: 14,
  },
  submitText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  pickerInput: {},
  pickerIcon: {
    alignSelf: "center",
  },
  pickerIconView: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LinkFamilyMemberModal;
