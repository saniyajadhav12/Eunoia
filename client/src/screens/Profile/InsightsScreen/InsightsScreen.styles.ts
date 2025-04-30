import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.sizes.xl,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: fonts.sizes.sm,
    color: colors.grey,
    marginTop: spacing.md,
  },
  value: {
    fontSize: fonts.sizes.md,
    color: colors.text,
  },
});

export default styles;
