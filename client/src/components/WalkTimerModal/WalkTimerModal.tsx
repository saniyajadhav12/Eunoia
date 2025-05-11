import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './WalkTimerModal.styles';
import ConfettiCannon from 'react-native-confetti-cannon';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Video from 'react-native-video';

interface WalkTimerModalProps {
  visible: boolean;
  onClose: () => void;
}

const WalkTimerModal: React.FC<WalkTimerModalProps> = ({ visible, onClose }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsCompleted(false);
      setPlaySound(false);
    }
  }, [visible]);

  const handleCompletion = () => {
    ReactNativeHapticFeedback.trigger('notificationSuccess', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
    setShowConfetti(true);
    setIsCompleted(true);
    setPlaySound(true);
    setTimeout(() => {
      setShowConfetti(false);
      onClose();
    }, 3500);
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        {!isCompleted ? (
          <>
            <Text style={styles.header}>🚶‍♀️ Time for a short walk</Text>

            <CountdownCircleTimer
              isPlaying
              duration={300}
              colors={['#BFA2DB', '#A1C6EA', '#7FB77E']}
              colorsTime={[300, 180, 0]}
              onComplete={() => {
                handleCompletion();
                return { shouldRepeat: false };
              }}
              size={180}
              strokeWidth={10}
            >
              {({ remainingTime }) => {
                const mins = Math.floor(remainingTime / 60);
                const secs = remainingTime % 60;
                return (
                  <Text style={styles.timer}>
                    {mins}:{secs.toString().padStart(2, '0')}
                  </Text>
                );
              }}
            </CountdownCircleTimer>

            <Text style={styles.message}>
              Take a few deep breaths and enjoy your steps.
            </Text>

            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>End Early</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.header}>🎉 Well done!</Text>
            <Text style={styles.message}>You took time for yourself — that matters.</Text>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Sound using react-native-video */}
        {playSound && (
          <Video
            source={require('../../assets/sounds/timer-end.mp3')}
            paused={false}
            repeat={false}
            // audioOnly
            playInBackground
            ignoreSilentSwitch="ignore"
            onEnd={() => setPlaySound(false)}
            style={{ width: 0, height: 0 }}
          />
        )}

        {showConfetti && <ConfettiCannon count={100} origin={{ x: 200, y: 300 }} />}
      </View>
    </Modal>
  );
};

export default WalkTimerModal;
