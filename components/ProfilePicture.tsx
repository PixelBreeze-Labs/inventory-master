import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Color } from '@/GlobalStyles';

// @ts-ignore
const ProfilePicture = ({ user, onUpdateProfile }) => {
    const [imageModalVisible, setImageModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [showChoice, setShowChoice] = useState(true);
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);

    const openImagePicker = async (type: 'camera' | 'library') => {
        let permissionResult;

        if (type === 'camera') {
            permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        } else {
            permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        }

        if (permissionResult.granted === false) {
            alert(`Permission to access ${type} was denied`);
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!pickerResult.canceled) {
            console.log(pickerResult.assets[0].uri);
        }

        setImageModalVisible(false);
    };

    const handleUpdate = () => {
        onUpdateProfile({ name, phone });
        setEditModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('@assets/images/icon.png')}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.editIcon} onPress={() => setImageModalVisible(true)}>
                    <Ionicons name="pencil" size={16} color="#484C52" />
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.role}>{user.role}</Text>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={() => setEditModalVisible(true)}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
                <Ionicons name="pencil" size={20} color="white" />
            </TouchableOpacity>

            {/* Image Selection Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={imageModalVisible}
                onRequestClose={() => setImageModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Change Profile Picture</Text>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => openImagePicker('camera')}
                        >
                            <Ionicons name="camera-outline" size={24} color={Color.primary} />
                            <Text style={styles.modalOptionText}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => openImagePicker('library')}
                        >
                            <Ionicons name="image-outline" size={24} color={Color.primary} />
                            <Text style={styles.modalOptionText}>Choose from Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.cancelButtonCamera}
                            onPress={() => setImageModalVisible(false)}
                        >
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Edit Profile Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={editModalVisible}
                onRequestClose={() => setEditModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Update Profile</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Full name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Full name"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Phone number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Phone number"
                                value={phone}
                                onChangeText={setPhone}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.cancelButton]}
                                onPress={() => setEditModalVisible(false)}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.updateButton]}
                                onPress={handleUpdate}
                            >
                                <Text style={styles.updateButtonText}>Update</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setEditModalVisible(false)}
                        >
                            <Ionicons name="close" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 4,
        borderWidth: 1,
        borderColor: '#D4D4D4',
    },
    infoContainer: {
        alignItems: 'center',
        marginTop: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    role: {
        fontSize: 14,
        color: '#484C52',
    },
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        marginTop: 16,
    },
    editButtonText: {
        color: 'white',
        fontWeight: '600',
        marginRight: 8,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    modalOptionText: {
        fontSize: 16,
        marginLeft: 15,
    },
    cancelButtonCamera: {
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#EAEAEA',
    },
    cancelButtonText: {
        fontSize: 16,
        color: '#FF3B30',
        fontWeight: '600',
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        padding: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: 'red',
        marginRight: 8,
    },
    updateButton: {
        backgroundColor: Color.primary,
        marginLeft: 8,
    },
    updateButtonText: {
        color: 'white',
        fontWeight: '600',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default ProfilePicture;