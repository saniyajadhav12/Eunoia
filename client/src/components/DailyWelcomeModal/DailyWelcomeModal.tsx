import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './DailyWelcomeModal.styles';
import { fetchDailyQuote } from '../../services/quoteService';
import { saveMood } from '../../utils/moodStorage';
import { setLastQuoteTimestamp } from '../../utils/quoteTiming';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const moodOptions = ['😊', '😐', '😢', '😠', '😴'];

const DailyWelcomeModal: React.FC<Props> = ({ visible, onClose }) => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  useEffect(() => {
    if (visible) {
      setLoading(true);
      fetchDailyQuote().then((q) => {
        setQuote(q || 'You are enough, just as you are.');
        setLoading(false);
      });
    }
  }, [visible]);

  const handleSubmit = () => {
    if (selectedMood) {
      saveMood(selectedMood);
    }
    setLastQuoteTimestamp(); // save the current time
    onClose();
  };


const handleSkip = () => {
    setLastQuoteTimestamp(); // save even if skipped
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>💜 Your Daily Affirmation</Text>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text style={styles.quote}>"{quote}"</Text>
          )}

          <Text style={styles.subtitle}>How are you feeling today?</Text>
          <View style={styles.moodRow}>
            {moodOptions.map((mood) => (
              <TouchableOpacity
                key={mood}
                style={[
                  styles.moodOption,
                  selectedMood === mood && styles.selectedMood,
                ]}
                onPress={() => setSelectedMood(mood)}
              >
                <Text style={styles.moodEmoji}>{mood}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.submitButton}
            disabled={!selectedMood}
          >
            <Text style={styles.submitText}>
              {selectedMood ? 'Let’s Go →' : 'Select a mood'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DailyWelcomeModal;
