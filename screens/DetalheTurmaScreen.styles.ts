/**
 * ESTILOS: DetalheTurmaScreen (React Native)
 * 
 * Estilos da tela de detalhe da turma usando StyleSheet do React Native
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

  scrollContent: {
    paddingBottom: theme.spacing.xxl,
  },

  content: {
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
    marginBottom: theme.spacing.sm,
  },

  subtitle: {
    color: theme.colors.textTertiary,
    fontSize: theme.fontSizes.md,
  },

  formContainer: {
    marginBottom: theme.spacing.xxxl,
    gap: theme.spacing.xl,
  },

  inputRow: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },

  input: {
    flex: 1,
  },

  addButton: {
    width: 56,
    height: 56,
    backgroundColor: theme.colors.brandPrimary,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonDisabled: {
    opacity: 0.3,
  },

  timeSelector: {
    flexDirection: 'row',
    backgroundColor: theme.colors.backgroundInput,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.xs,
    gap: 0,
  },

  timeButton: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  timeButtonActive: {
    backgroundColor: theme.colors.backgroundCard,
  },

  timeButtonText: {
    color: theme.colors.textTertiary,
    fontSize: theme.fontSizes.md,
  },

  timeButtonTextActive: {
    color: theme.colors.textPrimary,
  },

  timeSection: {
    marginBottom: theme.spacing.xxxl,
  },

  timeSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },

  timeSectionTitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.md,
  },

  timeSectionCount: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.sm,
  },

  emptyContainer: {
    paddingVertical: theme.spacing.xxxl,
    alignItems: 'center',
  },

  emptyText: {
    color: theme.colors.textTertiary,
    fontSize: theme.fontSizes.md,
  },

  buttonContainer: {
    paddingHorizontal: theme.spacing.xxl,
    paddingBottom: theme.spacing.xxl,
  },
});
