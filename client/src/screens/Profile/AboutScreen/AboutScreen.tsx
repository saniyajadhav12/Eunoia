import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import styles from './AboutScreen.styles';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Eunoia</Text>
      <Text style={styles.paragraph}>
        Eunoia is your mindful companion — designed to help you track your mood, reflect through journaling,
        and build self-care habits.
      </Text>

      <Text style={styles.paragraph}>
        Version: <Text style={styles.bold}>v1.0.0</Text>
      </Text>

      <Text style={styles.sectionTitle}>Credits</Text>
      <Text style={styles.paragraph}>💻 Developed with ❤️ by Saniya Jadhav</Text>

      <TouchableOpacity
        onPress={() => Linking.openURL('https://github.com/saniyajadhav12')}
      >
        <Text style={styles.link}>GitHub: @saniyajadhav12</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutScreen;
