import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './HomeScreen.styles';
import { useBuddy } from '../../context/BuddyContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const moodOptions = ['😊', '😐', '😔', '😡', '🥳'];

const HomeScreen = () => {
  const { buddy } = useBuddy();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hi {buddy.name || 'Buddy'} 👋</Text>

      <Text style={styles.sectionTitle}>How are you feeling today?</Text>
      <View style={styles.moodContainer}>
        <FlatList
            horizontal
            data={moodOptions}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.moodList}
            renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => setSelectedMood(item)}
                style={[
                styles.moodItem,
                selectedMood === item && styles.selectedMood,
                ]}
            >
                <Text style={styles.moodEmoji}>{item}</Text>
            </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
        />
       </View>

      <View style={[styles.placeholderBox, styles.firstBox]}>
        <Text style={styles.placeholderTitle}>📝 SnapJournal</Text>
        <Text style={styles.placeholderSubtitle}>Quick journal entry shortcut</Text>
      </View>

      <View style={styles.placeholderBox}>
        <Text style={styles.placeholderTitle}>🔔 Reminders</Text>
        <Text style={styles.placeholderSubtitle}>Hydration, sleep, affirmations...</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
