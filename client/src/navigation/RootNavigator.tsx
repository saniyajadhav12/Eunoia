import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding1 from '../screens/Onboarding/Onboarding1';

export type RootStackParamList = {
  Onboarding1: undefined;
  Home: undefined; // placeholder
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
