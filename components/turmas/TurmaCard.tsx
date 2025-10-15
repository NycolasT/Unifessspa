/**
 * COMPONENTE: TurmaCard (React Native)
 * 
 * Card que representa uma turma na lista
 * Exibe o nome da turma e possui interação de clique
 */

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styles } from './TurmaCard.styles';

interface TurmaCardProps {
  nome: string; // Nome da turma
  onPress: () => void; // Função chamada ao clicar no card
}

export const TurmaCard: React.FC<TurmaCardProps> = ({ nome, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      {/* Ícone da turma - Pessoas */}
      <View style={styles.iconContainer}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            fill="#00B37E"
          />
          <Path
            d="M17 13C18.6569 13 20 11.6569 20 10C20 8.34315 18.6569 7 17 7C15.3431 7 14 8.34315 14 10C14 11.6569 15.3431 13 17 13Z"
            fill="#00B37E"
          />
          <Path
            d="M9 12C5.68629 12 3 14.6863 3 18V21H15V18C15 14.6863 12.3137 12 9 12Z"
            fill="#00B37E"
          />
          <Path
            d="M17 14C15.9 14 14.9 14.3 14.05 14.8C15.275 16.15 16 17.95 16 20V21H21V18C21 15.8 19.21 14 17 14Z"
            fill="#00B37E"
          />
        </Svg>
      </View>

      {/* Nome da turma */}
      <Text style={styles.cardText}>{nome}</Text>
    </TouchableOpacity>
  );
};
