import AsyncStorage from '@react-native-async-storage/async-storage';

const LAST_QUOTE_TIME_KEY = 'lastQuoteShownAt';

export const getLastQuoteTimestamp = async (): Promise<number | null> => {
  const value = await AsyncStorage.getItem(LAST_QUOTE_TIME_KEY);
  return value ? parseInt(value, 10) : null;
};

export const setLastQuoteTimestamp = async () => {
  const now = Date.now();
  await AsyncStorage.setItem(LAST_QUOTE_TIME_KEY, now.toString());
};

export const shouldShowQuote = async (thresholdHours: number = 2): Promise<boolean> => {
  const last = await getLastQuoteTimestamp();
  if (!last) return true;

  const now = Date.now();
  const diffHours = (now - last) / (1000 * 60 * 60);
  return diffHours >= thresholdHours;
};
