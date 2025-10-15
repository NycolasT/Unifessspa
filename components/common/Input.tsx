/**
 * COMPONENTE: Input (React Native)
 * 
 * Componente de input reutilizável com estilo consistente
 * Suporta todas as propriedades padrão de um TextInput
 */

import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './Input.styles';
import { theme } from '../../styles/theme';

interface InputProps extends TextInputProps {}

export const Input: React.FC<InputProps> = ({ style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={theme.colors.textTertiary}
      {...props}
    />
  );
};
