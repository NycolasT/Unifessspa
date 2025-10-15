/**
 * ESTILOS: Header (React Native)
 * 
 * Estilos do componente Header usando StyleSheet do React Native
 */

import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing.xxxl + 16, // Safe area top
    paddingBottom: theme.spacing.xxl,
    paddingHorizontal: theme.spacing.xxl,
  },

  backButton: {
    position: 'absolute',
    left: theme.spacing.xxl,
    top: theme.spacing.xxxl + 16,
    zIndex: 10,
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
