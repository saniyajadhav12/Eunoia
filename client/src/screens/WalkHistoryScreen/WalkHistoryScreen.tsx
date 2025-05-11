import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './WalkHistoryScreen.styles';

interface WalkSession {
  timestamp: string;
  duration: number;
  completed: boolean;
}

const WalkHistoryScreen = () => {
  const [log, setLog] = useState<WalkSession[]>([]);

  useEffect(() => {
    const loadLog = async () => {
      const data = await AsyncStorage.getItem('walkLog');
      if (data) {
        setLog(JSON.parse(data));
      }
    };
    loadLog();
  }, []);

  const totalMinutes = log.reduce((sum, entry) => sum + entry.duration, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🚶‍♀️ Walk History</Text>
      <Text style={styles.summary}>
        Total Walks: {log.length} • Total Minutes: {totalMinutes}
      </Text>

      {log
        .slice()
        .reverse()
        .map((entry, i) => (
          <View key={i} style={styles.entryBox}>
            <Text style={styles.entryText}>
              {new Date(entry.timestamp).toLocaleString()}
            </Text>
            <Text style={[styles.status, entry.completed ? styles.completed : styles.early]}>
              {entry.completed ? '✅ Completed' : '⚠️ Ended Early'} – {entry.duration} min
            </Text>
          </View>
        ))}
    </ScrollView>
  );
};

export default WalkHistoryScreen;
