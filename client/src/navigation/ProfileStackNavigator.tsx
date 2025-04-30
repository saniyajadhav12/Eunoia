import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../screens/Profile/AboutScreen/AboutScreen';
import InsightsScreen from '../screens/Profile/InsightsScreen/InsightsScreen';
import MoodHistoryScreen from '../screens/Profile/MoodHistoryScreen/MoodHistoryScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/Profile/SettingsScreen/SettingsScreen';


export type ProfileStackParamList = {
  Profile: undefined;
  MoodHistory: undefined;
  Insights: undefined;
  Settings: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MoodHistory" component={MoodHistoryScreen} />
      <Stack.Screen name="Insights" component={InsightsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
