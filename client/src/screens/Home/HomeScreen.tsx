import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './HomeScreen.styles';
import {useBuddy} from '../../context/BuddyContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import SnapJournalModal from '../../components/SnapJournalModal/SnapJournalModal';
import { saveMood } from '../../utils/moodStorage';

const moodOptions = ['😊', '😐', '😔', '😡', '🥳'];

const HomeScreen = () => {
  const {buddy} = useBuddy();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showJournal, setShowJournal] = useState(false);
  const [entry, setEntry] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hi {buddy.name || 'Buddy'} 👋</Text>

      <Text style={styles.sectionTitle}>How are you feeling today?</Text>
      <View style={styles.moodContainer}>
        <FlatList
          horizontal
          data={moodOptions}
          keyExtractor={item => item}
          contentContainerStyle={styles.moodList}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedMood(item);
                saveMood(item);
              }}
              style={[
                styles.moodItem,
                selectedMood === item && styles.selectedMood,
              ]}>
              <Text style={styles.moodEmoji}>{item}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity
        onPress={() => setShowJournal(true)}
        style={styles.placeholderBox}>
        <Text style={styles.placeholderTitle}>📝 SnapJournal</Text>
        <Text style={styles.placeholderSubtitle}>
          Quick journal entry shortcut
        </Text>
      </TouchableOpacity>

      <View style={styles.reminderBox}>
        <Text style={styles.placeholderTitle}>🔔 Reminders</Text>
        <Text style={styles.reminderItem}>• Drink Water 💧</Text>
        <Text style={styles.reminderItem}>• Breathe for 2 min 🌬️</Text>

        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={() => console.log('View all reminders')}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <SnapJournalModal
        visible={showJournal}
        onClose={() => setShowJournal(false)}
        entry={entry}
        setEntry={setEntry}
        onSave={() => {
          console.log('Journal Entry:', entry); // 🔐 Later: save to local or backend
          setEntry('');
          setShowJournal(false);
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
