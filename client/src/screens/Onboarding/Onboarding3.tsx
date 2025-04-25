import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { useBuddy } from '../../context/BuddyContext';
import styles from './Onboarding3.styles';
import ToneCard from '../../components/ToneCard/ToneCard';
import { SafeAreaView } from 'react-native-safe-area-context';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding3'>;

const lifestyles = ['Structured', 'Flexible', 'Spontaneous'];

const Onboarding3 = () => {
  const navigation = useNavigation<NavigationProp>();
  const { setBuddy } = useBuddy();
  const [selectedLifestyle, setSelectedLifestyle] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedLifestyle) {
      setBuddy({ lifestyle: selectedLifestyle });
      navigation.navigate('Home'); // Change to Onboarding4 later
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What best describes your lifestyle?</Text>

      <FlatList
        data={lifestyles}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ToneCard
            label={item}
            selected={selectedLifestyle === item}
            onPress={() => setSelectedLifestyle(item)}
          />
        )}
        contentContainerStyle={styles.cardContainer}
      />

      <TouchableOpacity
        style={[styles.button, !selectedLifestyle && styles.disabled]}
        onPress={handleNext}
        disabled={!selectedLifestyle}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding3;
