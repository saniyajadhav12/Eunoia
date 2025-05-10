import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './ExploreScreen.styles';
import TipCard from '../../components/TipCard/TipCard';
import BreathingModal from '../../components/BreathingModal/BreathingModal'; // <-- new modal component

const ExploreScreen = () => {
  const [showBreathing, setShowBreathing] = useState(false);
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

        {/* Affirmation */}
        <Text style={styles.sectionTitle}>💜 Daily Affirmation</Text>
        <View style={styles.affirmationBox}>
          <Text style={styles.affirmationText}>
            "You are doing your best and that's enough."
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
          <TipCard
            emoji="🌬️"
            title="Breathe deeply for 2 min"
            onPress={() => {
              console.log("Breathe card tapped");
              setShowBreathing(true);
            }}
          />
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

        {/* Soothing Sounds */}
        <Text style={styles.sectionTitle}>🎶 Soothing Sounds</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}>
          <TipCard emoji="🌊" title="Ocean Waves" />
          <TipCard emoji="🌿" title="Forest Ambience" />
          <TipCard emoji="🔥" title="Campfire Crackle" />
        </ScrollView>

      </ScrollView>
      <BreathingModal visible={showBreathing} onClose={() => setShowBreathing(false)} />
    </SafeAreaView>
  );
};

export default ExploreScreen;
