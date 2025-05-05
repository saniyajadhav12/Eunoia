import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './MoodHistoryScreen.styles';
import { getMoodLog, MoodEntry } from '../../../utils/moodStorage';
import MoodItem from '../../../components/MoodItem/MoodItem';

const MoodHistoryScreen = () => {
  const [log, setLog] = useState<MoodEntry[]>([]);

  useEffect(() => {
    getMoodLog().then(setLog);
  }, []);

  const renderItem = ({ item }: { item: MoodEntry }) => {
    const date = new Date(item.timestamp).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    return <MoodItem mood={item.mood} date={date} />;
  };

  return (
    <View style={styles.container}>
      {log.length === 0 ? (
        <Text style={styles.empty}>No moods logged yet.</Text>
      ) : (
        <FlatList
          data={log}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default MoodHistoryScreen;
