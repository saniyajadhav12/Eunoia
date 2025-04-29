import React from 'react';
import { View, Text } from 'react-native';
import styles from './MoodTimeline.styles';

type MoodEntry = {
  date: string;
  mood: string;
};

type Props = {
  data: MoodEntry[];
};

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const MoodTimeline: React.FC<Props> = ({ data }) => {
  const weekMap: Record<string, string> = {};

  data.forEach(({ date, mood }) => {
    const day = new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
        weekday: 'short',
      });      
    weekMap[day] = mood;
  });

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
  });
  

  return (
    <View style={styles.container}>
      {daysOfWeek.map((day) => (
        <View
          key={day}
          style={[
            styles.dayBox,
            today === day && styles.todayHighlight,
          ]}
        >
          <Text style={styles.moodEmoji}>{weekMap[day] || '–'}</Text>
          <Text style={styles.dayLabel}>{day}</Text>
        </View>
      ))}
    </View>
  );
};

export default MoodTimeline;
