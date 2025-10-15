/**
 * ESTILOS: Input (React Native)
 * 
 * Estilos do componente Input usando StyleSheet do React Native
 */

import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.backgroundInput,
    color: theme.colors.textPrimary,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.fontSizes.md,
  },
});
