import { Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import {AntDesign, EvilIcons, Ionicons} from '@expo/vector-icons';
import {useNavigation} from "expo-router";
import SearchBar from '@/components/SearchBar';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import LinkFamilyMemberModal from './components/LinkFamilyMemberModal';

const accountsData = [
  {
    id: 1,
    name: "Emily Johnson",
    email: "emilyjohnson@gmail.com",
    relationship: "Bronze",
    status: "Bronze",
    avatar: "EJ",
    moreOptions: false,
  },
  {
    link: true,
  },
  {
    id: 2,
    name: "Michael Johnson",
    relationship: "Spouse",
    status: "Active",
    avatar: "MJ",
    moreOptions: true,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    relationship: "Daughter",
    status: "Active",
    avatar: "SJ",
    moreOptions: true,
  },
  {
    id: 4,
    name: "Robert Johnson",
    relationship: "Son",
    status: "Inactive",
    avatar: "RJ",
    moreOptions: true,
  },
];

const metricsData = {
  linkedAccounts: 4,
  totalPurchases: "$12,500 this year",
  loyaltyPoints: "25,000",
};

const FamilyAccounts = () => {
  const [searchText, setSearchText] = React.useState("");
  const [isShowAddModal, setIsShowAddModal] = React.useState(false);

    const navigation = useNavigation();
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeftIcon}>
                <Ionicons name="arrow-back" size={24} color={Color.black} />
            </TouchableOpacity>
        ),
        headerTitle: "Family Accounts",
    });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Search bar */}
        <SearchBar 
          searchBarOnChangeText={setSearchText} 
          searchBarValue={searchText} 
          searchBarPlaceholder="Search for accounts" 
          onPressLastIcon={() => setIsShowAddModal(true)}
        />

        {/* List */}
        {accountsData.map((account) => account.link ? (
          <View style={styles.absoluteLink}>
        <View key={account.id} style={styles.linkContainer}>
            <Image
              source={require("@assets/link.png")}
              style={styles.linkIcon}
              resizeMode='contain'
            />
          </View>
          </View>
          
        ) : (
        <View key={account.id} style={styles.accountCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{account.avatar}</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.nameContainer}>
            <Text style={styles.name}>{account.name}</Text>
            <View style={styles.statusContainer}>
            <Text
              style={[styles.statusBase,
                account.status === 'Active'
                  ? styles.statusActive
                  : account.status === 'Bronze'
                  ? styles.statusBronze
                  : styles.statusInactive,
              ]}
            >
              {account.status}
            </Text>
            </View>
          </View>
            {account.email ? (
              <Text style={styles.email}>{account.email}</Text>
            ) : (
              <Text style={styles.relationship}>{account.relationship}</Text>
            )}
          </View>
          {
            account.moreOptions && <Menu>
            <MenuTrigger>
                <View style={styles.menuTrigger}>
                    <Ionicons name="ellipsis-horizontal" size={24} color={Color.primary} />
                </View>
            </MenuTrigger>

            <MenuOptions customStyles={menuOptionsStyles}>
                <MenuOption onSelect={() => {}} text="Add to Family" />
            </MenuOptions>
        </Menu>
          }
        </View>
      ))}

      {/* Key Metrics Section */}
      <View style={styles.metrics}>
        <Text style={styles.sectionTitle}>Key Metrics</Text>
        <View style={styles.metricBox}>
          <Text style={styles.metricTitle}>Linked Accounts</Text>
          <Text style={styles.metricValue}>{metricsData.linkedAccounts}</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricTitle}>Total Family Purchases</Text>
          <Text style={styles.metricValue}>{metricsData.totalPurchases}</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricTitle}>Combined Loyalty Points</Text>
          <Text style={styles.metricValue}>{metricsData.loyaltyPoints}</Text>
        </View>
      </View>

      {/* Add Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowAddModal}
        onRequestClose={() => setIsShowAddModal(false)}
      >
        <LinkFamilyMemberModal visible={isShowAddModal} onClose={() => setIsShowAddModal(false)} />
        </Modal>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FamilyAccounts

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.colorWhitesmoke_200,
      display: "flex",
      flexDirection: "column",
    },
    scrollViewContent: {
      flexGrow: 1,
      padding: 22,
      paddingVertical: 12,
      gap: 12,
    },
    absoluteLink: {
        position: "relative",
        zIndex: 1,
    },
    linkContainer: {
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 45,
        width: 45,
        backgroundColor: Color.modeBase00,
        borderWidth: 1,
        borderColor: Color.modeBase200,
        borderRadius: 50,
        marginTop: '-5%',
    },
    linkIcon: {
        height: 18,
        width: 18,
    },
    //Account card 
    accountCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      padding: 16,
      paddingHorizontal: 16,
      paddingVertical: 20,
      borderRadius: Border.br_xs,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: Color.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    headerLeftIcon: {
        marginLeft: 10,
    },
    avatarText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 18,
    },
    info: {
      flex: 1,
    },
    nameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    name: {
      fontSize: FontSize.textSmFontMedium_size,
      fontFamily: FontFamily.poppinsSemiBold,
      color: Color.black,
      fontWeight: '600',
    },
    email: {
      color: '#777',
    },
    relationship: {
      color: '#777',
      marginTop: 4,
    },
    statusContainer: {
      marginLeft: 10,
      borderRadius: 10,
      overflow: 'hidden',
    },
    statusBase: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      fontSize: FontSize.size_3xs,
      fontFamily: FontFamily.manropeSemiBold,
      fontWeight: 'bold',
    },
    statusBronze: {
      backgroundColor: '#FFF3E3',
      color: '#F4A261',
    },
    statusActive: {
      backgroundColor: '#34D39920',
      color: '#34D399',
    },
    statusInactive: {
      backgroundColor: '#9CA3AF20',
      color: '#9CA3AF',
    },
    metrics: {
      gap: 12,
      marginTop: 10,
    },
    sectionTitle: {
      fontSize: FontSize.textBaseFontRegular_size,
      fontFamily: FontFamily.manropeBold,
      fontWeight: "bold",
      color: Color.textContentSecondaryDay,
      marginBottom: 20,
    },
    metricBox: {
      backgroundColor: '#FFF',
      padding: 16,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    metricTitle: {
      fontSize: FontSize.textSmFontMedium_size,
      fontWeight: '600',
      fontFamily: FontFamily.manropeBold,
      color: Color.black,
    },
    metricValue: {
      lineHeight: 48,
      fontSize: 24,
      fontWeight: '700',
      fontFamily: FontFamily.manropeBold,
      color: Color.black,
      marginTop: 4,
    },
    menuTrigger: {
      borderWidth: 1,
      borderColor: Color.colorWhitesmoke_100,
      borderRadius: Border.br_31xl,
      padding: 8,
  },
})

const menuOptionsStyles = {
  optionsContainer: {
      backgroundColor: Color.modeBase00,
      borderRadius: Border.br_lg,
      padding: 8,
  },
  optionWrapper: {
      padding: 12,
  },
  optionText: {
      fontFamily: FontFamily.manropeBold,
      fontSize: FontSize.textSmFontMedium_size,
      color: Color.textContentSecondaryDay,
  },
};
