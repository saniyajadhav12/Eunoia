import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ToneCard.styles';

interface ToneCardProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const ToneCard = ({ label, selected, onPress }: ToneCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.selected]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ToneCard;
