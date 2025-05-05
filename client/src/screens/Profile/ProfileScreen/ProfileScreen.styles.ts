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
  title: {
    fontSize: fonts.sizes.xl,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.lg,
    letterSpacing: 0.5,
  },  
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: spacing.sm,
  },
  name: {
    fontSize: fonts.sizes.lg,
    fontWeight: 'bold',
    color: colors.primary,
  },
  sectionTitle: {
    fontSize: fonts.sizes.md,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
});

export default styles;
