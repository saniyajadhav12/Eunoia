import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Animated} from 'react-native';
import styles from './HomeScreen.styles';
import {useBuddy} from '../../context/BuddyContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import SnapJournalModal from '../../components/SnapJournalModal/SnapJournalModal';
import {saveMood, getMoodLog} from '../../utils/moodStorage';
import {useEffect} from 'react';
import {getLast7DaysMood} from '../../utils/moodStorage';
import MoodTimeline from '../../components/MoodTimeline/MoodTimeline';

const moodOptions = ['😊', '😐', '😔', '😡', '🥳'];

const HomeScreen = () => {
  const {buddy} = useBuddy();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showJournal, setShowJournal] = useState(false);
  const [entry, setEntry] = useState('');
  const [todayMood, setTodayMood] = useState<string | null>(null);
  const [latestMood, setLatestMood] = useState<string | null>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [moodWeek, setMoodWeek] = useState<{date: string; mood: string}[]>([]);

  useEffect(() => {
    getMoodLog().then(log => {
      const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
      const todayEntry = log.find(entry => entry.timestamp.startsWith(today));
      if (todayEntry) {
        setTodayMood(todayEntry.mood);
        fadeIn();
      }
    });
    getLast7DaysMood().then(setMoodWeek);
  }, []);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    saveMood(mood).then(() => {
      setTodayMood(mood); // Update immediately
      fadeIn();
      getLast7DaysMood().then(setMoodWeek);
    });
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

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
              onPress={() => handleMoodSelect(item)}
              // onPress={() => {
              //   setSelectedMood(item);
              //   saveMood(item).then(() => {
              //     setLatestMood(item); // show immediately
              //   });
              // }}
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

      {/* {latestMood && (
        <Text style={styles.sectionTitle}>
          Today's Mood: {latestMood}
        </Text>
      )} */}

      {todayMood && (
        <Animated.View style={{opacity: fadeAnim}}>
          <Text style={styles.sectionTitle}>Today's Mood: {todayMood}</Text>
        </Animated.View>
      )}

      {moodWeek.length > 0 && <MoodTimeline data={moodWeek} />}

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
