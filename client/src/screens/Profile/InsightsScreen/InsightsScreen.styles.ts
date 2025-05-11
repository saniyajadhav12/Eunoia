import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    // flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg/4,
  },
  title: {
    fontSize: fonts.sizes.lg,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fonts.sizes.md,
    color: colors.text,
    marginBottom: spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
  },
  summaryBox: {
    backgroundColor: colors.cardBackground,
    padding: spacing.md,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: fonts.sizes.sm,
    color: colors.grey,
    marginBottom: spacing.xs,
  },
  summaryValue: {
    fontSize: fonts.sizes.lg,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default styles;
