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
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: fonts.sizes.md,
    fontWeight: '600',
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
    color: colors.text,
  },
  paragraph: {
    fontSize: fonts.sizes.sm,
    color: colors.grey,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
    color: colors.text,
  },
  link: {
    color: colors.primary,
    fontWeight: '600',
    marginTop: spacing.sm,
  },
});

export default styles;
