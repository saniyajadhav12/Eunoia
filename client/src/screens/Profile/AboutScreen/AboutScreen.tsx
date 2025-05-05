import React from 'react';
import { View, Text, Linking } from 'react-native';
import styles from './AboutScreen.styles';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Eunoia 🌱</Text>
      <Text style={styles.version}>Version 1.0.0</Text>

      <Text style={styles.description}>
        Eunoia is your friendly wellness companion, helping you track moods, set reminders, and grow healthier habits.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Credits</Text>
        <Text style={styles.sectionContent}>Developed by Saniya Jadhav</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text 
          style={styles.link} 
          onPress={() => Linking.openURL('mailto:saniya@example.com')}
        >
          saniya@example.com
        </Text>
      </View>
    </View>
  );
};

export default AboutScreen;
