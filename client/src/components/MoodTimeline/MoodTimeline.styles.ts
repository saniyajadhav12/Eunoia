import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.md,
    backgroundColor: colors.cardBackground,
    padding: spacing.sm,
    borderRadius: 12,
  },
  dayBox: {
    alignItems: 'center',
    width: 40,
  },
  moodEmoji: {
    fontSize: 22,
    marginBottom: spacing.xs,
  },
  dayLabel: {
    fontSize: fonts.sizes.xs,
    color: colors.grey,
  },
  todayHighlight: {
    borderColor: colors.primary,
    borderWidth: 1.5,
    borderRadius: 8,
    padding: spacing.xs,
  },
});

export default styles;
