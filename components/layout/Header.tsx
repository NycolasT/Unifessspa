/**
 * COMPONENTE: Header (React Native)
 * 
 * Componente reutilizável para o cabeçalho da aplicação
 * Exibe o logo (escudo) e opcionalmente um botão de voltar
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Svg, { Path, Line, Circle } from 'react-native-svg';
import { styles } from './Header.styles';

interface HeaderProps {
  showBackButton?: boolean; // Mostra ou não o botão de voltar
  onBack?: () => void; // Função callback quando clicar em voltar
}

export const Header: React.FC<HeaderProps> = ({ showBackButton = false, onBack }) => {
  return (
    <View style={styles.container}>
      {/* Botão de voltar - posicionado à esquerda */}
      {showBackButton && (
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <Path
              d="M15 18l-6-6 6-6"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      )}

      {/* Logo da aplicação - Escudo Verde */}
      <View style={styles.logoContainer}>
        <Svg width="56" height="64" viewBox="0 0 56 64">
          {/* Escudo externo */}
          <Path
            d="M28 0L3 10.5V28C3 43.5 12 58 28 64C44 58 53 43.5 53 28V10.5L28 0Z"
            fill="#00875F"
          />
          {/* Escudo interno mais escuro */}
          <Path
            d="M28 6L8 14.5V28C8 41 15.5 52.5 28 57.5C40.5 52.5 48 41 48 28V14.5L28 6Z"
            fill="#00684A"
          />
          {/* Linhas decorativas */}
          <Line x1="28" y1="20" x2="28" y2="48" stroke="#00B37E" strokeWidth="2.5" />
          <Line x1="18" y1="28" x2="38" y2="28" stroke="#00B37E" strokeWidth="2.5" />
          <Circle cx="28" cy="28" r="3" fill="#00B37E" />
        </Svg>
      </View>
    </View>
  );
};
