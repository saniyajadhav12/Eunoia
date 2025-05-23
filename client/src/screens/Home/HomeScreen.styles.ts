import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  greeting: {
    fontSize: fonts.sizes.xl,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: fonts.sizes.md,
    fontWeight: '600',
    marginBottom: spacing.sm,
    color: colors.text,
  },
  moodContainer: {
    flexShrink: 1, 
    marginBottom: spacing.sm, 
  },  
  moodList: {
    gap: spacing.sm,
    marginBottom: 0,
  },
  moodItem: {
    width: 58,
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.cardBackground,
    marginRight: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedMood: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  moodEmoji: {
    fontSize: 22,
  },
  todayMood: {
    fontSize: fonts.sizes.md,
    marginBottom: spacing.md,
    color: colors.text,
    fontWeight: '600',
  },  
  placeholderBox: {
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.md,
  },
  placeholderTitle: {
    fontSize: fonts.sizes.lg,
    fontWeight: 'bold',
    color: colors.text,
  },
  placeholderSubtitle: {
    fontSize: fonts.sizes.sm,
    color: colors.grey,
    marginTop: spacing.xs,
  },
  reminderBox: {
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.md,
  },
  reminderItem: {
    fontSize: fonts.sizes.md,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  viewAllButton: {
    marginTop: spacing.sm,
    alignSelf: 'flex-start',
  },
  viewAllText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  
});

export default styles;
