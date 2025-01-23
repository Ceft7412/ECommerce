import {initializeApp} from '@react-native-firebase/app';
import {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_DATABASE_URL,
} from '@env';

const firebaseConfig = {
  appId: FIREBASE_APP_ID,
  apiKey: FIREBASE_API_KEY,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);

export default app;
