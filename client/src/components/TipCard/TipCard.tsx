import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './TipCard.styles';

type Props = {
  emoji: string;
  title: string;
};

const TipCard = ({emoji, title}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TipCard;
