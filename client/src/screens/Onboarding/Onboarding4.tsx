import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useBuddy } from '../../context/BuddyContext';
import styles from './Onboarding4.styles';
import ToneCard from '../../components/ToneCard/ToneCard';
import { SafeAreaView } from 'react-native-safe-area-context';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding4'>;

const reminderStyles = ['Gentle', 'Firm', 'Fun'];

const Onboarding4 = () => {
  const navigation = useNavigation<NavigationProp>();
  const { setBuddy } = useBuddy();
  const [selectedReminder, setSelectedReminder] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedReminder) {
      setBuddy({ reminderStyle: selectedReminder }); // If needed, add `reminderStyle` to BuddyContext type
      navigation.navigate('Home'); // or Onboarding5 if you plan more
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How would you like to be reminded?</Text>

      <FlatList
        data={reminderStyles}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ToneCard
            label={item}
            selected={selectedReminder === item}
            onPress={() => setSelectedReminder(item)}
          />
        )}
        contentContainerStyle={styles.cardContainer}
      />

      <TouchableOpacity
        style={[styles.button, !selectedReminder && styles.disabled]}
        onPress={handleNext}
        disabled={!selectedReminder}
      >
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding4;
