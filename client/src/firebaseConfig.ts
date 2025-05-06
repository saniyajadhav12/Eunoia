import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBm8_U5ElZc0Q_EHW2-_jp8BJpxB_ST7gA",
  authDomain: "eunoia-2025.firebaseapp.com",
  projectId: "eunoia-2025",
  storageBucket: "eunoia-2025.appspot.com",
  messagingSenderId: "892211423986",
  appId: "1:892211423986:web:e56daa29c1c168dee2fe6b"
};

export const app = initializeApp(firebaseConfig);

import { getAuth } from 'firebase/auth';

export const auth = getAuth(app);
