/**
 * TELA: Detalhe da Turma (React Native)
 * 
 * Tela que exibe os detalhes de uma turma específica
 * Permite adicionar e remover participantes, além de remover a turma
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Header } from '../components/layout/Header';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { ParticipanteItem } from '../components/turmas/ParticipanteItem';
import { Turma, TimeType } from '../types';
import { styles } from './DetalheTurmaScreen.styles';

interface DetalheTurmaScreenProps {
  turma: Turma; // Dados da turma
  onVoltar: () => void; // Callback para voltar à tela anterior
  onAdicionarParticipante: (nome: string, time: TimeType) => void; // Callback para adicionar participante
  onRemoverParticipante: (participanteId: string) => void; // Callback para remover participante
  onRemoverTurma: () => void; // Callback para remover a turma
}

export const DetalheTurmaScreen: React.FC<DetalheTurmaScreenProps> = ({
  turma,
  onVoltar,
  onAdicionarParticipante,
  onRemoverParticipante,
  onRemoverTurma,
}) => {
  // ESTADO: Armazena o nome do novo participante
  const [nomeParticipante, setNomeParticipante] = useState('');

  // ESTADO: Armazena o time selecionado (padrão: TIME A)
  const [timeSelecionado, setTimeSelecionado] = useState<TimeType>('TIME A');

  /**
   * FUNÇÃO: Manipula a adição de um novo participante
   * Valida o nome e chama a função de adicionar
   */
  const handleAdicionarParticipante = () => {
    if (nomeParticipante.trim()) {
      onAdicionarParticipante(nomeParticipante.trim(), timeSelecionado);
      setNomeParticipante(''); // Limpa o campo após adicionar
    }
  };

  /**
   * FUNÇÃO: Filtra participantes por time
   * @param time - Time a ser filtrado
   * @returns Array de participantes do time especificado
   */
  const getParticipantesPorTime = (time: TimeType) => {
    return turma.participantes.filter((p) => p.time === time);
  };

  // Separa participantes por time
  const participantesTimeA = getParticipantesPorTime('TIME A');
  const participantesTimeB = getParticipantesPorTime('TIME B');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
        keyboardVerticalOffset={0}
      >
        {/* Header com botão de voltar */}
        <Header showBackButton onBack={onVoltar} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Container principal do conteúdo */}
          <View style={styles.content}>
            {/* Título e subtítulo */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{turma.nome}</Text>
              <Text style={styles.subtitle}>
                adicione a galera e separe os times
              </Text>
            </View>

            {/* Formulário de adicionar participante */}
            <View style={styles.formContainer}>
              <View style={styles.inputRow}>
                {/* Input para nome do participante */}
                <Input
                  placeholder="Nome da pessoa"
                  value={nomeParticipante}
                  onChangeText={setNomeParticipante}
                  style={styles.input}
                  returnKeyType="done"
                  onSubmitEditing={handleAdicionarParticipante}
                />

                {/* Botão de adicionar */}
                <TouchableOpacity
                  onPress={handleAdicionarParticipante}
                  disabled={!nomeParticipante.trim()}
                  style={[
                    styles.addButton,
                    !nomeParticipante.trim() && styles.addButtonDisabled,
                  ]}
                  activeOpacity={0.7}
                >
                  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                      d="M12 5V19M5 12H19"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* Seletor de time */}
              <View style={styles.timeSelector}>
                {/* Botão TIME A */}
                <TouchableOpacity
                  onPress={() => setTimeSelecionado('TIME A')}
                  style={[
                    styles.timeButton,
                    timeSelecionado === 'TIME A' && styles.timeButtonActive,
                  ]}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.timeButtonText,
                      timeSelecionado === 'TIME A' && styles.timeButtonTextActive,
                    ]}
                  >
                    Time A
                  </Text>
                </TouchableOpacity>

                {/* Botão TIME B */}
                <TouchableOpacity
                  onPress={() => setTimeSelecionado('TIME B')}
                  style={[
                    styles.timeButton,
                    timeSelecionado === 'TIME B' && styles.timeButtonActive,
                  ]}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.timeButtonText,
                      timeSelecionado === 'TIME B' && styles.timeButtonTextActive,
                    ]}
                  >
                    Time B
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Lista de participantes - TIME A */}
            <View style={styles.timeSection}>
              <View style={styles.timeSectionHeader}>
                <Text style={styles.timeSectionTitle}>Time A</Text>
                <Text style={styles.timeSectionCount}>
                  {participantesTimeA.length}
                </Text>
              </View>

              {participantesTimeA.length === 0 ? (
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>
                    Não há pessoas nesse time
                  </Text>
                </View>
              ) : (
                participantesTimeA.map((participante) => (
                  <ParticipanteItem
                    key={participante.id}
                    nome={participante.nome}
                    onRemove={() => onRemoverParticipante(participante.id)}
                  />
                ))
              )}
            </View>

            {/* Lista de participantes - TIME B */}
            <View style={styles.timeSection}>
              <View style={styles.timeSectionHeader}>
                <Text style={styles.timeSectionTitle}>Time B</Text>
                <Text style={styles.timeSectionCount}>
                  {participantesTimeB.length}
                </Text>
              </View>

              {participantesTimeB.length === 0 ? (
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>
                    Não há pessoas nesse time
                  </Text>
                </View>
              ) : (
                participantesTimeB.map((participante) => (
                  <ParticipanteItem
                    key={participante.id}
                    nome={participante.nome}
                    onRemove={() => onRemoverParticipante(participante.id)}
                  />
                ))
              )}
            </View>
          </View>
        </ScrollView>

        {/* Botão de remover turma - fixo na parte inferior */}
        <View style={styles.buttonContainer}>
          <Button variant="danger" onPress={onRemoverTurma}>
            Remover turma
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
