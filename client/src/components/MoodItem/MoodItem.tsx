import React from 'react';
import { View, Text } from 'react-native';
import styles from './MoodItem.styles';

type MoodItemProps = {
  mood: string;
  date: string;
};

const MoodItem: React.FC<MoodItemProps> = ({ mood, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{mood}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default MoodItem;
