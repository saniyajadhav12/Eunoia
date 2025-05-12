import React, { useEffect, useRef, useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './ScreenBreakModal.styles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

interface ScreenBreakModalProps {
  visible: boolean;
  onClose: () => void;
}

const ScreenBreakModal: React.FC<ScreenBreakModalProps> = ({ visible, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(20);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (visible) {
      setSecondsLeft(20);

      intervalRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev === 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [visible]);

  // ✅ Close modal only when secondsLeft becomes 0 (but outside render)
  useEffect(() => {
    if (secondsLeft === 0 && visible) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      ReactNativeHapticFeedback.trigger('notificationSuccess', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });
      setTimeout(onClose, 300); // small delay to avoid render conflict
    }
  }, [secondsLeft, visible]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <Text style={styles.header}>💻 Time to rest your eyes</Text>
        <Text style={styles.timer}>{secondsLeft}s</Text>
        <Text style={styles.message}>Look away from the screen. We’ll close this automatically.</Text>

        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close Now</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ScreenBreakModal;
