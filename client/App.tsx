import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import MainTabs from './src/navigation/MainTabs';
import { BuddyProvider } from './src/context/BuddyContext';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [user, setUser] = useState<any | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setChecking(false);
    });
    return unsubscribe;
  }, []);

  if (checking) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <BuddyProvider>
        <NavigationContainer>
          {user ? <MainTabs /> : <RootNavigator />}
        </NavigationContainer>
      </BuddyProvider>
    </SafeAreaProvider>
  );
};

export default App;
