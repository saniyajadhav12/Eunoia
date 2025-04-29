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

export const getLast7DaysMood = async (): Promise<{ date: string; mood: string }[]> => {
  const log = await getMoodLog();
  const moodMap = new Map<string, string>();

  log.forEach(({ mood, timestamp }) => {
    const date = new Date(timestamp).toISOString().split('T')[0]; // YYYY-MM-DD
    if (!moodMap.has(date)) {
      moodMap.set(date, mood); // first mood of the day
    }
  });

  const today = new Date();
  const result: { date: string; mood: string }[] = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    result.push({
      date: dateStr,
      mood: moodMap.get(dateStr) || '',
    });
  }

  return result;
};

