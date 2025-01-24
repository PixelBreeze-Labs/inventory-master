import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Color, FontFamily, FontSize } from '@/GlobalStyles';

const CalendarExportView = () => {
  return (
    <View style={styles.container}>
      {/* Calendar Button */}
      <TouchableOpacity style={styles.button}>
        <Image
          style={styles.icon}
          // @ts-ignore 
          contentFit="cover"
          source={require("../../../assets/calendarline.png")}
        />
        <Text style={styles.text}>October 2024</Text>
      </TouchableOpacity>

      {/* Export Button */}
      <TouchableOpacity style={styles.button}>
        <Image
          style={styles.icon}
          // @ts-ignore
          contentFit="cover"
          source={require("../../../assets/shareforward2fill.png")}
        />
        <Text style={styles.text}>Export</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.modeBase00,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    width: '48%',
  },
  text: {
    marginLeft: 10,
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.textListPrimaryDay,
    fontWeight: '500',
  },
  icon: {
    width: 22,
    height: 22,
  }
});

export default CalendarExportView;
