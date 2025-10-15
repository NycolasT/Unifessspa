/**
 * ESTILOS: TurmaCard (React Native)
 * 
 * Estilos do componente TurmaCard usando StyleSheet do React Native
 */

import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.backgroundCard,
    padding: theme.spacing.xxl,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },

  iconContainer: {
    width: 24,
    height: 24,
  },

  cardText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.md,
    flex: 1,
  },
});
