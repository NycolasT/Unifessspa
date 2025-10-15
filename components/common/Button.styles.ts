/**
 * ESTILOS: Button (React Native)
 * 
 * Estilos do componente Button usando StyleSheet do React Native
 */

import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xxl,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPrimary: {
    backgroundColor: theme.colors.brandPrimary,
  },

  buttonDanger: {
    backgroundColor: theme.colors.danger,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.md,
    fontWeight: '500',
  },
});
