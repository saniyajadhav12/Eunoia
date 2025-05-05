import React from 'react';
import { View, Text } from 'react-native';
import styles from './TipCard.styles';

type Props = {
  title: string;
};

const TipCard = ({ title }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default TipCard;
