import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from './ExploreScreen.styles';
import TipCard from '../../components/TipCard/TipCard';

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Discover & Feel Better</Text>

        {/* Daily Inspiration */}
        <Text style={styles.sectionTitle}>🌟 Daily Inspiration</Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>
            "Every day may not be good, but there's something good in every
            day."
          </Text>
        </View>

        {/* Mood Boosters */}
        <Text style={styles.sectionTitle}>🚀 Mood Boosters</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}>
          <TipCard emoji="🚶‍♀️" title="Take a short walk" />
          <TipCard emoji="🎧" title="Listen to calming music" />
          <TipCard emoji="🌬️" title="Breathe deeply for 2 min" />
        </ScrollView>

        {/* Self-care Tips */}
        <Text style={styles.sectionTitle}>🛁 Self-care Tips</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}>
          <TipCard emoji="💧" title="Stay hydrated" />
          <TipCard emoji="💻" title="Take screen breaks" />
          <TipCard emoji="🤝" title="Connect with a friend" />
        </ScrollView>

        {/* Journaling Prompts */}
        <Text style={styles.sectionTitle}>📝 Journaling Prompts</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}>
          <TipCard emoji="😊" title="What made you smile today?" />
          <TipCard emoji="🎯" title="One small goal for tomorrow?" />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
