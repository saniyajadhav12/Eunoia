import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './ExploreScreen.styles';
import TipCard from '../../components/TipCard/TipCard';

const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Discover & Feel Better</Text>

      {/* Daily Inspiration */}
      <Text style={styles.sectionTitle}>🌟 Daily Inspiration</Text>
      <View style={styles.quoteBox}>
        <Text style={styles.quoteText}>
          "Every day may not be good, but there's something good in every day."
        </Text>
      </View>

      {/* Mood Boosters */}
      <Text style={styles.sectionTitle}>🚀 Mood Boosters</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
        <TipCard title="Take a short walk 🚶‍♀️" />
        <TipCard title="Listen to calming music 🎧" />
        <TipCard title="Breathe deeply for 2 min 🌬️" />
      </ScrollView>

      {/* Self-care Tips */}
      <Text style={styles.sectionTitle}>🛁 Self-care Tips</Text>
      <TipCard title="Stay hydrated 💧" />
      <TipCard title="Take screen breaks" />
      <TipCard title="Connect with a friend 🤝" />

      {/* Journaling Prompts */}
      <Text style={styles.sectionTitle}>📝 Journaling Prompts</Text>
      <TipCard title="What made you smile today?" />
      <TipCard title="One small goal for tomorrow?" />
    </ScrollView>
  );
};

export default ExploreScreen;
