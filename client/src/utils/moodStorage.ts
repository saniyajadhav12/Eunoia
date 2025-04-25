import AsyncStorage from '@react-native-async-storage/async-storage';

const MOOD_LOG_KEY = 'eunoia-mood-log';

export type MoodEntry = {
  mood: string;
  timestamp: string;
};

export const saveMood = async (mood: string) => {
  const newEntry: MoodEntry = {
    mood,
    timestamp: new Date().toISOString(),
  };

  const existing = await AsyncStorage.getItem(MOOD_LOG_KEY);
  const log: MoodEntry[] = existing ? JSON.parse(existing) : [];

  log.unshift(newEntry); // add newest first

  await AsyncStorage.setItem(MOOD_LOG_KEY, JSON.stringify(log));
  console.log('✅ Saved mood:', newEntry);
};

export const getMoodLog = async (): Promise<MoodEntry[]> => {
  const stored = await AsyncStorage.getItem(MOOD_LOG_KEY);
  console.log('📦 Reading raw from AsyncStorage:', stored);
  return stored ? JSON.parse(stored) : [];
};
