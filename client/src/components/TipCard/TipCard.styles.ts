import {StyleSheet} from 'react-native';
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  emoji: {
    fontSize: 28,
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: fonts.sizes.sm,
    color: colors.text,
  },
});

export default styles;
