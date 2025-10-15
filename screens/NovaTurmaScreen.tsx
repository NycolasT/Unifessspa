/**
 * TELA: Nova Turma (React Native)
 * 
 * Tela para criar uma nova turma
 * Permite inserir o nome e confirmar a criação
 */

import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { Header } from '../components/layout/Header';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { styles } from './NovaTurmaScreen.styles';

interface NovaTurmaScreenProps {
  onVoltar: () => void; // Callback para voltar à tela anterior
  onCriarTurma: (nome: string) => void; // Callback para criar uma nova turma
}

export const NovaTurmaScreen: React.FC<NovaTurmaScreenProps> = ({
  onVoltar,
  onCriarTurma,
}) => {
  // ESTADO: Armazena o nome da turma digitado pelo usuário
  const [nomeTurma, setNomeTurma] = useState('');

  /**
   * FUNÇÃO: Manipula o envio do formulário
   * Valida se o nome foi preenchido e chama a função de criar turma
   */
  const handleSubmit = () => {
    // Valida se o nome não está vazio (após remover espaços)
    if (nomeTurma.trim()) {
      onCriarTurma(nomeTurma.trim());
      setNomeTurma(''); // Limpa o campo após criar
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        {/* Header com botão de voltar */}
        <Header showBackButton onBack={onVoltar} />

        {/* Container principal do conteúdo */}
        <View style={styles.content}>
          {/* Ícone decorativo - Pessoas */}
          <View style={styles.iconContainer}>
            <Svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <Circle cx="28" cy="28" r="28" fill="#00875F" fillOpacity="0.1" />
              <Path
                d="M22 27C25.3137 27 28 24.3137 28 21C28 17.6863 25.3137 15 22 15C18.6863 15 16 17.6863 16 21C16 24.3137 18.6863 27 22 27Z"
                fill="#00B37E"
              />
              <Path
                d="M34 31C36.2091 31 38 29.2091 38 27C38 24.7909 36.2091 23 34 23C31.7909 23 30 24.7909 30 27C30 29.2091 31.7909 31 34 31Z"
                fill="#00B37E"
              />
              <Path
                d="M22 28C17.0294 28 13 32.0294 13 37V41H31V37C31 32.0294 26.9706 28 22 28Z"
                fill="#00B37E"
              />
              <Path
                d="M34 32C32.45 32 31.05 32.5 29.95 33.35C31.725 35.45 32.8 38.15 32.8 41V41H41V37C41 34.2 38.8 32 34 32Z"
                fill="#00B37E"
              />
            </Svg>
          </View>

          {/* Título e subtítulo */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Nova turma</Text>
            <Text style={styles.subtitle}>crie a turma para adicionar as pessoas</Text>
          </View>

          {/* Formulário de criação */}
          <View style={styles.form}>
            {/* Campo de input para o nome da turma */}
            <Input
              placeholder="Nome da turma"
              value={nomeTurma}
              onChangeText={setNomeTurma}
              autoFocus
              returnKeyType="done"
              onSubmitEditing={handleSubmit}
            />

            {/* Botão de criar turma */}
            <Button
              onPress={handleSubmit}
              disabled={!nomeTurma.trim()} // Desabilita se o campo estiver vazio
            >
              Criar
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
