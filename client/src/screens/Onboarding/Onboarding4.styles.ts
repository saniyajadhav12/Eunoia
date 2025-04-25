import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.sizes.lg,
    fontWeight: 'bold',
    marginBottom: spacing.lg,
    color: colors.primary,
  },
  cardContainer: {
    gap: spacing.md,
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fonts.sizes.md,
  },
  disabled: {
    backgroundColor: colors.grey,
  },
});

export default styles;
