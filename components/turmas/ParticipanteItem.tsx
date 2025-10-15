/**
 * COMPONENTE: ParticipanteItem (React Native)
 * 
 * Item que representa um participante na lista
 * Exibe o nome e um botão para remover o participante
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styles } from './ParticipanteItem.styles';

interface ParticipanteItemProps {
  nome: string; // Nome do participante
  onRemove: () => void; // Função chamada ao clicar no botão de remover
}

export const ParticipanteItem: React.FC<ParticipanteItemProps> = ({ nome, onRemove }) => {
  return (
    <View style={styles.container}>
      {/* Container do ícone e nome do participante */}
      <View style={styles.leftContent}>
        {/* Ícone de usuário */}
        <View style={styles.avatar}>
          <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <Path
              d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
              fill="#7C7C8A"
            />
          </Svg>
        </View>

        {/* Nome do participante */}
        <Text style={styles.nome}>{nome}</Text>
      </View>

      {/* Botão de remover participante */}
      <TouchableOpacity onPress={onRemove} activeOpacity={0.7}>
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Path
            d="M15 5L5 15M5 5L15 15"
            stroke="#F75A68"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};
