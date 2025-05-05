import React from 'react';
import { View, Text } from 'react-native';
import styles from './ProfileScreen.styles';
import SectionItem from '../../../components/SectionItem/SectionItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../../navigation/ProfileStackNavigator';

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      <SectionItem 
        icon="calendar" 
        label="Mood History" 
        onPress={() => navigation.navigate('MoodHistory')} 
      />

      <SectionItem 
        icon="pie-chart" 
        label="Insights" 
        onPress={() => navigation.navigate('Insights')} 
      />

      <SectionItem 
        icon="settings" 
        label="Settings" 
        onPress={() => navigation.navigate('Settings')} 
      />

      <SectionItem 
        icon="information-circle-sharp" 
        label="About App" 
        onPress={() => navigation.navigate('About')} 
      />
    </View>
  );
};

export default ProfileScreen;
