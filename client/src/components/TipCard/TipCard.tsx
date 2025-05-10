import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './TipCard.styles';

type Props = {
  emoji: string;
  title: string;
};

const TipCard = ({emoji, title}: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TipCard;
