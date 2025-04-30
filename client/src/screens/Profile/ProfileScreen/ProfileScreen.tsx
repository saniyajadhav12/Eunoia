import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './ProfileScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../../navigation/ProfileStackNavigator';
import SectionItem from '../../../components/SectionItem/SectionItem';

const ProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProfileStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Greeting Section */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>L</Text>
        </View>
        <View>
          <Text style={styles.name}>Hi Lumi 👋</Text>
          <Text style={styles.email}>you@eunoia.app</Text>
        </View>
      </View>

      {/* Section List */}
      <SectionItem label="Mood History" icon="calendar" onPress={() => navigation.navigate('MoodHistory')} />
      <SectionItem label="Insights" icon="bar-chart" onPress={() => navigation.navigate('Insights')} />
      <SectionItem label="Settings" icon="settings" onPress={() => navigation.navigate('Settings')} />
      <SectionItem label="About" icon="information-circle-sharp" onPress={() => navigation.navigate('About')} />
    </ScrollView>
  );
};

export default ProfileScreen;
