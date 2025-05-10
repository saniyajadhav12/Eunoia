import React, { useEffect, useRef, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from './BreathingModal.styles';
import ConfettiCannon from 'react-native-confetti-cannon';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Video from 'react-native-video';

interface BreathingModalProps {
  visible: boolean;
  onClose: () => void;
}

const BreathingModal: React.FC<BreathingModalProps> = ({ visible, onClose }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [phase, setPhase] = useState<'Inhale' | 'Exhale' | 'Hold'>('Inhale');
  const [breathCount, setBreathCount] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shouldClose, setShouldClose] = useState(false);
  const [pauseAudio, setPauseAudio] = useState(false);

  const animateScale = (toValue: number, duration: number) => {
    Animated.timing(scale, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const triggerCelebration = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [phase]);

  useEffect(() => {
    if (!visible) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setBreathCount(1);

    const startCycle = () => {
      setPhase('Inhale');
      ReactNativeHapticFeedback.trigger('impactLight', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });
      animateScale(1.5, 4000);

      setTimeout(() => {
        setPhase('Hold');
        ReactNativeHapticFeedback.trigger('impactLight', {
          enableVibrateFallback: true,
          ignoreAndroidSystemSettings: false,
        });
      }, 4000);

      setTimeout(() => {
        setPhase('Exhale');
        ReactNativeHapticFeedback.trigger('impactLight', {
          enableVibrateFallback: true,
          ignoreAndroidSystemSettings: false,
        });
        animateScale(1, 4000);
      }, 6000);

      setTimeout(() => {
        setPhase('Hold');
        ReactNativeHapticFeedback.trigger('impactLight', {
          enableVibrateFallback: true,
          ignoreAndroidSystemSettings: false,
        });

        setBreathCount((prev) => {
          const next = prev + 1;
          if (next > 10) {
            clearInterval(intervalRef.current!);
            triggerCelebration();
            setPauseAudio(true); // ⏸️ pause audio
            setShouldClose(true); // ⌛ flag modal close
            setTimeout(onClose, 2500);
          }
          return next;
        });
      }, 10000);
    };

    startCycle();
    intervalRef.current = setInterval(startCycle, 12000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        {/* Looping background audio */}
        {visible && (
          <Video
            source={require('../../assets/sounds/clam-loop.mp3')}
            repeat
            paused={pauseAudio}
            // audioOnly
            playInBackground
            ignoreSilentSwitch="ignore"
            onError={(e) => console.log('Audio error:', e)}
            style={{ width: 0, height: 0 }} // Invisible
          />
        )}

        <Animated.View style={[styles.circle, { transform: [{ scale }] }]} />
        <View style={{ height: 40 }} />
        <Animated.Text style={[styles.phaseText, { opacity: fadeAnim }]}>
          {phase}
        </Animated.Text>

        {/* Progress Dots */}
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <View
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 4,
                backgroundColor: i < breathCount ? '#fff' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </View>

        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>I'm done</Text>
        </TouchableOpacity>

        {/* Confetti */}
        {showConfetti && <ConfettiCannon count={80} origin={{ x: 200, y: 300 }} />}
      </View>
    </Modal>
  );
};

export default BreathingModal;
