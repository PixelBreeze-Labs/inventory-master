import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type ProductItemProps = {
  product: any;
  viewType: string;
};

const ProductItem = ({ product, viewType }: ProductItemProps) => {
  return (
    <View style={[styles.container, viewType === "grid" && styles.grid]}>
      {viewType === "list" ? (
        <View style={styles.listView}>
          <View style={styles.imageContainer}>
            <Image
              source={product.image}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>
              {product.price} {product.currency}
            </Text>
            <View style={styles.footer}>
              <Text style={styles.sku}>SKU: {product.article_no ?? ""}</Text>
              <View style={styles.quantityContainer}>
                <Image source={require("@assets/ic_product_qty.png")} />
                <Text style={styles.quantityLabel}>QTY:</Text>
                <Text style={styles.quantityValue}>
                  {product.stock_quantity ?? 0}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.gridView}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.gridContent}>
            <View style={styles.imageContainer}>
              <Image
                source={product.image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.price}>
                {product.price} {product.currency}
              </Text>
              <Text style={styles.sku}>SKU: {product.article_no ?? ""}</Text>
              <View style={styles.quantityContainer}>
                <Image source={require("@assets/ic_product_qty.png")} style={styles.productIcon} />
                <Text style={styles.quantityLabel}>QTY:</Text>
                <Text style={styles.quantityValue}>
                  {product.stock_quantity ?? 0}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
const gap = 10;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  grid: {
    flexDirection: "column",
    width: "48.5%",
    marginRight: gap,
    marginBottom: 10
  },
  listView: {
    flexDirection: 'row',
    width: '100%',
  },
  gridView: {
    marginHorizontal: gap / 2,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sku: {
    fontSize: 12,
    color: "#808080",
    marginVertical: 10
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  productIcon:{
    width: 16,
    marginRight: 8
  },
  quantityLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5
  },
  quantityValue: {
    fontSize: 12,
    fontWeight: "bold",
  },
  gridContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
});

export default ProductItem;
