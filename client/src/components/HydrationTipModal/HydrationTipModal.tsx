// HydrationTipModal.tsx
import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './HydrationTipModal.styles';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const HydrationTipModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <Text style={styles.header}>💧 Stay Hydrated</Text>
        <Text style={styles.message}>Drinking water can boost focus and mood. Take a sip now!</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Got it!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default HydrationTipModal;
