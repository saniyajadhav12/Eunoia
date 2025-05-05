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
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  quoteBox: {
    backgroundColor: colors.cardBackground,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.md,
  },
  quoteText: {
    fontStyle: 'italic',
    color: colors.textMuted,
    fontSize: fonts.sizes.sm,
  },
  horizontalList: {
    marginBottom: spacing.lg,
  },
});

export default styles;
