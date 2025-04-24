import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.sm,
    backgroundColor: colors.white,
  },
  selected: {
    borderColor: colors.primary,
    backgroundColor: colors.cardBackground,
  },
  text: {
    fontSize: fonts.sizes.md,
    color: colors.text,
  },
});

export default styles;
