import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './JournalPromptModal.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  visible: boolean;
  prompt: string;
  onClose: () => void;
}

const JournalPromptModal: React.FC<Props> = ({ visible, prompt, onClose }) => {
  const [entry, setEntry] = useState('');

  const handleSave = async () => {
    const journal = {
      prompt,
      entry,
      timestamp: new Date().toISOString(),
    };

    try {
      const prev = await AsyncStorage.getItem('journalLog');
      const log = prev ? JSON.parse(prev) : [];
      log.push(journal);
      await AsyncStorage.setItem('journalLog', JSON.stringify(log));
      Alert.alert('Saved!', 'Your journal entry has been saved.');
      setEntry('');
      onClose();
    } catch (err) {
      console.error('Journal save failed:', err);
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.prompt}>{prompt}</Text>

          <TextInput
            value={entry}
            onChangeText={setEntry}
            placeholder="Write your thoughts..."
            multiline
            style={styles.input}
          />

          <TouchableOpacity
            style={[
              styles.button,
              !entry.trim() && styles.buttonDisabled,
            ]}
            onPress={handleSave}
            disabled={!entry.trim()}
          >
            <Text
              style={[
                styles.buttonText,
                !entry.trim() && styles.buttonTextDisabled,
              ]}
            >
              Save
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setEntry('');
              onClose();
            }}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default JournalPromptModal;
