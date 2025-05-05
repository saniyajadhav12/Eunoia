import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.sm,
    borderRadius: 10,
    backgroundColor: colors.cardBackground,
  },
  mood: {
    fontSize: 24,
  },
  date: {
    fontSize: fonts.sizes.sm,
    color: colors.grey,
    alignSelf: 'center',
  },
  empty: {
    fontSize: fonts.sizes.md,
    textAlign: 'center',
    color: colors.grey,
    marginTop: spacing.xl,
  },
  title: {
    fontSize: fonts.sizes.lg,
    fontWeight: 'bold',
    marginBottom: spacing.md,
  },
});

export default styles;
