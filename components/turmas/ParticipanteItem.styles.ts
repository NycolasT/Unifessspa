/**
 * ESTILOS: ParticipanteItem (React Native)
 * 
 * Estilos do componente ParticipanteItem usando StyleSheet do React Native
 */

import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundCard,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    flex: 1,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.backgroundOverlay,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nome: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.md,
    flex: 1,
  },
});
