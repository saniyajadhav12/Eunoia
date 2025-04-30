import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useBuddy } from '../../../context/BuddyContext';
import styles from './InsightsScreen.styles';

const InsightsScreen = () => {
  const { buddy } = useBuddy();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Buddy Debug Info</Text>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{buddy.name}</Text>

      <Text style={styles.label}>Tone:</Text>
      <Text style={styles.value}>{buddy.tone}</Text>

      <Text style={styles.label}>Lifestyle:</Text>
      <Text style={styles.value}>{buddy.lifestyle}</Text>

      <Text style={styles.label}>Reminder Style:</Text>
      <Text style={styles.value}>{buddy.reminderStyle}</Text>
    </ScrollView>
  );
};

export default InsightsScreen;
