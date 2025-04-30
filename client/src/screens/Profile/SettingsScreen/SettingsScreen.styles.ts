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
  sectionTitle: {
    fontSize: fonts.sizes.md,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    marginBottom: spacing.sm,
  },
  label: {
    fontSize: fonts.sizes.md,
    color: colors.text,
  },
  logoutButton: {
    marginTop: spacing.xl,
    paddingVertical: spacing.md,
    backgroundColor: '#FFE4E6',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: fonts.sizes.md,
    fontWeight: '600',
    color: '#DC2626',
  },
});

export default styles;
