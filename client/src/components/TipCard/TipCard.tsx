import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './TipCard.styles';

type Props = {
  emoji: string;
  title: string;
  onPress?: () => void;
};

const TipCard = ({emoji, title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TipCard;
