import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './CalmingMusicModal.styles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Video from 'react-native-video';

interface CalmingMusicModalProps {
  visible: boolean;
  onClose: () => void;
}

const CalmingMusicModal: React.FC<CalmingMusicModalProps> = ({ visible, onClose }) => {
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    if (visible) {
      setPlaySound(true);
      ReactNativeHapticFeedback.trigger('impactLight', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });

      // Optional: auto-close after 3 mins
      const timeout = setTimeout(() => {
        setPlaySound(false);
        onClose();
      }, 3 * 60 * 1000); // 3 minutes

      return () => clearTimeout(timeout);
    } else {
      setPlaySound(false);
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <Text style={styles.header}>🎶 Time to Unwind</Text>
        <Text style={styles.message}>
          Let this music soothe your thoughts. Just breathe and relax.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Stop Listening</Text>
        </TouchableOpacity>

        {playSound && (
          <Video
            source={require('../../assets/sounds/ocean-waves.mp3')}
            paused={false}
            repeat
            playInBackground
            ignoreSilentSwitch="ignore"
            style={{ width: 0, height: 0 }}
            onError={(e) => console.log('Audio error', e)}
          />
        )}
      </View>
    </Modal>
  );
};

export default CalmingMusicModal;
