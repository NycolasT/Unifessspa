/**
 * ESTILOS: TurmasListScreen (React Native)
 * 
 * Estilos da tela de lista de turmas usando StyleSheet do React Native
 */

import { StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.xxl,
  },

  titleContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxxl,
  },

  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.xxxl,
    fontWeight: '700',
    marginBottom: theme.spacing.xs,
  },

  subtitle: {
    color: theme.colors.textTertiary,
    fontSize: theme.fontSizes.md,
  },

  listContent: {
    paddingBottom: theme.spacing.xxl,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xxxl * 2,
  },

  emptyText: {
    color: theme.colors.textTertiary,
    fontSize: theme.fontSizes.md,
    textAlign: 'center',
    lineHeight: 24,
  },

  buttonContainer: {
    paddingHorizontal: theme.spacing.xxl,
    paddingBottom: theme.spacing.xxl,
  },
});
