import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './ExploreScreen.styles';
import TipCard from '../../components/TipCard/TipCard';
import BreathingModal from '../../components/BreathingModal/BreathingModal'; // <-- new modal component
import WalkTimerModal from '../../components/WalkTimerModal/WalkTimerModal';
import CalmingMusicModal from '../../components/CalmingMusicModal/CalmingMusicModal';
import HydrationTipModal from '../../components/HydrationTipModal/HydrationTipModal';
import ScreenBreakModal from '../../components/ScreenBreakModal/ScreenBreakModal';
import ConnectFriendModal from '../../components/ConnectFriendModal/ConnectFriendModal';
import JournalPromptModal from '../../components/JournalPromptModal/JournalPromptModal';

const ExploreScreen = () => {
  const [showBreathing, setShowBreathing] = useState(false);
  const [showWalkTimer, setShowWalkTimer] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showHydration, setShowHydration] = useState(false);
  const [showScreenBreak, setShowScreenBreak] = useState(false);
  const [showConnect, setShowConnect] = useState(false);
  const [showJournalPrompt, setShowJournalPrompt] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState('');

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
          <TipCard
            emoji="🚶‍♀️"
            title="Take a short walk"
            onPress={() => setShowWalkTimer(true)}
          />
          <TipCard 
            emoji="🎧" 
            title="Listen to calming music" 
            onPress={() => setShowMusic(true)} 
          />
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
          <TipCard 
            emoji="💧" 
            title="Stay hydrated" 
            onPress={() => setShowHydration(true)} 
          />
          <TipCard 
            emoji="💻" 
            title="Take screen breaks" 
            onPress={() => setShowScreenBreak(true)} 
          />
          <TipCard 
            emoji="🤝" 
            title="Connect with a friend" 
            onPress={() => setShowConnect(true)} 
          />

        </ScrollView>

        {/* Journaling Prompts */}
        <Text style={styles.sectionTitle}>📝 Journaling Prompts</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}>
          <TipCard
            emoji="😊"
            title="What made you smile today?"
            onPress={() => {
              setSelectedPrompt("What made you smile today?");
              setShowJournalPrompt(true);
            }}
          />
          <TipCard
            emoji="🎯"
            title="One small goal for tomorrow?"
            onPress={() => {
              setSelectedPrompt("One small goal for tomorrow?");
              setShowJournalPrompt(true);
            }}
          />
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
      <WalkTimerModal visible={showWalkTimer} onClose={() => setShowWalkTimer(false)} />
      <CalmingMusicModal visible={showMusic} onClose={() => setShowMusic(false)} />
      <BreathingModal visible={showBreathing} onClose={() => setShowBreathing(false)} />
      <HydrationTipModal visible={showHydration} onClose={() => setShowHydration(false)} />
      <ScreenBreakModal visible={showScreenBreak} onClose={() => setShowScreenBreak(false)} />
      <ConnectFriendModal visible={showConnect} onClose={() => setShowConnect(false)} />
      <JournalPromptModal visible={showJournalPrompt} prompt={selectedPrompt} onClose={() => setShowJournalPrompt(false)} />

    </SafeAreaView>
  );
};

export default ExploreScreen;
