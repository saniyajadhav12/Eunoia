// ConnectFriendModal.tsx
import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './ConnectFriendModal.styles';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const ConnectFriendModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <Text style={styles.header}>🤝 Connect with a Friend</Text>
        <Text style={styles.message}>Send a quick “thinking of you” message to someone today.</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Will Do</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ConnectFriendModal;
