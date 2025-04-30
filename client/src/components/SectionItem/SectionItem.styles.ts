import { StyleSheet } from 'react-native';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    borderRadius: 12,
    backgroundColor: colors.cardBackground,
    marginBottom: spacing.sm,
  },
  iconContainer: {
    width: 32,
    alignItems: 'center',
    marginRight: spacing.md,
  },
  label: {
    flex: 1,
    fontSize: fonts.sizes.md,
    color: colors.text,
    fontWeight: '500',
  },
});

export default styles;
