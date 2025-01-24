import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { Color, FontFamily, FontSize } from '@/GlobalStyles';

const CustomerItemView = ({ user, isCustomerDetailCard=false }:any) => {
    const getTierColor = (tier: any) => {
      switch (tier) {
        case "Bronze":
          return { backgroundColor: "#FFF3E3", color: "#D6925D" };
        case "Silver":
          return { backgroundColor: "#F9F9FF", color: "#8C8D8F" };
        case "Gold":
          return { backgroundColor: "#FFF1DF", color: "#A3592" };
        case "Platinum":
          return { backgroundColor: "#F9F9FF", color: "#4B4B4B" };
        default:
          return { backgroundColor: "#F3F4F6", color: "#6B7280" };
      }
    };
    
    if(!user){
      return null;
    }

    const { name, email, loyalty_level:tier, id } = user;
    const tierStyles = getTierColor(tier);
  
    const initials = name
      .split(" ")
      .map((n: any[]) => n[0])
      .join("");
  
    return (
      <TouchableOpacity style={styles.card} disabled={isCustomerDetailCard} onPress={() => {
        router.push(`/customers/detail/${id}`);
      }}>
        <View style={styles.leftSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.nameHorizontal}>
              <Text style={styles.name}>{name}</Text>
              {!isCustomerDetailCard &&<View
                style={[
                  styles.tierBadge,
                  { backgroundColor: tierStyles.backgroundColor },
                ]}
              >
                <Text style={[styles.tierText, { color: tierStyles.color }]}>
                  {tier}
                </Text>
              </View>}
            </View>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          {
            !isCustomerDetailCard ? <Image
            style={{ height: 12, width: 12 }}
            resizeMode='contain'
            source={require("../../../../assets/right-arrow.png")}
          /> : 
          <View
                style={[
                  styles.tierBadge,
                  { backgroundColor: tierStyles.backgroundColor },
                ]}
              >
                <Text style={[styles.tierText, { color: tierStyles.color }]}>
                  {tier}
                </Text>
              </View>
          }
          
        </View>
      </TouchableOpacity>
    );
  };

export default CustomerItemView

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        padding: 16,
        paddingHorizontal: 10,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
      },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
      },
      avatar: {
        backgroundColor: Color.primary, // Purple color
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
      },
      avatarText: {
        color: "#FFFFFF",
        fontSize: FontSize.textBaseFontRegular_size,
        fontFamily: FontFamily.manropeBold,
        fontWeight: "bold",
      },
      info: {
        // marginLeft: 20,
      },
      name: {
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: "600",
        fontFamily: FontFamily.manropeBold,
        color: "#182135",
      },
      nameHorizontal: {
        flexDirection: "row",
        alignItems: "center",
      },
      email: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeRegular,
        color: "#6B7280",
        marginTop: 6,
      },
      rightSection: {
        flexDirection: "row",
        alignItems: "center",
      },
      tierBadge: {
        marginLeft: 6,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
      },
      tierText: {
        fontSize: 12,
        fontWeight: "500",
      },
      arrow: {
        marginLeft: 8,
        fontSize: 18,
        color: "#6B7280",
      },
})