import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import SettingsScreen from './SettingsScreen';

export default function Settings() {
    const router = useRouter();

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Settings',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    ),
                    presentation: 'card',
                }}
            />
            <SettingsScreen />
        </>
    );
}