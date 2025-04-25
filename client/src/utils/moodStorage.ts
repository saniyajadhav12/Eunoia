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

  log.unshift(newEntry); // add to top

  await AsyncStorage.setItem(MOOD_LOG_KEY, JSON.stringify(log));
};

export const getMoodLog = async (): Promise<MoodEntry[]> => {
  const stored = await AsyncStorage.getItem(MOOD_LOG_KEY);
  return stored ? JSON.parse(stored) : [];
};
