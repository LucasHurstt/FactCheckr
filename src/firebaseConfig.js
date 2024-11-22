import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.REACT_NATIVE_FIREBASE_API_KEY || '',
  authDomain: process.env.REACT_NATIVE_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.REACT_NATIVE_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.REACT_NATIVE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.REACT_NATIVE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.REACT_NATIVE_FIREBASE_APP_ID || '',
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };