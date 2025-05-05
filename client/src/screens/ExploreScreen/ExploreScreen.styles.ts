import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  header: {
    fontSize: fonts.sizes.lg,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: fonts.sizes.md,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  quoteBox: {
    backgroundColor: colors.cardBackground,
    padding: spacing.md,
    borderRadius: 12,
    borderColor: colors.borderLight, // soft border
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    marginBottom: spacing.md,
  },
  quoteText: {
    fontStyle: 'italic',
    color: colors.textMuted,
    fontSize: fonts.sizes.sm,
  },
  horizontalList: {
    marginBottom: spacing.md,
  },
  affirmationBox: {
    backgroundColor: colors.cardBackground,
    padding: spacing.md,
    borderRadius: 12,
    borderColor: colors.borderLight,
    borderWidth: 1,
    marginBottom: spacing.md,
  },
  affirmationText: {
      fontSize: fonts.sizes.sm,
      color: colors.primary,
      fontStyle: 'italic',
      textAlign: 'center',
  },

});

export default styles;
