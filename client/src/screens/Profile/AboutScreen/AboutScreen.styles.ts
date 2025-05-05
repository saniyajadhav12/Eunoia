import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';
import spacing from '../../../theme/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  appName: {
    fontSize: fonts.sizes.xl,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  version: {
    fontSize: fonts.sizes.sm,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  description: {
    fontSize: fonts.sizes.md,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: fonts.sizes.md,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  sectionContent: {
    fontSize: fonts.sizes.sm,
    color: colors.textMuted,
  },
  link: {
    fontSize: fonts.sizes.sm,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});

export default styles;
