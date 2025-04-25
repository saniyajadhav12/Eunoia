import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './SnapJournalModal.styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  entry: string;
  setEntry: (text: string) => void;
  onSave: () => void;
};

const SnapJournalModal = ({ visible, onClose, entry, setEntry, onSave }: Props) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>New Journal Entry</Text>
          <TextInput
            style={styles.input}
            placeholder="What's on your mind?"
            multiline
            value={entry}
            onChangeText={setEntry}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSave} style={styles.saveButton}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SnapJournalModal;
