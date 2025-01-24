import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '@/GlobalStyles';
import { products } from '@/constants/collections';

const TopPerfomingProducts = ({ item, index }: any) => {
    const { title, units, revenue, image } = item;
  return (
          <View style={[styles.productCard, {borderBottomWidth: index === products.length - 1 ? 0 : 1}]}>
            <Image source={image} resizeMode="cover" style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.productTitle}>{title}</Text>
              <Text style={styles.units}>{units} • <Text style={styles.revenue}> {revenue}</Text></Text>
            </View>
          </View>
        );
}

export default TopPerfomingProducts

const styles = StyleSheet.create({
    // Product Card
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  productTitle: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: '700',
    color: Color.black,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  units: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: '500',
    color: '#848484',
  },
  revenue: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: 'bold',
    color: '#000',
  },
})