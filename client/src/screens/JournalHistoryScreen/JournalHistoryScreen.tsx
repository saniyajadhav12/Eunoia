import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './JournalHistoryScreen.styles';
import Toast from 'react-native-toast-message';

interface JournalEntry {
  prompt: string;
  entry: string;
  timestamp: string;
}

const JournalHistoryScreen = () => {
  const [log, setLog] = useState<JournalEntry[]>([]);

  useEffect(() => {
    loadLog();
  }, []);

  const loadLog = async () => {
    const data = await AsyncStorage.getItem('journalLog');
    if (data) {
      const parsed: JournalEntry[] = JSON.parse(data);
      const filtered = parsed.filter(entry => entry.entry.trim() !== '');
      setLog(filtered.reverse()); // most recent first
    }
  };

  const deleteEntry = async (timestampToDelete: string) => {
    const updated = log.filter(item => item.timestamp !== timestampToDelete);
    await AsyncStorage.setItem('journalLog', JSON.stringify(updated));
    setLog(updated);
    Alert.alert('Deleted', 'Your journal entry has been removed.');
  };

  const handleDelete = async (timestampToDelete: string) => {
    const updated = log.filter((item) => item.timestamp !== timestampToDelete);
    await AsyncStorage.setItem('journalLog', JSON.stringify(updated));
    setLog(updated);

    Toast.show({
        type: 'success',
        text1: 'Entry deleted',
        position: 'bottom',
    });
  };
  

  return (
    <ScrollView style={{padding: 20}}>
      <Text style={styles.title}>📖 Journal History</Text>

      {log.length === 0 ? (
        <Text style={{marginTop: 20}}>No journal entries yet.</Text>
      ) : (
        log.map((item, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.timestamp}>
              {new Date(item.timestamp).toLocaleString()}
            </Text>
            <Text style={styles.prompt}>📝 {item.prompt}</Text>
            <Text style={styles.entry}>{item.entry}</Text>

            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'Delete Entry?',
                  'Are you sure you want to delete this journal entry?',
                  [
                    {text: 'Cancel', style: 'cancel'},
                    {
                      text: 'Delete',
                      style: 'destructive',
                      onPress: () => handleDelete(item.timestamp),
                    },
                  ],
                )
              }
              style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default JournalHistoryScreen;
