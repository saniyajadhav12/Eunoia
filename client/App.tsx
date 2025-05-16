import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import MainTabs from './src/navigation/MainTabs';
import { BuddyProvider } from './src/context/BuddyContext';
import Toast from 'react-native-toast-message';
import DailyWelcomeModal from './src/components/DailyWelcomeModal/DailyWelcomeModal';
import { shouldShowQuote } from './src/utils/quoteTiming';

const App = () => {
  const [user, setUser] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkModalTiming = async () => {
      const eligible = await shouldShowQuote(2); // or 3 for every 3 hours
      if (eligible) {
        setShowModal(true);
      }
    };
    checkModalTiming();
  }, []);

  return (
    <SafeAreaProvider>
      <BuddyProvider>
        <NavigationContainer>
          {user ? <MainTabs /> : <RootNavigator />}
        </NavigationContainer>
        <Toast />
        {showModal && (
          <DailyWelcomeModal
            visible={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </BuddyProvider>
    </SafeAreaProvider>
  );
};

export default App;
