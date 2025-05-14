import PushNotification from 'react-native-push-notification';
import { fetchDailyQuote } from '../services/quoteService';

export const scheduleQuoteNotifications = async () => {
  PushNotification.cancelAllLocalNotifications();

  const quote = await fetchDailyQuote();
  if (!quote) return;

  const hours = [8, 11, 14, 17, 20]; // notification times

  hours.forEach((hour, index) => {
    const now = new Date();
    const fireDate = new Date();
    fireDate.setHours(hour);
    fireDate.setMinutes(0);
    fireDate.setSeconds(0);

    if (fireDate > now) {
      PushNotification.localNotificationSchedule({
        message: quote,
        date: fireDate,
        allowWhileIdle: true,
        channelId: 'eunoia-affirmations',
      });
    }
  });
};
