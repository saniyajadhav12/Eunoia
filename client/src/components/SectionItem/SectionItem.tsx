import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './SectionItem.styles';
import colors from '../../theme/colors';

type Props = {
  label: string;
  icon: string;
  onPress: () => void;
};

const SectionItem = ({ label, icon, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={22} color={colors.primary} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color={colors.grey} />
    </TouchableOpacity>
  );
};

export default SectionItem;
