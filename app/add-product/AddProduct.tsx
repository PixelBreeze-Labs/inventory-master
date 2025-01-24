import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function AddProduct({ route }) {
    const navigation = useNavigation();
    const { sku } = route.params;

    const [product, setProduct] = useState({
        title: '',
        price: '',
        article_no: sku,
        unit_measure: 'unit',
        brand_id: '',
        category_id: ''
    });
    const [quantity, setQuantity] = useState('1');
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    const unitMeasures = [
        { key: 'unit', value: 'Unit' },
        { key: 'kg', value: 'Kg' },
        { key: 'm2', value: 'M2' },
        { key: 'cm', value: 'Cm' }
    ];

    useEffect(() => {
        loadInitialData();
    }, []);

    const loadInitialData = async () => {
        try {
            await Promise.all([
                fetchProduct(sku),
                fetchCategories(),
                fetchBrands()
            ]);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    const fetchProduct = async (sku) => {
        try {
            const response = await ProductService.getProduct(sku);
            if (response?.product) {
                setProduct(response.product);
            }
        } catch (error) {
            console.log('New product will be created');
        }
    };

    const fetchCategories = async () => {
        const response = await ProductService.getCategories();
        const formattedCategories = response.categories.map(cat => ({
            key: cat.id,
            value: cat.title
        }));
        setCategories(formattedCategories);
    };

    const fetchBrands = async () => {
        const response = await ProductService.getBrands();
        const formattedBrands = response.brands.map(brand => ({
            key: brand.id,
            value: brand.title
        }));
        setBrands(formattedBrands);
    };

    const handleSubmit = async () => {
        if (!product.title) {
            alert('Product name is required');
            return;
        }

        try {
            setLoading(true);
            await ProductService.addProduct({
                ...product,
                quantity: parseInt(quantity)
            });
            navigation.goBack();
        } catch (error) {
            alert('Error saving product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.form}>
                <FormInput
                    label="Name"
                    value={product.title}
                    onChangeText={(text) => setProduct({...product, title: text})}
                    placeholder="Enter product name"
                />

                <FormInput
                    label="Price"
                    value={product.price}
                    onChangeText={(text) => setProduct({...product, price: text})}
                    keyboardType="numeric"
                    placeholder="0.00"
                />

                <FormInput
                    label="SKU"
                    value={product.article_no}
                    editable={false}
                />

                <View style={styles.selectContainer}>
                    <Text style={styles.label}>Category</Text>
                    <SelectList
                        data={categories}
                        setSelected={(val) => setProduct({...product, category_id: val})}
                        defaultOption={{ key: product.category_id, value: 'Select Category' }}
                        search={false}
                    />
                </View>

                <View style={styles.selectContainer}>
                    <Text style={styles.label}>Brand</Text>
                    <SelectList
                        data={brands}
                        setSelected={(val) => setProduct({...product, brand_id: val})}
                        defaultOption={{ key: product.brand_id, value: 'Select Brand' }}
                        search={false}
                    />
                </View>

                <View style={styles.selectContainer}>
                    <Text style={styles.label}>Unit of Measurement</Text>
                    <SelectList
                        data={unitMeasures}
                        setSelected={(val) => setProduct({...product, unit_measure: val})}
                        defaultOption={{ key: product.unit_measure, value: 'Select Unit' }}
                        search={false}
                    />
                </View>

                <FormInput
                    label="Quantity"
                    value={quantity}
                    onChangeText={setQuantity}
                    keyboardType="numeric"
                    placeholder="1"
                />

                <TouchableOpacity
                    style={[styles.button, loading && styles.buttonDisabled]}
                    onPress={handleSubmit}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Save Product</Text>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const FormInput = ({ label, ...props }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            {...props}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    form: {
        padding: 16,
        gap: 16
    },
    inputContainer: {
        marginBottom: 16
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        color: '#333'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    selectContainer: {
        marginBottom: 16
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    },
    buttonDisabled: {
        opacity: 0.7
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    }
});