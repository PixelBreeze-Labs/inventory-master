import { IS_IOS } from '@/constants/variables';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { router } from 'expo-router';
import { Alert, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const initializeFirebase = async () => {
    if (!firebase.apps.length) {
        // @ts-ignore
        await firebase.initializeApp();
    }
};

export const requestUserPermission = async (saveFirebaseToken?: any) => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        await getFirebaseToken(saveFirebaseToken);
    }
};

export const getFirebaseToken = async (saveFirebaseToken?:any) => {
    try {
        const token = await messaging().getToken();
        const device_id = await DeviceInfo.getUniqueId();

        if(token && device_id && saveFirebaseToken) {
            await saveFirebaseToken({
                token,
                device_id,
                device_type: IS_IOS ? 'ios' : 'android',
                device_model: DeviceInfo.getModel(),
                os_version: DeviceInfo.getSystemVersion(),
                app_version: DeviceInfo.getVersion()
            });
        }
        return token;
    } catch (error) {
        console.log('An error occurred while getting token', error);
    }
};

const hadleNotification = async (message:any) => {
    console.log("message received", message);
    Alert.alert(
      message.notification?.title,
      message.notification?.body,
    );
  };

export const onMessageReceived = messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    router.push('/notifications');
});

export const openAppFromNotification = messaging().onNotificationOpenedApp(async remoteMessage => {
    console.log(
        'Notification caused app to open from background state:',
        JSON.stringify(remoteMessage),
    );
    router.push('/notifications');
});

