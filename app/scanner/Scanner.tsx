import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { router } from 'expo-router';

export default function Scanner() {
    const [hasPermission, setHasPermission] = React.useState(false);
    const devices = useCameraDevices();
    const device = devices.back;

    const [frameProcessor, barcodes] = useScanBarcodes([
        BarcodeFormat.EAN_13,
        BarcodeFormat.EAN_8,
        BarcodeFormat.QR_CODE,
    ]);

    React.useEffect(() => {
        checkPermission();
    }, []);

    React.useEffect(() => {
        if (barcodes.length > 0) {
            handleBarcodeScan(barcodes[0].displayValue);
        }
    }, [barcodes]);

    const checkPermission = async () => {
        const status = await Camera.requestCameraPermission();
        setHasPermission(status === 'authorized');
    };

    const handleBarcodeScan = (data) => {
        router.push({
            pathname: '/scanner/add-product',
            params: { sku: data }
        });
    };

    if (!hasPermission) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No camera permission</Text>
            </View>
        );
    }

    if (!device) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                device={device}
                isActive={true}
                frameProcessor={frameProcessor}
                frameProcessorFps={5}
            />
            <View style={styles.overlay}>
                <Text style={styles.scanText}>Point camera at barcode</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    camera: {
        flex: 1,
    },
    overlay: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    scanText: {
        color: '#fff',
        fontSize: 16,
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 16,
        borderRadius: 8,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        margin: 16,
    }
});