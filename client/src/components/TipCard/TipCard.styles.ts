import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    padding: spacing.md,
    borderRadius: 12,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
    width: 200,
  },
  text: {
    fontSize: fonts.sizes.sm,
    color: colors.text,
  },
});

export default styles;
