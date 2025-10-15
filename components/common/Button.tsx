/**
 * COMPONENTE: Button (React Native)
 * 
 * Componente de botão reutilizável com diferentes variantes
 * Permite customização de cor, tamanho e comportamento
 */

import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'danger'; // Variante de cor do botão
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  disabled,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.buttonPrimary : styles.buttonDanger,
        disabled && styles.buttonDisabled,
        style,
      ]}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
