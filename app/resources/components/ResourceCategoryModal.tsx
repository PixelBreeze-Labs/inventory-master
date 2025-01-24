import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";

import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontSize } from "@/GlobalStyles";

type Props = {
  setCategoryModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const ResourceCategoryModal = ({ setCategoryModalVisible }: Props) => {
  const [policiesProcedures, setPoliciesProcedures] = useState(true);
  const [formsTemplates, setFormsTemplates] = useState(true);
  const [trainingMaterial, setTrainingMaterial] = useState(true);
  const [reportsAnalytics, setReportsAnalytics] = useState(false);
  const [iTSecurityGuidelines, setItSecurityGuidelines] = useState(false);

  

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.headerStyle}>
          <Text style={styles.modalTitle}>Categories</Text>
          <TouchableOpacity onPress={() => setCategoryModalVisible(false)}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.checkList}>
          <View style={styles.checkItem}>
            <View>
              <Checkbox
                color={Color.colorMidnightblue}
                value={policiesProcedures}
                onValueChange={setPoliciesProcedures}
              />
            </View>
            <Text style={styles.checkText}>Policies & Procedures</Text>
          </View>
          <View style={styles.checkItem}>
            <View>
              <Checkbox
                color={Color.colorMidnightblue}
                value={formsTemplates}
                onValueChange={setFormsTemplates}
              />
            </View>
            <Text style={styles.checkText}>Forms & Templates</Text>
          </View>
          <View style={styles.checkItem}>
            <View>
              <Checkbox
                color={Color.colorMidnightblue}
                value={trainingMaterial }
                onValueChange={setTrainingMaterial}
              />
            </View>
            <Text style={styles.checkText}>Training Material </Text>
          </View>
          <View style={styles.checkItem}>
            <View>
              <Checkbox
                color={Color.colorMidnightblue}
                value={reportsAnalytics}
                onValueChange={setReportsAnalytics}
              />
            </View>
            <Text style={styles.checkText}>Reports & Analytics</Text>
          </View>
          <View style={styles.checkItem}>
            <View>
              <Checkbox
                color={Color.colorMidnightblue}
                value={iTSecurityGuidelines}
                onValueChange={setItSecurityGuidelines}
              />
            </View>
            <Text style={styles.checkText}>IT & Security Guidelines</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.saveButton]}>
            <Text style={styles.saveButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResourceCategoryModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
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
  checkList: {
    marginTop: 12,
    marginBottom: 12,
    borderTopWidth: 1,
    borderTopColor: "#E6E6E6",
    paddingVertical: 12,
    flexDirection: "column",
    gap: 16,
  },
  checkItem: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  checkText: {
    fontSize: FontSize.textLgFontMedium_size,
    color: "#28282B",
    fontWeight: "600",
  },
  messageText: {
    fontSize: FontSize.textBaseFontRegular_size,
    color: Color.colorGray_300,
    paddingTop: 12,
    paddingBottom: 24,
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
    fontSize: FontSize.textLgFontMedium_size,
    color: "white",
    fontWeight: "600",
    paddingVertical: 6,
  },
});
