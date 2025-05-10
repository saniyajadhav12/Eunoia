import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import MainTabs from './src/navigation/MainTabs';
import { BuddyProvider } from './src/context/BuddyContext';

const App = () => {
  const [user, setUser] = useState(true);

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
