import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from '../screens/Profile/AboutScreen/AboutScreen';
import InsightsScreen from '../screens/Profile/InsightsScreen/InsightsScreen';
import MoodHistoryScreen from '../screens/Profile/MoodHistoryScreen/MoodHistoryScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/Profile/SettingsScreen/SettingsScreen';
import WalkHistoryScreen from '../screens/WalkHistoryScreen/WalkHistoryScreen';
import JournalHistoryScreen from '../screens/JournalHistoryScreen/JournalHistoryScreen';

export type ProfileStackParamList = {
  Profile: undefined;
  MoodHistory: undefined;
  Insights: undefined;
  WalkHistory: undefined;
  JournalHistory: undefined;
  Settings: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
        headerTintColor: '#A78BFA', // lavender
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'My Profile'}}
      />
      <Stack.Screen
        name="MoodHistory"
        component={MoodHistoryScreen}
        options={{title: 'Mood History'}}
      />
      <Stack.Screen
        name="Insights"
        component={InsightsScreen}
        options={{title: 'Insights'}}
      />
      <Stack.Screen
        name="WalkHistory"
        component={WalkHistoryScreen}
        options={{title: 'WalkHistory'}}
      />
      <Stack.Screen
        name="JournalHistory"
        component={JournalHistoryScreen}
        options={{title: 'JournalHistory'}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'About Eunoia'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
