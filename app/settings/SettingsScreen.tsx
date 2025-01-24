import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import IcTheme from '../../components/icons/IcTheme';
import IcLanguage from '../../components/icons/IcLanguage';
import SecurityComponent from '../../components/Security';
import {Ionicons} from "@expo/vector-icons";
import { Color } from '@/GlobalStyles';

const SettingsScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();

    const handleLanguagePress = () => {
        setModalVisible(true);
    };

    const handleResourcesPress = () => {
        // @ts-ignore
        router.push('/resources'); // Navigate to the Resources screen
    };




    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.sectionTitle}>Appearance</Text>
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <IcTheme />
                            <View style={styles.textContainer}>
                                <Text style={styles.rowTitle}>Theme</Text>
                                <Text style={styles.rowSubtitle}>System</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.row} onPress={handleLanguagePress}>
                            <IcLanguage />
                            <View style={styles.textContainer}>
                                <Text style={styles.rowTitle}>Language</Text>
                                <Text style={styles.rowSubtitle}>English</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Resources section */}
                    <Text style={[styles.sectionTitle, styles.mt3]}>Resources</Text>
                    <View style={styles.card}>
                        <TouchableOpacity style={[styles.row, styles.customResources]} onPress={handleResourcesPress}>
                            <Ionicons name="book-outline" size={24} color={Color.primary} />
                            <View style={styles.textContainer}>
                                <Text style={styles.rowTitle}>Resources</Text>
                                <Text style={styles.rowSubtitle}>Resources and Materials</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.sectionTitle, styles.mt3]}>Security</Text>
                    <SecurityComponent />

                    <Text style={styles.appVersion}>Sales Associate v1.00</Text>
                </View>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select language</Text>
                        <Text style={styles.modalOption}>English</Text>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f6f7',
    },
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },

    customResources: {
        marginBottom: 0
    },
    textContainer: {
        marginLeft: 12,
    },
    rowTitle: {
        fontWeight: 'bold',
    },
    rowSubtitle: {
        fontSize: 14,
        color: '#484C52',
    },
    mt3: {
        marginTop: 16,
    },
    appVersion: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        minHeight: 200,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    modalOption: {
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: Color.primary,
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    closeButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SettingsScreen;