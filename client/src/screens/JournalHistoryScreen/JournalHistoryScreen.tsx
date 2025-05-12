import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './JournalHistoryScreen.styles';

interface JournalEntry {
  timestamp: string;
  prompt: string;
  entry: string;
}

const JournalHistoryScreen = () => {
  const [log, setLog] = useState<JournalEntry[]>([]);

  useEffect(() => {
    const loadLog = async () => {
      const data = await AsyncStorage.getItem('journalLog');
      if (data) {
        setLog(JSON.parse(data));
      }
    };
    loadLog();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📖 Journal History</Text>
      {log.length === 0 ? (
        <Text style={styles.emptyText}>No journal entries yet.</Text>
      ) : (
        log
          .slice()
          .reverse()
          .map((entry, i) => (
            <View key={i} style={styles.entryBox}>
              <Text style={styles.date}>
                {new Date(entry.timestamp).toLocaleString()}
              </Text>
              <Text style={styles.prompt}>📝 {entry.prompt}</Text>
              <Text style={styles.entry}>{entry.entry}</Text>
            </View>
          ))
      )}
    </ScrollView>
  );
};

export default JournalHistoryScreen;
