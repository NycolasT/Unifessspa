/**
 * ESTILOS: NovaTurmaScreen (React Native)
 * 
 * Estilos da tela de nova turma usando StyleSheet do React Native
 */

import { StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  keyboardView: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.xxl,
    alignItems: 'center',
  },

  iconContainer: {
    marginBottom: theme.spacing.xxxl,
  },

  titleContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxxl + theme.spacing.sm,
  },

  title: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.xxxl,
    fontWeight: '700',
    marginBottom: theme.spacing.sm,
  },

  subtitle: {
    color: theme.colors.textTertiary,
    fontSize: theme.fontSizes.md,
  },

  form: {
    width: '100%',
    gap: theme.spacing.xl,
  },
});
