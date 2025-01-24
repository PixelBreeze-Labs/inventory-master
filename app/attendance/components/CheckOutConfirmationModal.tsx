import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontSize } from "@/GlobalStyles";


type Props = {
    setCheckOutModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const CheckOutConfirmationModal = ({ setCheckOutModalVisible }: Props) => {
  
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.headerStyle}>
          <Text style={styles.modalTitle}>Confirm Checkout</Text>
          <TouchableOpacity onPress={() => setCheckOutModalVisible(false)}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.messageText}>Are you sure you want to checkout?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => setCheckOutModalVisible(false)}
          >
            <Text style={styles.cancelButtonText}>No, cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.saveButton]}>
            <Text style={styles.saveButtonText}>Yes, I am</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckOutConfirmationModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 20,
    paddingHorizontal: 24,
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
  messageText:{
    fontSize: FontSize.textBaseFontRegular_size,
    color: Color.colorGray_300,
    paddingTop: 12,
    paddingBottom: 24
  },
  headerStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  modalOptionText: {
    fontSize: 16,
    marginLeft: 15,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButtonText: {
    fontSize: 16,
    color: Color.red600,
    fontWeight: "600",
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
});
