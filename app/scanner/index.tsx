// app/scanner/index.tsx
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Scanner from './Scanner';

export default function ScannerLayout() {
    const router = useRouter();

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Scan Product',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    ),
                    // Add flash button
                    headerRight: () => (
                        <TouchableOpacity>
                            <Ionicons name="flash" size={24} color="black" style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    ),
                    presentation: 'modal',
                }}
            />
            <Scanner />
        </>
    );
}