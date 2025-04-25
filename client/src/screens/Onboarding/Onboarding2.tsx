import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import styles from './Onboarding2.styles';
import ToneCard from '../../components/ToneCard/ToneCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBuddy } from '../../context/BuddyContext';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding2'>;

const tones = ['Calm', 'Playful', 'Supportive', 'Motivational'];

const Onboarding2 = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedTone, setSelectedTone] = useState<string | null>(null);
  const { setBuddy } = useBuddy();

  const handleNext = () => {
    if (selectedTone) {
      setBuddy({ tone: selectedTone });
      navigation.navigate('Onboarding3'); // Update to Onboarding3 when ready
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How do you want your buddy to sound?</Text>

      <FlatList
        data={tones}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ToneCard
            label={item}
            selected={selectedTone === item}
            onPress={() => setSelectedTone(item)}
          />
        )}
        contentContainerStyle={styles.cardContainer}
      />

      <TouchableOpacity
        style={[styles.button, !selectedTone && styles.disabled]}
        onPress={handleNext}
        disabled={!selectedTone}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding2;
