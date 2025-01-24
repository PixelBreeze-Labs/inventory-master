import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";


type Props = {
  isVisible: boolean;
  setModal: any;
  user: any;
};

const AddReminderModal = ({ user, isVisible, setModal }: Props) => {
  const width = Dimensions.get("window").width;
  const [reminder, setReminder] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const onDateChange = (selectedDate:any) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.headerStyle}>
            <View ></View>
            <Text style={styles.modalTitle}>Add a reminder</Text>
            <TouchableOpacity onPress={() => setModal(false)}>
              <Ionicons name="close" size={22} color="#00000050" />
            </TouchableOpacity>
          </View>

        {/* content */}
        <View style={styles.reminderContent}>
        <TextInput
            style={styles.input}
            placeholder="Enter reminder"
            value={reminder}
            onChangeText={setReminder}
          />

          <TextInput
            style={styles.notesInput}
            placeholder="Notes"
            value={notes}
            onChangeText={setNotes}
            multiline={true}
          />
        </View>

          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setShowPicker(true)}
          >
            <Text style={styles.datePickerText}>{date == null ? 'Select date and time' : moment(date).format('MMMM Do YYYY, h:mm a')}</Text>
            <Ionicons name="chevron-forward" size={20} color="#BFBFBF" />
          </TouchableOpacity>

          {showPicker && (
           <DateTimePickerModal
           isVisible={showPicker}
           date={date ? new Date(date) : new Date()}
           minimumDate={new Date()}
           mode="datetime"
           onConfirm={(date) => onDateChange(date)}
           onCancel={() => setShowPicker(false)}
         />
          )}

        {/* Footer buttons */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.saveButton]}>
                <Text style={styles.saveButtonText}>Save filter</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddReminderModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 18,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 18,
    paddingBottom: 18,
    gap: 15,
  },
  modalTitle: {
    fontSize: FontSize.textLgFontMedium_size,
    color: Color.textContentSecondaryDay,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  headerStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    paddingRight: 18
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
  },
  saveButtonText: {
    fontSize: FontSize.textBaseFontRegular_size,
    fontFamily: FontFamily.manropeSemiBold,
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
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#B7B7B9',
    borderRadius: 5,
    color: '#000',
    fontWeight: '600',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  notesInput: {
    width: '100%',
    height: 80,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  datePickerButton: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#B7B7B9',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 4,
  },
  datePickerText: {
    fontSize: FontSize.textBaseFontRegular_size,
    fontFamily: FontFamily.manropeMedium,
    color: Color.black,
  },
  reminderContent:{
    marginHorizontal: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
});
