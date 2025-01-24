import { Color, FontSize } from '@/GlobalStyles';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TimerTracker = () => {
  const [taskName, setTaskName] = useState('');
  const [manualTime, setManualTime] = useState('');
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Start timer
  const startTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => setTimer(prevTime => prevTime + 1), 1000);
      //@ts-ignore
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  // Stop timer
  const stopTimer = () => {
    //@ts-ignore
    clearInterval(intervalId);
    setIsRunning(false);
  };

  // Reset timer
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  // Convert seconds to mm:ss
  const formatTime = (seconds:any) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `0:${minutes}:${sec < 10 ? `0${sec}` : sec}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow2}>
        <TextInput
          style={styles.input2}
          placeholder="Enter new task name"
          value={taskName}
          onChangeText={setTaskName}
        />
        <TouchableOpacity style={styles.addButton}>
          <Image source={require("../../assets/time-line.png")} style={[styles.icon, {tintColor: '#fff', marginRight: 7 }]} />
          <Text style={styles.addButtonText}>Add task</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Enter time"
          keyboardType="numeric"
          value={manualTime}
          onChangeText={setManualTime}
        />
        <TouchableOpacity style={styles.manualButton}>
            <Image source={require("../../assets/pepicons-pop_clock-off.png")} style={styles.icon} />
          <Text style={styles.manualButtonText}>Enter Manual</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timerRow}>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{formatTime(timer)}</Text>
        </View>
        <TouchableOpacity style={styles.actionButton} onPress={stopTimer}>
          <Text style={styles.actionButtonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={resetTimer}>
          <Text style={styles.actionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Color.modeBase00,
    borderRadius: 10,
  },
  header: {
    fontSize: FontSize.textLgFontMedium_size,
    fontWeight: '600',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  input: {
    flex: 3,
    padding: 6,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 10,
  },

  inputRow2: {
    flexDirection: 'row',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 10,
  },
  input2: {
    flex: 3,
    padding: 6,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: Color.colorMidnightblue,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  manualButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    flexDirection: "row",
    alignItems: "center",
  },
  manualButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  timerBox: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  timerText: {
    fontSize: FontSize.textBaseFontRegular_size,
    fontWeight: '500',
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginLeft: 10,
    flex: 1,
    alignItems: 'center',
  },
  actionButtonText: {
    fontWeight: '500',
  },
  saveButton: {
    backgroundColor: 'navy',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: FontSize.textBaseFontRegular_size,
    fontWeight: '500',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  }
});

export default TimerTracker;
