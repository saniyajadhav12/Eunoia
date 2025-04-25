import React, { JSX } from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BuddyProvider } from './src/context/BuddyContext';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <BuddyProvider>
        <RootNavigator />
      </BuddyProvider>
    </SafeAreaProvider>
  );
}

export default App;
