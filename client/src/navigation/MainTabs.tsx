import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileStackNavigator from './ProfileStackNavigator';
import ExploreScreen from '../screens/ExploreScreen/ExploreScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const icons: Record<string, string> = {
            Home: focused ? 'home' : 'home-outline',
            Explore: focused ? 'search' : 'search-outline',
            Profile: focused ? 'person' : 'person-outline',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#B497FF', // lavender
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default MainTabs;
