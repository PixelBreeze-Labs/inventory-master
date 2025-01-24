import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ResourcesScreen from './ResourcesScreen';

export default function Resources() {
    const router = useRouter();

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Resources',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    ),
                    presentation: 'card',
                }}
            />
            <ResourcesScreen />
        </>
    );
}