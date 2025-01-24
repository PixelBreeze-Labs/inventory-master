// app/scanner/add-product/index.tsx
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AddProduct from './AddProduct';

export default function AddProductLayout() {
    const router = useRouter();

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Add Product',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    ),
                    presentation: 'card',
                }}
            />
            <AddProduct />
        </>
    );
}