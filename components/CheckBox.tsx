import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '@/GlobalStyles';

function AppCheckbox({ onChange, checked }: any) {
    return (
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={onChange}>
        {checked && <Ionicons name="checkmark" size={24} color="white" />}
      </Pressable>
    );
  }

  const styles = StyleSheet.create({
    checkboxBase: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      overflow: 'hidden',
      borderColor: Color.modeBase100,
      backgroundColor: 'transparent',
    },
    checkboxChecked: {
      backgroundColor: Color.colorMidnightblue,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkboxLabel: {
      marginLeft: 8,
      fontWeight: '500',
      fontSize: 18,
    },
  });

  export default AppCheckbox