import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: fonts.sizes.lg,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fonts.sizes.sm,
    color: colors.grey,
    marginBottom: spacing.lg,
  },
  chartBox: {
    backgroundColor: colors.cardBackground,
    padding: spacing.xl,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  chartText: {
    fontSize: fonts.sizes.sm,
    color: colors.grey,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  summaryBox: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: fonts.sizes.sm,
    color: colors.grey,
    marginBottom: spacing.xs,
  },
  summaryValue: {
    fontSize: 24,
  },
});

export default styles;
