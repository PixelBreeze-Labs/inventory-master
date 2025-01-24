import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';

let reactotron;
if (__DEV__) {
  const hostname = 'Sales Associate APP';
  Reactotron.clear(); 
  reactotron = Reactotron.configure({
    name: hostname,
    host: '192.168.0.104',
    port: 9090,
  }) 
    .useReactNative({
      asyncStorage: true,
      networking: {
        ignoreUrls: /symbolicate/,
      },
      editor: false,
      errors: {veto: stackFrame => false},
      overlay: false,
    })
    // .setAsyncStorageHandler(AsyncStorage)
    // .use(reactotronRedux())
    .connect(); // Connect to local client
      console.warn = Reactotron.warn
      console.log = Reactotron.logImportant
      console.info = Reactotron.log

  Reactotron.onCustomCommand({
    command: 'Clear AsyncStorage',
    handler: () => {
      AsyncStorage.getAllKeys()
        .then((keys) => AsyncStorage.multiRemove(keys))
        .then(() => {
          alert('AsyncStorage cleared.');
        });
    },
  
    title: 'Clear AsyncStorage',
    description: 'Clears all data from AsyncStorage.',
  });

  Reactotron.onCustomCommand({
    command: 'Clear Logs',
    handler: () => Reactotron.clear(),
    title: 'Clear Logs',
    description: 'Clears Reactotron log history.',
  });

}
