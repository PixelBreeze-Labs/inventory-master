// src/screens/AddProduct.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

export default function AddProduct() {
    const { sku } = useLocalSearchParams();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        article_no: sku,
        unit_measure: 'unit'
    });
    const [quantity, setQuantity] = useState('1');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (sku) {
            fetchProduct(sku);
        }
    }, [sku]);

    const fetchProduct = async (sku) => {
        try {
            const response = await ProductService.getProduct(sku);
            if (response?.product) {
                setProduct(response.product);
            }
        } catch (error) {
            console.log('Product not found');
        }
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await ProductService.addProduct({
                ...product,
                quantity: parseInt(quantity),
            });
            router.back();
        } catch (error) {
            alert('Error saving product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={product.title}
                    onChangeText={(text) => setProduct({...product, title: text})}
                    placeholder="Product name"
                />

                <Text style={styles.label}>Price</Text>
                <TextInput
                    style={styles.input}
                    value={product.price}
                    onChangeText={(text) => setProduct({...product, price: text})}
                    keyboardType="numeric"
                    placeholder="0.00"
                />

                <Text style={styles.label}>SKU</Text>
                <TextInput
                    style={styles.input}
                    value={product.article_no}
                    editable={false}
                />

                <Text style={styles.label}>Unit of Measurement</Text>
                <Picker
                    selectedValue={product.unit_measure}
                    onValueChange={(value) => setProduct({...product, unit_measure: value})}
                >
                    <Picker.Item label="Unit" value="unit" />
                    <Picker.Item label="Kg" value="kg" />
                    <Picker.Item label="M2" value="m2" />
                </Picker>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                    disabled={loading}
                >
                    <Text style={styles.buttonText}>
                        {loading ? 'Saving...' : 'Save Product'}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}