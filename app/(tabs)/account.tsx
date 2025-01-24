import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfilePicture from '../../components/ProfilePicture';
import PersonalInfo from '../../components/PersonalInfo';
import CommunicationPreferences from '../../components/CommunicationPreferences';

const user = {
    name: "Emily Johns",
    email: "emilyjohns@gmail.com",
    phone: "857-453-4529",
    position: "Software Developer",
    department: "Store A",
    employeeId: "24511",
    startDate: "20/09/2024",
    workShedule: "Mon-Fri, 9AM-5PM",
};

const AccountScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <ProfilePicture
                    user={{name: 'Emily Johns', phone: '1234567890', role: 'Developer'}}
                    onUpdateProfile={(updatedInfo: any) => {
                        // Handle the profile update here
                        console.log('Updated profile:', updatedInfo);
                    }}
                />
                <PersonalInfo user={user} />
                <CommunicationPreferences />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F7',
    },
    content: {
        padding: 16,
        gap: 28,
    },
});

export default AccountScreen;