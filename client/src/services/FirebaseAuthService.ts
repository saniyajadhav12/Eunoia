import auth from '@react-native-firebase/auth';

export const login = async (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signup = async (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const resetPassword = async (email: string) => {
  return auth().sendPasswordResetEmail(email);
};
