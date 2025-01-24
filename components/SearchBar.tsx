import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  firstIconImage?: string;
  isShowSettingIcon?: boolean;
  onPressSettingIcon?: () => void;

  lastIconImage?: string;
  isShowLastIcon?: boolean;
  onPressLastIcon?: () => void;

  searchBarPlaceholder?: string;
  searchBarPlaceholderColor?: string;
  searchBarValue?: string;
  searchBarOnChangeText?: (text: string) => void;
}
const SearchBar = (props:Props) => {
    const {
      firstIconImage = require("@assets/setting-4.png"),
       isShowSettingIcon = true, 
       onPressSettingIcon = () => {}, 
       lastIconImage = require("@assets/setting-4.png"), 
       isShowLastIcon = true, 
       onPressLastIcon = () => {}, 
       searchBarPlaceholder = "Search for customers", 
       searchBarPlaceholderColor = Color.textListPrimaryDay, 
       searchBarValue = "", 
       searchBarOnChangeText  = () => {},
      } = props

  return (
    <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("@assets/search-normal.png")}
            />

            {/* Search Bar */}
            <TextInput
              style={styles.searchText}
              placeholderTextColor={Color.textListPrimaryDay}
              value={searchBarValue}
              onChangeText={searchBarOnChangeText}
              placeholder={searchBarPlaceholder}
            />

            {/* Setting Icon */}
            {isShowSettingIcon && (
              <TouchableOpacity onPress={onPressSettingIcon}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={firstIconImage}
              />
            </TouchableOpacity>
            
            )}
            </View>

          {/* Last Icon */}
         {isShowLastIcon && (
           <TouchableOpacity style={styles.filterButton} onPress={onPressLastIcon}>
           <AntDesign name="plus" size={18} color="black" />
          </TouchableOpacity>
         )}
          </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
      },
      searchBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_sm,
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginRight: 10,
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
      },
      searchText: {
        flex: 1,
        marginLeft: 10,
        fontFamily: FontFamily.manropeBold,
        color: Color.textListPrimaryDay,
        fontSize: FontSize.textSmFontMedium_size,
        paddingRight: 10,
      },
      icon: {
        width: 20,
        height: 20,
      },
      filterButton: {
        aspectRatio: 1,
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_sm,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
      },
})