// src/screens/Scanner.tsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        router.push({
            pathname: '/tools/scanner/add-product',
            params: { sku: data }
        });
    };

    if (hasPermission === null) {
        return <Text>Requesting camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={Camera.Constants.Type.back}
                barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                }}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
            {scanned && (
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setScanned(false)}
                >
                    <Text style={styles.buttonText}>Scan Again</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

