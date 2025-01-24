import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomSwitch from "@/components/CustomSwitch";
import { Color } from "@/GlobalStyles";

type Props = {
  setEditModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const NotificationSettingModal = ({ setEditModalVisible }: Props) => {
  const [checkInOutReminders, setCheckInOutReminders] = useState(true);
  const [successfulCheckIns, setSuccessfulCheckIns] = useState(false);
  const [importantAnnouncements, setImportantAnnouncements] = useState(true);
  const [taskNotifications, setTaskNotifications] = useState(true);
  const [shiftScheduleChanges, setShiftScheduleChanges] = useState(true);
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <View style={styles.headerStyle}>
          <Text style={styles.modalTitle}>Notification Settings</Text>
          <TouchableOpacity onPress={() => setEditModalVisible(false)}>
            <Ionicons name="close" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          {/* Check-in/out reminders */}
          <View style={styles.containerItem}>
            <Text style={styles.containerItemTitle}>
              Check-in/out reminders
            </Text>
            <CustomSwitch
              defaultChecked={checkInOutReminders}
              onValueChange={setCheckInOutReminders}
            />
          </View>

          {/* Successful check-ins/outs */}
          <View style={styles.containerItem}>
            <Text style={styles.containerItemTitle}>
              Successful check-ins/outs
            </Text>
            <CustomSwitch
              defaultChecked={successfulCheckIns}
              onValueChange={setSuccessfulCheckIns}
            />
          </View>

          {/* Important announcements */}
          <View style={styles.containerItem}>
            <Text style={styles.containerItemTitle}>
              Important announcements
            </Text>
            <CustomSwitch
              defaultChecked={importantAnnouncements}
              onValueChange={setImportantAnnouncements}
            />
          </View>

          {/* Task notifications */}
          <View style={styles.containerItem}>
            <Text style={styles.containerItemTitle}>Task notifications</Text>
            <CustomSwitch
              defaultChecked={taskNotifications}
              onValueChange={setTaskNotifications}
            />
          </View>

          {/* Shift & Schedule Changes */}
          <View style={styles.containerItem}>
            <Text style={styles.containerItemTitle}>
              Shift & Schedule Changes
            </Text>
            <CustomSwitch
              defaultChecked={shiftScheduleChanges}
              onValueChange={setShiftScheduleChanges}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => setEditModalVisible(false)}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.saveButton]}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NotificationSettingModal;

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
  containerItem: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerItemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#28282B",
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
});
