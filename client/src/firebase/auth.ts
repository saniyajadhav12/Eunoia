import auth from '@react-native-firebase/auth';

export const login = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signup = (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const resetPassword = (email: string) => {
  return auth().sendPasswordResetEmail(email);
};
