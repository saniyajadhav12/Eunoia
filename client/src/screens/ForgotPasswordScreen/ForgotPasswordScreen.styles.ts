import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.sizes.xl,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fonts.sizes.md,
    color: colors.textMuted,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 10,
    padding: spacing.md,
    marginBottom: spacing.sm,
    fontSize: fonts.sizes.md,
    color: colors.text,
    backgroundColor: colors.cardBackground,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 10,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.cardBackground,
    marginBottom: spacing.sm,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: spacing.md,
    fontSize: fonts.sizes.md,
    color: colors.text,
  },
  eyeIcon: {
    paddingLeft: spacing.sm,
  },  
  errorText: {
    color: '#DC2626',
    marginBottom: spacing.sm,
    fontSize: fonts.sizes.sm,
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  buttonDisabled: {
    backgroundColor: colors.borderLight,
  },
  buttonText: {
    color: '#fff',
    fontSize: fonts.sizes.md,
    fontWeight: 'bold',
  },
  linkText: {
    color: colors.primary,
    textAlign: 'center',
    marginTop: spacing.md,
  },
});

export default styles;
