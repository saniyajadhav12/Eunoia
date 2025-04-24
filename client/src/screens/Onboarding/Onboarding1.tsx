import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import styles from './Onboarding1.styles';
import colors from '../../theme/colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding1'>;

const Onboarding1 = () => {
  const navigation = useNavigation<NavigationProp>();
  const [buddyName, setBuddyName] = useState('');

  const handleNext = () => {
    if (buddyName.trim()) {
      // TODO: save buddy name in context or storage
      navigation.navigate('Home'); // change later to next onboarding screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Eunoia 👋</Text>
      <Text style={styles.subtitle}>Give your digital buddy a name!</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Lumi"
        value={buddyName}
        onChangeText={setBuddyName}
        placeholderTextColor={colors.grey}
      />

      <TouchableOpacity
        style={[styles.button, !buddyName.trim() && styles.disabled]}
        onPress={handleNext}
        disabled={!buddyName.trim()}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding1;
