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
  card: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.sm,
    backgroundColor: colors.white,
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: colors.cardBackground,
  },
  cardText: {
    fontSize: fonts.sizes.md,
    color: colors.text,
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
